import React from 'react';
import { ReactTestInstance } from 'react-test-renderer';
import prettyFormat from 'pretty-format';
import {
  Text as NodeGuiText,
  LineEdit as NodeGuiLineEdit,
  Button as NodeGuiButton,
} from '@nodegui/react-nodegui';
import {
  ErrorWithStack,
  createLibraryNotSupportedError,
  prepareErrorMessage,
} from './errors';

const filterNodeByType = (node: ReactTestInstance, type: string): boolean =>
  node.type === type;

const getNodeByText = (
  node: ReactTestInstance,
  text: string | RegExp,
): boolean => {
  try {
    const { Text } = require('@nodegui/react-nodegui') as {
      Text: typeof NodeGuiText;
    };

    const isTextComponent = filterNodeByType(node, Text.toString());
    if (isTextComponent) {
      const textChildren = React.Children.map(
        node.props.children,
        // In some cases child might be undefined or null
        (child: React.ReactElement) =>
          child !== undefined && child !== null ? child.toString() : '',
      );

      if (textChildren) {
        const textToTest = textChildren.join('');
        return typeof text === 'string'
          ? text === textToTest
          : text.test(textToTest);
      }
    }
    return false;
  } catch (error) {
    throw createLibraryNotSupportedError(error);
  }
};

const getLineEditNodeByPlaceholder = (
  node: ReactTestInstance,
  placeholder: string | RegExp,
): boolean => {
  try {
    const { LineEdit } = require('@nodegui/react-nodegui') as {
      LineEdit: typeof NodeGuiLineEdit;
    };

    return (
      filterNodeByType(node, LineEdit.toString()) &&
      (typeof placeholder === 'string'
        ? placeholder === node.props.placeholderText
        : placeholder.test(node.props.placeholderText))
    );
  } catch (error) {
    throw createLibraryNotSupportedError(error);
  }
};

const getLineEditNodeByDisplayValue = (
  node: ReactTestInstance,
  text: string | RegExp,
): boolean => {
  try {
    const { LineEdit } = require('@nodegui/react-nodegui') as {
      LineEdit: typeof NodeGuiLineEdit;
    };

    return (
      filterNodeByType(node, LineEdit.toString()) &&
      (typeof text === 'string'
        ? text === node.props.text
        : text.test(node.props.text))
    );
  } catch (error) {
    throw createLibraryNotSupportedError(error);
  }
};

const getButtonNodeByText = (
  node: ReactTestInstance,
  text: string | RegExp,
): boolean => {
  try {
    const { Button } = require('@nodegui/react-nodegui') as {
      Button: typeof NodeGuiButton;
    };

    return (
      filterNodeByType(node, Button.toString()) &&
      (typeof text === 'string'
        ? text === node.props.text
        : text.test(node.props.text))
    );
  } catch (error) {
    throw createLibraryNotSupportedError(error);
  }
};

export const getByType = (instance: ReactTestInstance) =>
  function getByTypeFn(type: React.ComponentType<any>) {
    try {
      return instance.findByType(type);
    } catch (error) {
      throw new ErrorWithStack(prepareErrorMessage(error), getByTypeFn);
    }
  };

export const getByText = (instance: ReactTestInstance) =>
  function getByTextFn(text: string | RegExp) {
    try {
      return instance.find(
        node => getNodeByText(node, text) || getButtonNodeByText(node, text),
      );
    } catch (error) {
      throw new ErrorWithStack(prepareErrorMessage(error), getByTextFn);
    }
  };

export const getByPlaceholder = (instance: ReactTestInstance) =>
  function getByPlaceholderFn(placeholder: string | RegExp) {
    try {
      return instance.find(node =>
        getLineEditNodeByPlaceholder(node, placeholder),
      );
    } catch (error) {
      throw new ErrorWithStack(prepareErrorMessage(error), getByPlaceholderFn);
    }
  };

export const getByDisplayValue = (instance: ReactTestInstance) =>
  function getByDisplayValueFn(placeholder: string | RegExp) {
    try {
      return instance.find(node =>
        getLineEditNodeByDisplayValue(node, placeholder),
      );
    } catch (error) {
      throw new ErrorWithStack(prepareErrorMessage(error), getByDisplayValueFn);
    }
  };

export const getByProps = (instance: ReactTestInstance) =>
  function getByPropsFn(props: { [propName: string]: any }) {
    try {
      return instance.findByProps(props);
    } catch (error) {
      throw new ErrorWithStack(prepareErrorMessage(error), getByPropsFn);
    }
  };

export const getByTestId = (instance: ReactTestInstance) =>
  function getByTestIdFn(testID: string) {
    try {
      return instance.findByProps({ testID });
    } catch (error) {
      throw new ErrorWithStack(prepareErrorMessage(error), getByTestIdFn);
    }
  };

export const getAllByType = (instance: ReactTestInstance) =>
  function getAllByTypeFn(type: React.ComponentType<any>) {
    const results = instance.findAllByType(type);
    if (results.length === 0) {
      throw new ErrorWithStack('No instances found', getAllByTypeFn);
    }
    return results;
  };

export const getAllByText = (instance: ReactTestInstance) =>
  function getAllByTextFn(text: string | RegExp) {
    const results = instance.findAll(
      node => getNodeByText(node, text) || getButtonNodeByText(node, text),
    );
    if (results.length === 0) {
      throw new ErrorWithStack(
        `No instances found with text: ${String(text)}`,
        getAllByTextFn,
      );
    }
    return results;
  };

export const getAllByPlaceholder = (instance: ReactTestInstance) =>
  function getAllByPlaceholderFn(placeholder: string | RegExp) {
    const results = instance.findAll(node =>
      getLineEditNodeByPlaceholder(node, placeholder),
    );
    if (results.length === 0) {
      throw new ErrorWithStack(
        `No instances found with placeholder: ${String(placeholder)}`,
        getAllByPlaceholderFn,
      );
    }
    return results;
  };

export const getAllByDisplayValue = (instance: ReactTestInstance) =>
  function getAllByDisplayValueFn(value: string | RegExp) {
    const results = instance.findAll(node =>
      getLineEditNodeByDisplayValue(node, value),
    );
    if (results.length === 0) {
      throw new ErrorWithStack(
        `No instances found with display value: ${String(value)}`,
        getAllByDisplayValueFn,
      );
    }
    return results;
  };

export const getAllByProps = (instance: ReactTestInstance) =>
  function getAllByPropsFn(props: { [propName: string]: any }) {
    const results = instance.findAllByProps(props);
    if (results.length === 0) {
      throw new ErrorWithStack(
        `No instances found with props:\n${prettyFormat(props)}`,
        getAllByPropsFn,
      );
    }
    return results;
  };

export const getAllByTestId = (instance: ReactTestInstance) =>
  function getAllByTestIdFn(testID: string): ReactTestInstance[] {
    const results = instance
      .findAllByProps({ testID })
      .filter(element => typeof element.type === 'string');

    if (results.length === 0) {
      throw new ErrorWithStack(
        `No instances found with testID: ${String(testID)}`,
        getAllByTestIdFn,
      );
    }
    return results;
  };

export interface GetByAPI {
  getByType: <P>(type: React.ComponentType<P>) => ReactTestInstance;
  getByText: (text: string | RegExp) => ReactTestInstance;
  getByPlaceholder: (placeholder: string | RegExp) => ReactTestInstance;
  getByDisplayValue: (value: string | RegExp) => ReactTestInstance;
  getByProps: (props: Record<string, any>) => ReactTestInstance;
  getByTestId: (testID: string) => ReactTestInstance;
  getAllByTestId: (testID: string) => Array<ReactTestInstance>;
  getAllByType: <P>(type: React.ComponentType<P>) => Array<ReactTestInstance>;
  getAllByText: (text: string | RegExp) => Array<ReactTestInstance>;
  getAllByPlaceholder: (
    placeholder: string | RegExp,
  ) => Array<ReactTestInstance>;
  getAllByDisplayValue: (value: string | RegExp) => Array<ReactTestInstance>;
  getAllByProps: (props: Record<string, any>) => Array<ReactTestInstance>;
}

export const getByAPI = (instance: ReactTestInstance): GetByAPI => ({
  getByTestId: getByTestId(instance),
  getByType: getByType(instance),
  getByText: getByText(instance),
  getByPlaceholder: getByPlaceholder(instance),
  getByDisplayValue: getByDisplayValue(instance),
  getByProps: getByProps(instance),
  getAllByTestId: getAllByTestId(instance),
  getAllByType: getAllByType(instance),
  getAllByText: getAllByText(instance),
  getAllByPlaceholder: getAllByPlaceholder(instance),
  getAllByDisplayValue: getAllByDisplayValue(instance),
  getAllByProps: getAllByProps(instance),
});
