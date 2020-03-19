import realAct from '../act';

let act: typeof realAct;

type ConsoleErrorMock = jest.MockedFunction<typeof console.error>;

beforeEach(() => {
  jest.resetModules();
  act = require('..').act;
  jest.spyOn(console, 'error').mockImplementation(() => {});
});

afterEach(() => {
  (console.error as ConsoleErrorMock).mockRestore();
});

jest.mock('react-test-renderer', () => ({}));

test('act works even when there is no act from test utils', () => {
  const callback = jest.fn();
  act(callback);
  expect(callback).toHaveBeenCalledTimes(1);
  expect(console.error).toHaveBeenCalledTimes(0);
});
