import prettyFormat, { plugins } from 'pretty-format';
import { ReactTestRendererJSON } from 'react-test-renderer';

export default function format(
  input?: ReactTestRendererJSON | React.ReactElement<any> | null,
): string {
  return prettyFormat(input, {
    plugins: [plugins.ReactTestComponent, plugins.ReactElement],
    highlight: true,
  });
}
