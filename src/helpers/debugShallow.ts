import { ReactTestInstance } from 'react-test-renderer';
import shallow from '../shallow';
import format from './format';

/**
 * Log pretty-printed shallow test component instance
 */
export default function debugShallow(
  instance: ReactTestInstance | React.ReactElement<any>,
  message?: any,
): void {
  const { output } = shallow(instance);

  if (message) {
    console.log(`${message}\n\n`, format(output));
  } else {
    console.log(format(output));
  }
}
