import React from 'react';
import { ReactTestInstance } from 'react-test-renderer';
import { createRenderer } from 'react-test-renderer/shallow';

export interface ShallowRenderer {
  output: React.ReactElement<any>;
}

export default function shallow(
  instance: ReactTestInstance | React.ReactElement<any>,
): ShallowRenderer {
  const renderer = createRenderer();

  renderer.render(React.createElement(instance.type, instance.props));

  return {
    output: renderer.getRenderOutput(),
  };
}
