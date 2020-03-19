import React from 'react';
import { ReactTestInstance } from 'react-test-renderer';
import {
  getByTestId,
  getByType,
  getByText,
  getByPlaceholder,
  getByDisplayValue,
  getByProps,
  getAllByTestId,
  getAllByType,
  getAllByText,
  getAllByPlaceholder,
  getAllByDisplayValue,
  getAllByProps,
} from './getByAPI';
import { createQueryByError } from './errors';

export const queryByType = (instance: ReactTestInstance) =>
  function queryByTypeFn(type: React.ComponentType<any>) {
    try {
      return getByType(instance)(type);
    } catch (error) {
      return createQueryByError(error, queryByTypeFn);
    }
  };

export const queryByText = (instance: ReactTestInstance) =>
  function queryByTextFn(text: string | RegExp) {
    try {
      return getByText(instance)(text);
    } catch (error) {
      return createQueryByError(error, queryByTextFn);
    }
  };

export const queryByPlaceholder = (instance: ReactTestInstance) =>
  function queryByPlaceholderFn(placeholder: string | RegExp) {
    try {
      return getByPlaceholder(instance)(placeholder);
    } catch (error) {
      return createQueryByError(error, queryByPlaceholderFn);
    }
  };

export const queryByDisplayValue = (instance: ReactTestInstance) =>
  function queryByDisplayValueFn(value: string | RegExp) {
    try {
      return getByDisplayValue(instance)(value);
    } catch (error) {
      return createQueryByError(error, queryByDisplayValueFn);
    }
  };

export const queryByProps = (instance: ReactTestInstance) =>
  function queryByPropsFn(props: { [propName: string]: any }) {
    try {
      return getByProps(instance)(props);
    } catch (error) {
      return createQueryByError(error, queryByPropsFn);
    }
  };

export const queryByTestId = (instance: ReactTestInstance) =>
  function queryByTestIdFn(testID: string) {
    try {
      return getByTestId(instance)(testID);
    } catch (error) {
      return createQueryByError(error, queryByTestIdFn);
    }
  };

export const queryAllByType = (instance: ReactTestInstance) => (
  type: React.ComponentType<any>,
) => {
  try {
    return getAllByType(instance)(type);
  } catch (error) {
    return [];
  }
};

export const queryAllByText = (instance: ReactTestInstance) => (
  text: string | RegExp,
) => {
  try {
    return getAllByText(instance)(text);
  } catch (error) {
    return [];
  }
};

export const queryAllByPlaceholder = (instance: ReactTestInstance) => (
  placeholder: string | RegExp,
) => {
  try {
    return getAllByPlaceholder(instance)(placeholder);
  } catch (error) {
    return [];
  }
};

export const queryAllByDisplayValue = (instance: ReactTestInstance) => (
  value: string | RegExp,
) => {
  try {
    return getAllByDisplayValue(instance)(value);
  } catch (error) {
    return [];
  }
};

export const queryAllByProps = (instance: ReactTestInstance) => (props: {
  [propName: string]: any;
}) => {
  try {
    return getAllByProps(instance)(props);
  } catch (error) {
    return [];
  }
};

export const queryAllByTestId = (instance: ReactTestInstance) => (
  testID: string,
) => {
  try {
    return getAllByTestId(instance)(testID);
  } catch (error) {
    return [];
  }
};

export interface QueryByAPI {
  queryByType: <P>(type: React.ComponentType<P>) => ReactTestInstance | null;
  queryByText: (name: string | RegExp) => ReactTestInstance | null;
  queryByPlaceholder: (
    placeholder: string | RegExp,
  ) => ReactTestInstance | null;
  queryByDisplayValue: (value: string | RegExp) => ReactTestInstance | null;
  queryByProps: (props: Record<string, any>) => ReactTestInstance | null;
  queryByTestId: (testID: string) => ReactTestInstance | null;
  queryAllByTestId: (testID: string) => Array<ReactTestInstance> | null;
  queryAllByType: <P>(
    type: React.ComponentType<P>,
  ) => Array<ReactTestInstance> | [];
  queryAllByText: (text: string | RegExp) => Array<ReactTestInstance> | [];
  queryAllByPlaceholder: (
    placeholder: string | RegExp,
  ) => Array<ReactTestInstance> | [];
  queryAllByDisplayValue: (
    value: string | RegExp,
  ) => Array<ReactTestInstance> | [];
  queryAllByProps: (
    props: Record<string, any>,
  ) => Array<ReactTestInstance> | [];
}

export const queryByAPI = (instance: ReactTestInstance): QueryByAPI => ({
  queryByTestId: queryByTestId(instance),
  queryByType: queryByType(instance),
  queryByText: queryByText(instance),
  queryByPlaceholder: queryByPlaceholder(instance),
  queryByDisplayValue: queryByDisplayValue(instance),
  queryByProps: queryByProps(instance),
  queryAllByTestId: queryAllByTestId(instance),
  queryAllByType: queryAllByType(instance),
  queryAllByText: queryAllByText(instance),
  queryAllByPlaceholder: queryAllByPlaceholder(instance),
  queryAllByDisplayValue: queryAllByDisplayValue(instance),
  queryAllByProps: queryAllByProps(instance),
});
