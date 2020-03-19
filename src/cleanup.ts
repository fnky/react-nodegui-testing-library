import { ReactElement } from 'react';

const cleanupQueue = new Set<() => void>();

export default function cleanup(): void {
  cleanupQueue.forEach(fn => fn());
  cleanupQueue.clear();
}

export function addToCleanupQueue(
  fn: (nextElement?: ReactElement<any>) => void,
): void {
  cleanupQueue.add(fn);
}
