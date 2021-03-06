const React = require('react');
const ShallowRenderer = require('react-test-renderer/shallow');
const TestRenderer = require('react-test-renderer');

/* $FlowFixMe(>=0.120.0) This comment suppresses an error found when Flow
 * v0.120 was deployed. To see the error, delete this comment and run Flow. */
const renderer = new ShallowRenderer();

export const shallow = (Component: React.Element<any>): any => {
  const Wrapper = (): React.Element<any> => Component;

  return renderer.render(<Wrapper />);
};

export const shallowRender = (Component: React.Element<any>): any => {
  return renderer.render(Component);
};

export const create = (Component: React.Element<any>): any => {
  return TestRenderer.create(Component);
};
