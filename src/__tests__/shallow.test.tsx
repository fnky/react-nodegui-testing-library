import * as React from 'react';
import { View, Button } from '@nodegui/react-nodegui';
import { shallow, render } from '..';

interface Props {
  dummyID?: string;
}

const TextPress: React.FC<Props> = ({ dummyID }) => (
  <View testID={dummyID}>
    <Button testID="button" text="Press me" />
  </View>
);

test.skip('shallow rendering React elements', () => {
  const { output } = shallow(<TextPress dummyID="2" />);
  expect(output).toMatchSnapshot();
});

test.skip('shallow rendering React Test Instance', () => {
  const { getByTestId } = render(<TextPress />);
  const { output } = shallow(getByTestId('button'));

  expect(output).toMatchSnapshot();
});
