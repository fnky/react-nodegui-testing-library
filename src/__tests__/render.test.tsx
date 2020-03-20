import * as React from 'react';
import stripAnsi from 'strip-ansi';
import { View, Text, Button, LineEdit } from '@nodegui/react-nodegui';
import { render, fireEvent } from '..';

type ConsoleLogMock = jest.MockedFunction<typeof console.log>;

const PLACEHOLDER_FRESHNESS = 'Add custom freshness';
const PLACEHOLDER_CHEF = 'Who inspected freshness?';
const INPUT_FRESHNESS = 'Custom Freshie';
const INPUT_CHEF = 'I inspected freshie';

class Banana extends React.Component<any, { fresh: boolean }> {
  state = {
    fresh: false,
  };

  componentDidUpdate() {
    if (this.props.onUpdate) {
      this.props.onUpdate();
    }
  }

  componentWillUnmount() {
    if (this.props.onUnmount) {
      this.props.onUnmount();
    }
  }

  changeFresh = () => {
    this.setState(state => ({
      fresh: !state.fresh,
    }));
  };

  render() {
    const test = 0;
    return (
      <View>
        <Text>Is the banana fresh?</Text>
        <Text testID="bananaFresh">
          {this.state.fresh ? 'fresh' : 'not fresh'}
        </Text>
        <LineEdit
          testID="bananaCustomFreshness"
          placeholderText={PLACEHOLDER_FRESHNESS}
          text={INPUT_FRESHNESS}
        />
        <LineEdit
          testID="bananaCustomFreshness"
          placeholderText={PLACEHOLDER_CHEF}
          text={INPUT_CHEF}
        />
        <Button
          on={{ clicked: this.changeFresh }}
          text="Change freshness!"
          id="primary"
        />
        <Text testID="duplicateText">First Text</Text>
        <Text testID="duplicateText">Second Text</Text>
        <Text>{test}</Text>
      </View>
    );
  }
}

test('getByTestId, queryByTestId', () => {
  const { getByTestId, queryByTestId } = render(<Banana />);
  const component = getByTestId('bananaFresh');

  expect(component.props.children).toBe('not fresh');
  expect(() => getByTestId('InExistent')).toThrow('No instances found');

  expect(getByTestId('bananaFresh')).toBe(component);
  expect(queryByTestId('InExistent')).toBeNull();
});

test('getAllByTestId, queryAllByTestId', () => {
  const { getAllByTestId, queryAllByTestId } = render(<Banana />);
  const textElements = getAllByTestId('duplicateText');

  expect(textElements.length).toBe(2);
  expect(textElements[0].props.children).toBe('First Text');
  expect(textElements[1].props.children).toBe('Second Text');
  expect(() => getAllByTestId('nonExistentTestId')).toThrow(
    'No instances found',
  );

  // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
  const queriedTextElements = queryAllByTestId('duplicateText')!;

  expect(queriedTextElements.length).toBe(2);
  expect(queriedTextElements[0]).toBe(textElements[0]);
  expect(queriedTextElements[1]).toBe(textElements[1]);
  expect(queryAllByTestId('nonExistentTestId')).toHaveLength(0);
});

test('getAllByType, queryAllByType', () => {
  const { getAllByType, queryAllByType } = render(<Banana />);
  const [text, status] = getAllByType(Text as any);
  const InExistent = () => null;

  expect(text.props.children).toBe('Is the banana fresh?');
  expect(status.props.children).toBe('not fresh');
  expect(() => getAllByType(InExistent)).toThrow('No instances found');

  expect(queryAllByType(Text as any)[1]).toBe(status);
  expect(queryAllByType(InExistent)).toHaveLength(0);
});

test('getByText, queryByText', () => {
  const { getByText, queryByText } = render(<Banana />);
  const text = getByText(/first/i);

  expect(text.props.children).toBe('First Text');

  const sameText = getByText('not fresh');

  expect(sameText.props.children).toBe('not fresh');
  expect(() => getByText('InExistent')).toThrow('No instances found');

  const buttonText = getByText(/change/i);

  expect(buttonText.props.text).toBe('Change freshness!');

  const buttonSameText = getByText('Change freshness!');

  expect(buttonSameText.props.text).toBe('Change freshness!');

  const zeroText = getByText('0');

  expect(queryByText(/first/i)).toBe(text);
  expect(queryByText('InExistent')).toBeNull();
  expect(() => queryByText(/fresh/)).toThrow('Expected 1 but found 3');
  expect(queryByText('0')).toBe(zeroText);
});

// FIXME: Enable the test once https://github.com/nodegui/react-nodegui/pull/167
// has been merged and react-nodegui has been updated.
test.skip('getByText, queryByText with children as Array', () => {
  const BananaCounter = ({
    numBananas,
  }: {
    numBananas: number;
  }): React.ReactElement | null => (
    // @ts-ignore: <Text> components don't accept arrays yet.
    <Text>There are {numBananas} bananas in the bunch</Text>
  );

  const BananaStore = () => (
    <View>
      <BananaCounter numBananas={3} />
      <BananaCounter numBananas={6} />
      <BananaCounter numBananas={5} />
    </View>
  );

  const { getByText } = render(<BananaStore />);

  const threeBananaBunch = getByText('There are 3 bananas in the bunch');
  expect(threeBananaBunch.props.children).toEqual([
    'There are ',
    3,
    ' bananas in the bunch',
  ]);
});

test('getAllByText, queryAllByText', () => {
  const { getAllByText, queryAllByText } = render(<Banana />);
  const buttons = getAllByText(/fresh/i);

  expect(buttons).toHaveLength(3);
  expect(() => getAllByText('InExistent')).toThrow('No instances found');

  expect(queryAllByText(/fresh/i)).toEqual(buttons);
  expect(queryAllByText('InExistent')).toHaveLength(0);
});

test('getByPlaceholder, queryByPlaceholder', () => {
  const { getByPlaceholder, queryByPlaceholder } = render(<Banana />);
  const input = getByPlaceholder(/custom/i);

  expect(input.props.placeholderText).toBe(PLACEHOLDER_FRESHNESS);

  const sameInput = getByPlaceholder(PLACEHOLDER_FRESHNESS);

  expect(sameInput.props.placeholderText).toBe(PLACEHOLDER_FRESHNESS);
  expect(() => getByPlaceholder('no placeholder')).toThrow(
    'No instances found',
  );

  expect(queryByPlaceholder(/add/i)).toBe(input);
  expect(queryByPlaceholder('no placeholder')).toBeNull();
  expect(() => queryByPlaceholder(/fresh/)).toThrow('Expected 1 but found 2');
});

test('getAllByPlaceholder, queryAllByPlaceholder', () => {
  const { getAllByPlaceholder, queryAllByPlaceholder } = render(<Banana />);
  const inputs = getAllByPlaceholder(/fresh/i);

  expect(inputs).toHaveLength(2);
  expect(() => getAllByPlaceholder('no placeholder')).toThrow(
    'No instances found',
  );

  expect(queryAllByPlaceholder(/fresh/i)).toEqual(inputs);
  expect(queryAllByPlaceholder('no placeholder')).toHaveLength(0);
});

test('getByDisplayValue, queryByDisplayValue', () => {
  const { getByDisplayValue, queryByDisplayValue } = render(<Banana />);
  const input = getByDisplayValue(/custom/i);

  expect(input.props.text).toBe(INPUT_FRESHNESS);

  const sameInput = getByDisplayValue(INPUT_FRESHNESS);

  expect(sameInput.props.text).toBe(INPUT_FRESHNESS);
  expect(() => getByDisplayValue('no value')).toThrow('No instances found');

  expect(queryByDisplayValue(/custom/i)).toBe(input);
  expect(queryByDisplayValue('no value')).toBeNull();
  expect(() => queryByDisplayValue(/fresh/i)).toThrow('Expected 1 but found 2');
});

test('getAllByDisplayValue, queryAllByDisplayValue', () => {
  const { getAllByDisplayValue, queryAllByDisplayValue } = render(<Banana />);
  const inputs = getAllByDisplayValue(/fresh/i);

  expect(inputs).toHaveLength(2);
  expect(() => getAllByDisplayValue('no value')).toThrow('No instances found');

  expect(queryAllByDisplayValue(/fresh/i)).toEqual(inputs);
  expect(queryAllByDisplayValue('no value')).toHaveLength(0);
});

test('getByProps, queryByProps', () => {
  const { getByProps, queryByProps } = render(<Banana />);
  const primaryType = getByProps({ id: 'primary' });

  expect(primaryType.props.text).toBe('Change freshness!');
  expect(() => getByProps({ id: 'inexistent' })).toThrow('No instances found');

  expect(queryByProps({ id: 'primary' })).toBe(primaryType);
  expect(queryByProps({ id: 'inexistent' })).toBeNull();
});

test('getAllByProp, queryAllByProps', () => {
  const { getAllByProps, queryAllByProps } = render(<Banana />);
  const primaryTypes = getAllByProps({ id: 'primary' });

  expect(primaryTypes).toHaveLength(1);
  expect(() => getAllByProps({ id: 'inexistent' })).toThrow(
    'No instances found',
  );

  expect(queryAllByProps({ id: 'primary' })).toEqual(primaryTypes);
  expect(queryAllByProps({ id: 'inexistent' })).toHaveLength(0);
});

test('update will update the element', () => {
  const fn = jest.fn();
  const { getByType, update, rerender } = render(<Banana onUpdate={fn} />);
  const button = getByType(Button as any);

  button.props.on.clicked();

  update(<Banana onUpdate={fn} />);
  rerender(<Banana onUpdate={fn} />);

  expect(fn).toHaveBeenCalledTimes(3);
});

test('unmount will unmount the element', () => {
  const fn = jest.fn();
  const { unmount } = render(<Banana onUnmount={fn} />);
  unmount();
  expect(fn).toHaveBeenCalled();
});

test('toJSON will return json representation of the element', () => {
  const { toJSON } = render(<Text>read me</Text>);

  expect(toJSON()).toMatchSnapshot();
});

test('debug', () => {
  jest.spyOn(console, 'log').mockImplementation(x => x);

  const { debug } = render(<Banana />);

  debug();
  debug('my custom message');
  debug.shallow();
  debug.shallow('my other custom message');

  // eslint-disable-next-line no-console
  const mockCalls = (console.log as ConsoleLogMock).mock.calls;

  expect(stripAnsi(mockCalls[0][0])).toMatchSnapshot();
  expect(stripAnsi(mockCalls[1][0] + mockCalls[1][1])).toMatchSnapshot(
    'with message',
  );
  expect(stripAnsi(mockCalls[2][0])).toMatchSnapshot('shallow');
  expect(stripAnsi(mockCalls[3][0] + mockCalls[3][1])).toMatchSnapshot(
    'shallow with message',
  );
});

test('debug changing component', () => {
  jest.spyOn(console, 'log').mockImplementation(x => x);

  const { getByProps, debug } = render(<Banana />);

  fireEvent.click(getByProps({ id: 'primary' }));

  debug();

  const mockCalls = (console.log as ConsoleLogMock).mock.calls;

  expect(stripAnsi(mockCalls[4][0])).toMatchSnapshot(
    'bananaFresh button message should now be "fresh"',
  );
});

test('renders options.wrapper around node', () => {
  const WrapperComponent: React.FC = ({ children }) => (
    <View testID="wrapper">{children}</View>
  );

  const { toJSON, getByTestId } = render(<View testID="inner" />, {
    wrapper: WrapperComponent,
  });

  expect(getByTestId('wrapper')).toBeTruthy();
  expect(toJSON()).toMatchInlineSnapshot(`
    <view
      testID="wrapper"
    >
      <view
        testID="inner"
      />
    </view>
  `);
});

test('renders options.wrapper around updated node', () => {
  const WrapperComponent: React.FC = ({ children }) => (
    <View testID="wrapper">{children}</View>
  );

  const { toJSON, getByTestId, rerender } = render(<View testID="inner" />, {
    wrapper: WrapperComponent,
  });

  rerender(<View testID="inner" id="test" />);

  expect(getByTestId('wrapper')).toBeTruthy();
  expect(toJSON()).toMatchInlineSnapshot(`
    <view
      testID="wrapper"
    >
      <view
        id="test"
        testID="inner"
      />
    </view>
  `);
});
