import * as React from 'react';
import { Button } from '@nodegui/react-nodegui';
import ReactTestRenderer from 'react-test-renderer';
import act from '../act';
import render from '../render';
import fireEvent from '../fireEvent';

const UseEffect = ({ callback }: { callback: React.EffectCallback }) => {
  React.useEffect(callback);
  return null;
};

const Counter = () => {
  const [count, setCount] = React.useState(0);

  return (
    <Button
      testID="counter"
      on={{ clicked: () => setCount(count + 1) }}
      text={`${count}`}
    />
  );
};
test('render should trigger useEffect', () => {
  const effectCallback = jest.fn();
  render(<UseEffect callback={effectCallback} />);

  expect(effectCallback).toHaveBeenCalledTimes(1);
});

test('update should trigger useEffect', () => {
  const effectCallback = jest.fn();
  const { update } = render(<UseEffect callback={effectCallback} />);
  update(<UseEffect callback={effectCallback} />);

  expect(effectCallback).toHaveBeenCalledTimes(2);
});

test('fireEvent should trigger useState', () => {
  const { getByTestId } = render(<Counter />);
  const counter = getByTestId('counter');

  expect(counter.props.text).toEqual('0');
  fireEvent.click(counter);
  expect(counter.props.text).toEqual('1');
});

test('should act even if there is no act in react-test-renderer', () => {
  // @ts-ignore
  ReactTestRenderer.act = undefined;
  const callback = jest.fn();

  act(() => {
    callback();
  });

  expect(callback).toHaveBeenCalled();
});
