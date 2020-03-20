import * as React from 'react';
import { View, Text, Button } from '@nodegui/react-nodegui';
import { render, fireEvent, waitForElement } from '..';

class Banana extends React.Component<any> {
  changeFresh = () => {
    this.props.onChangeFresh();
  };

  render() {
    return (
      <View>
        {this.props.fresh && <Text testID="fresh">Fresh</Text>}
        <Button text="Change freshness!" on={{ clicked: this.changeFresh }} />
      </View>
    );
  }
}

class BananaContainer extends React.Component<{}, any> {
  state = { fresh: false };

  onChangeFresh = async () => {
    await new Promise(resolve => setTimeout(resolve, 300));
    this.setState({ fresh: true });
  };

  render() {
    return (
      <Banana onChangeFresh={this.onChangeFresh} fresh={this.state.fresh} />
    );
  }
}

test('waits for element until it stops throwing', async () => {
  const { getByTestId, getByType, queryByTestId } = render(<BananaContainer />);

  fireEvent.click(getByType(Button as any));

  expect(queryByTestId('fresh')).toBeNull();

  const freshBananaText = await waitForElement(() => getByTestId('fresh'));

  expect(freshBananaText.props.children).toBe('Fresh');
});

test('waits for element until timeout is met', async () => {
  const { getByTestId, getByType } = render(<BananaContainer />);

  fireEvent.click(getByType(Button as any));

  await expect(
    waitForElement(() => getByTestId('fresh'), 100),
  ).rejects.toThrow();
});

test('waits for element with custom interval', async () => {
  const mockFn = jest.fn(() => {
    throw Error('test');
  });

  try {
    await waitForElement(() => mockFn(), 400, 200);
  } catch (e) {
    // suppress
  }

  expect(mockFn).toHaveBeenCalledTimes(3);
});

test('works with fake timers', async () => {
  jest.useFakeTimers();

  const mockFn = jest.fn(() => {
    throw Error('test');
  });

  try {
    waitForElement(() => mockFn(), 400, 200);
  } catch (e) {
    // suppress
  }
  jest.runTimersToTime(400);

  expect(mockFn).toHaveBeenCalledTimes(3);

  jest.useRealTimers();
});
