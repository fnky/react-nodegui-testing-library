import React from 'react';
import { Text } from '@nodegui/react-nodegui';
import { render } from '../';

test('rerender will re-render the element', () => {
  const Greeting: React.FC<any> = props => <Text>{props.message}</Text>;
  const { getByText, rerender } = render(<Greeting message="hi" />);

  const text = getByText('hi');
  expect(text.props.children).toBe('hi');

  rerender(<Greeting message="hey" />);

  const sameText = getByText('hey');
  expect(sameText.props.children).toBe('hey');
});
