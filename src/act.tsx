import { act, DebugPromiseLike } from 'react-test-renderer';

/**
 * Wrap any code rendering and triggering updates to your components into `act()` calls.
 *
 * Ensures that the behavior in your tests matches what happens in the browser
 * more closely by executing pending `useEffect`s before returning. This also
 * reduces the amount of re-renders done.
 *
 * @param callback An asynchronous, void callback that will execute as a single, complete React commit.
 *
 * @see https://reactjs.org/blog/2019/02/06/react-v16.8.0.html#testing-hooks
 */
function actMock(callback: () => Promise<void | undefined>): Promise<undefined>;
/**
 * Wrap any code rendering and triggering updates to your components into `act()` calls.
 *
 * Ensures that the behavior in your tests matches what happens in the browser
 * more closely by executing pending `useEffect`s before returning. This also
 * reduces the amount of re-renders done.
 *
 * @param callback A synchronous, void callback that will execute as a single, complete React commit.
 *
 * @see https://reactjs.org/blog/2019/02/06/react-v16.8.0.html#testing-hooks
 */
function actMock(callback: () => void | undefined): DebugPromiseLike;
function actMock(
  callback: () => Promise<void | undefined> | void | undefined,
): Promise<undefined> | DebugPromiseLike {
  return callback() as Promise<undefined> | DebugPromiseLike;
}

export default act || actMock;
