import { ReactTestRendererJSON } from 'react-test-renderer';
import format from './format';

/**
 * Log pretty-printed deep test component instance
 */
export default function debugDeep(
  instance?: ReactTestRendererJSON | React.ReactElement<any> | null,
  message: any = '',
): void {
  if (message) {
    console.log(`${message}\n\n`, format(instance));
  } else {
    console.log(format(instance));
  }
}
