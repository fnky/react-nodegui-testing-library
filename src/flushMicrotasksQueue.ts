/**
 * Wait for microtasks queue to flush
 */
export default function flushMicrotasksQueue(): Promise<void> {
  return new Promise(resolve => setImmediate(resolve));
}
