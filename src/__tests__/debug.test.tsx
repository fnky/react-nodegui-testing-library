import * as React from 'react';
import { Button as NodeGuiButton, Text } from '@nodegui/react-nodegui';
import stripAnsi from 'strip-ansi';
import { debug, render, fireEvent, flushMicrotasksQueue } from '..';
import debugShallow from '../helpers/debugShallow';

type ConsoleLogMock = jest.MockedFunction<typeof console.log>;

function TextComponent({ text }: { text: string }): React.ReactElement {
  return <Text>{text}</Text>;
}

class Button extends React.Component<any, any> {
  state = { counter: 0 };

  onPress = async () => {
    await Promise.resolve();

    this.setState({ counter: 1 });
    this.props.onPress();
  };

  render() {
    return (
      <>
        <NodeGuiButton
          on={{ clicked: this.onPress }}
          text={`${this.props.text} ${this.state.counter}`}
        />
        <TextComponent text={`${this.props.text} ${this.state.counter}`} />
      </>
    );
  }
}

test('debug', () => {
  jest.spyOn(console, 'log').mockImplementation(x => x);
  const component = <Button onPress={jest.fn} text="Press me" />;
  debug(component);

  const output = (console.log as ConsoleLogMock).mock.calls[0][0];

  expect(stripAnsi(output)).not.toEqual(output);
  expect(stripAnsi(output)).toMatchSnapshot();

  (console.log as ConsoleLogMock).mockReset();

  debug(component, 'test message');

  expect(console.log).toHaveBeenCalledWith('test message\n\n', output);
});

test('debug.shallow', () => {
  expect(debug.shallow).toBe(debugShallow);
});

test('debug.deep', () => {
  // $FlowFixMe
  console.log = jest.fn();
  const component = <Button onPress={jest.fn} text="Press me" />;
  debug.deep(component);

  const output = (console.log as ConsoleLogMock).mock.calls[0][0];

  expect(stripAnsi(output)).not.toEqual(output);
  expect(stripAnsi(output)).toMatchSnapshot();

  (console.log as ConsoleLogMock).mockReset();

  debug.deep(component, 'test message');

  expect(console.log).toHaveBeenCalledWith('test message\n\n', output);
});

test('debug.deep async test', async () => {
  // $FlowFixMe
  console.log = jest.fn();
  const { toJSON, getByType } = render(
    <Button onPress={jest.fn} text="Press me" />,
  );

  fireEvent.click(getByType(NodeGuiButton as any));
  await flushMicrotasksQueue();

  debug.deep(toJSON());

  const output = (console.log as ConsoleLogMock).mock.calls[0][0];

  expect(stripAnsi(output)).toMatchSnapshot();
});
