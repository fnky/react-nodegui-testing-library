// eslint-disable-next-line @typescript-eslint/no-unused-vars
import * as config from '@nodegui/react-nodegui/dist/components/config';

declare module '@nodegui/react-nodegui/dist/components/config' {
  // HACK: Patch RNProps for all components to include `testID` props for
  // testing.
  export interface RNProps {
    testID?: string;
  }
}
