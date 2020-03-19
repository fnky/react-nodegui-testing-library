global.__DEV__ = true;

global.requestAnimationFrame = function(callback) {
  return setTimeout(callback, 0);
};
global.cancelAnimationFrame = function(id) {
  clearTimeout(id);
};

// eslint-disable-next-line @typescript-eslint/no-empty-function
jest.mock('@nodegui/nodegui/build/Release/nodegui_core.node', () => {});
