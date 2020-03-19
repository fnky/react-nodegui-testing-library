import React from 'react';
import { ReactTestRendererJSON, ReactTestInstance } from 'react-test-renderer';
import render from './render';
import debugShallow from './helpers/debugShallow';
import debugDeep from './helpers/debugDeep';
import format from './helpers/format';

export type DebugFunction = (
  instance: ReactTestInstance | React.ReactElement<any>,
  message?: string,
) => void;

export type DebugAPI = DebugFunction & {
  shallow: DebugFunction;
  deep: (
    instance: React.ReactElement<any> | ReactTestRendererJSON | null,
    message?: string,
  ) => void;
};

/**
 * Log pretty-printed deep test component instance
 */
function debugDeepElementOrInstance(
  instance:
    | React.ReactElement<any>
    | (ReactTestRendererJSON | undefined)
    | null,
  message: any = '',
): void {
  try {
    // We're assuming React.Element<any> here and fallback to
    // rendering ReactTestRendererJSON
    const { toJSON } = render(instance as React.ReactElement<any>);
    if (message) {
      console.log(`${message}\n\n`, format(toJSON()!));
    } else {
      console.log(format(toJSON()!));
    }
  } catch (e) {
    debugDeep(instance);
  }
}

function debug(
  instance: ReactTestInstance | React.ReactElement<any>,
  message?: any,
): void {
  return debugShallow(instance, message);
}

debug.shallow = debugShallow;
debug.deep = debugDeepElementOrInstance;

export default debug;
