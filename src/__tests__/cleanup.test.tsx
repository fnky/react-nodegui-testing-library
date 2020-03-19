import * as React from 'react';
import { View } from '@nodegui/react-nodegui';
import { cleanup, render } from '..';

class Test extends React.Component<any> {
  componentWillUnmount() {
    if (this.props.onUnmount) {
      this.props.onUnmount();
    }
  }
  render() {
    return <View />;
  }
}

test('cleanup', () => {
  const fn = jest.fn();

  render(<Test onUnmount={fn} />);
  render(<Test onUnmount={fn} />);
  expect(fn).not.toHaveBeenCalled();

  cleanup();
  expect(fn).toHaveBeenCalledTimes(2);
});
