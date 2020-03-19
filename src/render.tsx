import React from 'react';
import TestRenderer, {
  ReactTestRenderer,
  ReactTestInstance,
  ReactTestRendererJSON,
} from 'react-test-renderer';
import act from './act';
import { addToCleanupQueue } from './cleanup';
import { getByAPI, GetByAPI } from './helpers/getByAPI';
import { queryByAPI, QueryByAPI } from './helpers/queryByAPI';
import debugShallow from './helpers/debugShallow';
import debugDeep from './helpers/debugDeep';

type DebugFn = (message?: string) => void;
type DebugShallow = DebugFn;
type Debug = DebugFn & { shallow: DebugShallow };

export interface RenderAPI extends GetByAPI, QueryByAPI {
  update(nextElement: React.ReactElement<any>): void;
  rerender(nextElement: React.ReactElement<any>): void;
  unmount(nextElement?: React.ReactElement<any>): void;
  toJSON(): ReactTestRendererJSON | null;
  debug: Debug;
}

export interface RenderOptions {
  wrapper?: React.ComponentType<any>;
  createNodeMock?: (element: React.ReactElement<any>) => any;
}

export interface TestRendererOptions {
  createNodeMock: (element: React.ReactElement<any>) => any;
}

type RendererUpdateFn = (component: React.ReactElement) => void;

// eslint-disable-next-line @typescript-eslint/explicit-function-return-type
export default function render<T>(
  component: React.ReactElement<T>,
  { wrapper: Wrapper, createNodeMock }: RenderOptions = {},
): RenderAPI {
  const wrap = (
    innerElement: React.ReactElement<any>,
  ): React.ReactElement<any> =>
    Wrapper ? <Wrapper>{innerElement}</Wrapper> : innerElement;

  const renderer = renderWithAct(
    wrap(component),
    createNodeMock ? { createNodeMock } : undefined,
  );
  const update = updateWithAct(renderer, wrap);
  const instance = renderer.root;

  addToCleanupQueue(renderer.unmount);

  return {
    ...getByAPI(instance),
    ...queryByAPI(instance),
    update,
    rerender: update, // alias for `update`
    unmount: renderer.unmount,
    toJSON: renderer.toJSON,
    debug: debug(instance, renderer),
  };
}

function renderWithAct(
  component: React.ReactElement<any>,
  options?: TestRendererOptions,
): ReactTestRenderer {
  let renderer: ReactTestRenderer | undefined;

  act(() => {
    renderer = TestRenderer.create(component, options);
  });

  return (renderer as any) as ReactTestRenderer;
}

function updateWithAct(
  renderer: ReactTestRenderer,
  wrap: (innerElement: React.ReactElement<any>) => React.ReactElement<any>,
): RendererUpdateFn {
  return function(component: React.ReactElement<any>): void {
    act(() => {
      renderer.update(wrap(component));
    });
  };
}

function debug(
  instance: ReactTestInstance,
  renderer: { toJSON(): null | ReactTestRendererJSON },
): Debug {
  const debugImpl: Debug = message => {
    return debugDeep(renderer.toJSON(), message);
  };

  debugImpl.shallow = message => debugShallow(instance, message);

  return debugImpl;
}
