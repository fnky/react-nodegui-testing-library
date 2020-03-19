import { ReactTestInstance } from 'react-test-renderer';
import act from './act';
import { ErrorWithStack } from './helpers/errors';

type EventHandler = (...args: any[]) => void;

const findEventHandler = (
  element: ReactTestInstance,
  eventName: string,
  callsite?: any,
): EventHandler => {
  const eventHandler = toEventHandlerName(eventName);

  if (typeof element.props[eventHandler] === 'function') {
    return element.props[eventHandler];
  } else if (typeof element.props[eventName] === 'function') {
    return element.props[eventName];
  } else if (
    element.props.on &&
    typeof element.props.on[eventName] === 'function'
  ) {
    return element.props.on[eventName];
  }

  // Do not bubble event to the root element
  if (element.parent === null || element.parent.parent === null) {
    throw new ErrorWithStack(
      `No handler function found for event: "${eventName}"`,
      callsite || invokeEvent,
    );
  }

  return findEventHandler(element.parent, eventName, callsite);
};

const invokeEvent = (
  element: ReactTestInstance,
  eventName: string,
  callsite?: any,
  ...data: Array<any>
): any => {
  const handler = findEventHandler(element, eventName, callsite);

  if (!handler) {
    return null;
  }

  let returnValue;

  act(() => {
    returnValue = handler(...data);
  });

  return returnValue;
};

const toEventHandlerName = (eventName: string): string =>
  `on${eventName.charAt(0).toUpperCase()}${eventName.slice(1)}`;

const clickHandler = (element: ReactTestInstance): any =>
  invokeEvent(element, 'clicked', clickHandler);

const changeTextHandler = (
  element: ReactTestInstance,
  ...data: Array<any>
): any => invokeEvent(element, 'textChanged', changeTextHandler, ...data);

export type FireEventFunction = (
  element: ReactTestInstance,
  eventName: string,
  ...data: Array<any>
) => any;

export type FireEventAPI = FireEventFunction & {
  click: (element: ReactTestInstance) => any;
  changeText: (element: ReactTestInstance, ...data: Array<any>) => any;
};

const fireEvent: FireEventAPI = (element, eventName, ...data) =>
  invokeEvent(element, eventName, fireEvent, ...data);

fireEvent.click = clickHandler;
fireEvent.changeText = changeTextHandler;

export default fireEvent;
