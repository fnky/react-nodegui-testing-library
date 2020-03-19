import * as React from 'react';
import { View, Button, Text, LineEdit } from '@nodegui/react-nodegui';
import { QAbstractButtonSignals } from '@nodegui/nodegui';
import { RNProps } from '@nodegui/react-nodegui/dist/components/config';
import { ButtonProps } from '@nodegui/react-nodegui/dist/components/Button/RNButton';
import { render, fireEvent } from '..';

const OnComponent: React.FC<{ on: ButtonProps['on'] }> = ({ on }) => (
  <View>
    <Button on={on} testID="button" />
  </View>
);

const WithoutEventComponent: React.FC<{}> = () => (
  <View>
    <Text testID="text">Content</Text>
  </View>
);

const CustomEventComponent: React.FC<RNProps & {
  onCustomEvent: QAbstractButtonSignals['clicked'];
}> = ({ onCustomEvent }) => (
  <Button on={{ clicked: onCustomEvent }} text="Click me" />
);

const MyCustomButton: React.FC<RNProps & {
  handleClick: QAbstractButtonSignals['clicked'];
}> = ({ handleClick }) => <OnComponent on={{ clicked: handleClick }} />;

const CustomEventComponentWithCustomName: React.FC<{
  handleClick: QAbstractButtonSignals['clicked'];
}> = ({ handleClick }) => (
  <MyCustomButton testID="my-custom-button" handleClick={handleClick} />
);

describe('fireEvent', () => {
  test('should invoke specified event', () => {
    const onPressMock = jest.fn();
    const { getByTestId } = render(
      <OnComponent on={{ clicked: onPressMock }} />,
    );

    fireEvent(getByTestId('button'), 'clicked');

    expect(onPressMock).toHaveBeenCalled();
  });

  test('should invoke specified event on parent element', () => {
    const onPressMock = jest.fn();
    const { getByTestId } = render(
      <OnComponent on={{ clicked: onPressMock }} />,
    );

    fireEvent(getByTestId('button'), 'clicked');

    expect(onPressMock).toHaveBeenCalled();
  });

  test('should throw an Error when event handler was not found', () => {
    const { getByTestId } = render(<WithoutEventComponent />);

    expect(() => fireEvent(getByTestId('text'), 'clicked')).toThrow(
      'No handler function found for event: "clicked"',
    );
  });

  test('should invoke event with custom name', () => {
    const handlerMock = jest.fn();
    const EVENT_DATA = 'event data';

    const { getByTestId } = render(
      <View>
        <CustomEventComponent testID="custom" onCustomEvent={handlerMock} />
      </View>,
    );

    fireEvent(getByTestId('custom'), 'customEvent', EVENT_DATA);

    expect(handlerMock).toHaveBeenCalledWith(EVENT_DATA);
  });

  test.skip('should not bubble event to root element', () => {
    const onPressMock = jest.fn();
    const { getByTestId } = render(
      <View>
        <Button testID="test" on={{ clicked: onPressMock }} text="Content" />
      </View>,
    );

    expect(() => fireEvent.click(getByTestId('test'))).toThrow();
    expect(onPressMock).not.toHaveBeenCalled();
  });
});

test('fireEvent.click', () => {
  const onPressMock = jest.fn();
  const { getByTestId } = render(<OnComponent on={{ clicked: onPressMock }} />);

  fireEvent.click(getByTestId('button'));

  expect(onPressMock).toHaveBeenCalled();
});

test('fireEvent.changeText', () => {
  const onChangeTextMock = jest.fn();
  const CHANGE_TEXT = 'content';

  const { getByTestId } = render(
    <View>
      <LineEdit testID="text-input" on={{ textChanged: onChangeTextMock }} />
    </View>,
  );

  fireEvent.changeText(getByTestId('text-input'), CHANGE_TEXT);

  expect(onChangeTextMock).toHaveBeenCalledWith(CHANGE_TEXT);
});

test('custom component with custom event name', () => {
  const handleClick = jest.fn();

  const { getByTestId } = render(
    <CustomEventComponentWithCustomName handleClick={handleClick} />,
  );

  fireEvent(getByTestId('my-custom-button'), 'handleClick');

  expect(handleClick).toHaveBeenCalled();
});

test('event with multiple handler parameters', () => {
  const handleClick = jest.fn();

  const { getByTestId } = render(
    <CustomEventComponentWithCustomName handleClick={handleClick} />,
  );

  fireEvent(getByTestId('my-custom-button'), 'handleClick', 'param1', 'param2');

  expect(handleClick).toHaveBeenCalledWith('param1', 'param2');
});
