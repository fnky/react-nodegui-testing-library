---
id: "button"
title: "Button"
sidebar_label: "Button"
---

## Type parameters

▪ **SS**

## Hierarchy

* Component‹any, any›

  ↳ **Button**

## Index

### Constructors

* [constructor](button.md#constructor)

### Properties

* [context](button.md#context)
* [props](button.md#props)
* [refs](button.md#refs)
* [contextType](button.md#static-optional-contexttype)

### Methods

* [UNSAFE_componentWillMount](button.md#optional-unsafe_componentwillmount)
* [UNSAFE_componentWillReceiveProps](button.md#optional-unsafe_componentwillreceiveprops)
* [UNSAFE_componentWillUpdate](button.md#optional-unsafe_componentwillupdate)
* [componentDidCatch](button.md#optional-componentdidcatch)
* [componentDidMount](button.md#optional-componentdidmount)
* [componentDidUpdate](button.md#optional-componentdidupdate)
* [componentWillMount](button.md#optional-componentwillmount)
* [componentWillReceiveProps](button.md#optional-componentwillreceiveprops)
* [componentWillUnmount](button.md#optional-componentwillunmount)
* [componentWillUpdate](button.md#optional-componentwillupdate)
* [forceUpdate](button.md#forceupdate)
* [getSnapshotBeforeUpdate](button.md#optional-getsnapshotbeforeupdate)
* [onPress](button.md#onpress)
* [render](button.md#render)
* [setState](button.md#setstate)
* [shouldComponentUpdate](button.md#optional-shouldcomponentupdate)

### Object literals

* [state](button.md#state)

## Constructors

###  constructor

\+ **new Button**(`props`: Readonly‹any›): *[Button](button.md)*

*Inherited from [Test](test.md).[constructor](test.md#constructor)*

**`deprecated`** 

**`see`** https://reactjs.org/docs/legacy-context.html

**Parameters:**

Name | Type |
------ | ------ |
`props` | Readonly‹any› |

**Returns:** *[Button](button.md)*

\+ **new Button**(`props`: any, `context?`: any): *[Button](button.md)*

*Inherited from [Test](test.md).[constructor](test.md#constructor)*

**`deprecated`** 

**`see`** https://reactjs.org/docs/legacy-context.html

**Parameters:**

Name | Type |
------ | ------ |
`props` | any |
`context?` | any |

**Returns:** *[Button](button.md)*

## Properties

###  context

• **context**: *any*

*Inherited from [Test](test.md).[context](test.md#context)*

If using the new style context, re-declare this in your class to be the
`React.ContextType` of your `static contextType`.
Should be used with type annotation or static contextType.

```ts
static contextType = MyContext
// For TS pre-3.7:
context!: React.ContextType<typeof MyContext>
// For TS 3.7 and above:
declare context: React.ContextType<typeof MyContext>
```

**`see`** https://reactjs.org/docs/context.html

___

###  props

• **props**: *Readonly‹any› & Readonly‹object›*

*Inherited from [Test](test.md).[props](test.md#props)*

___

###  refs

• **refs**: *object*

*Inherited from [Test](test.md).[refs](test.md#refs)*

**`deprecated`** 
https://reactjs.org/docs/refs-and-the-dom.html#legacy-api-string-refs

#### Type declaration:

* \[ **key**: *string*\]: ReactInstance

___

### `Static` `Optional` contextType

▪ **contextType**? : *Context‹any›*

*Inherited from [Test](test.md).[contextType](test.md#static-optional-contexttype)*

If set, `this.context` will be set at runtime to the current value of the given Context.

Usage:

```ts
type MyContext = number
const Ctx = React.createContext<MyContext>(0)

class Foo extends React.Component {
  static contextType = Ctx
  context!: React.ContextType<typeof Ctx>
  render () {
    return <>My context's value: {this.context}</>;
  }
}
```

**`see`** https://reactjs.org/docs/context.html#classcontexttype

## Methods

### `Optional` UNSAFE_componentWillMount

▸ **UNSAFE_componentWillMount**(): *void*

*Inherited from [Test](test.md).[UNSAFE_componentWillMount](test.md#optional-unsafe_componentwillmount)*

Called immediately before mounting occurs, and before `Component#render`.
Avoid introducing any side-effects or subscriptions in this method.

This method will not stop working in React 17.

Note: the presence of getSnapshotBeforeUpdate or getDerivedStateFromProps
prevents this from being invoked.

**`deprecated`** 16.3, use componentDidMount or the constructor instead

**`see`** https://reactjs.org/blog/2018/03/27/update-on-async-rendering.html#initializing-state

**`see`** https://reactjs.org/blog/2018/03/27/update-on-async-rendering.html#gradual-migration-path

**Returns:** *void*

___

### `Optional` UNSAFE_componentWillReceiveProps

▸ **UNSAFE_componentWillReceiveProps**(`nextProps`: Readonly‹any›, `nextContext`: any): *void*

*Inherited from [Test](test.md).[UNSAFE_componentWillReceiveProps](test.md#optional-unsafe_componentwillreceiveprops)*

Called when the component may be receiving new props.
React may call this even if props have not changed, so be sure to compare new and existing
props if you only want to handle changes.

Calling `Component#setState` generally does not trigger this method.

This method will not stop working in React 17.

Note: the presence of getSnapshotBeforeUpdate or getDerivedStateFromProps
prevents this from being invoked.

**`deprecated`** 16.3, use static getDerivedStateFromProps instead

**`see`** https://reactjs.org/blog/2018/03/27/update-on-async-rendering.html#updating-state-based-on-props

**`see`** https://reactjs.org/blog/2018/03/27/update-on-async-rendering.html#gradual-migration-path

**Parameters:**

Name | Type |
------ | ------ |
`nextProps` | Readonly‹any› |
`nextContext` | any |

**Returns:** *void*

___

### `Optional` UNSAFE_componentWillUpdate

▸ **UNSAFE_componentWillUpdate**(`nextProps`: Readonly‹any›, `nextState`: Readonly‹any›, `nextContext`: any): *void*

*Inherited from [Test](test.md).[UNSAFE_componentWillUpdate](test.md#optional-unsafe_componentwillupdate)*

Called immediately before rendering when new props or state is received. Not called for the initial render.

Note: You cannot call `Component#setState` here.

This method will not stop working in React 17.

Note: the presence of getSnapshotBeforeUpdate or getDerivedStateFromProps
prevents this from being invoked.

**`deprecated`** 16.3, use getSnapshotBeforeUpdate instead

**`see`** https://reactjs.org/blog/2018/03/27/update-on-async-rendering.html#reading-dom-properties-before-an-update

**`see`** https://reactjs.org/blog/2018/03/27/update-on-async-rendering.html#gradual-migration-path

**Parameters:**

Name | Type |
------ | ------ |
`nextProps` | Readonly‹any› |
`nextState` | Readonly‹any› |
`nextContext` | any |

**Returns:** *void*

___

### `Optional` componentDidCatch

▸ **componentDidCatch**(`error`: [Error](errorwithstack.md#static-error), `errorInfo`: ErrorInfo): *void*

*Inherited from [Test](test.md).[componentDidCatch](test.md#optional-componentdidcatch)*

Catches exceptions generated in descendant components. Unhandled exceptions will cause
the entire component tree to unmount.

**Parameters:**

Name | Type |
------ | ------ |
`error` | [Error](errorwithstack.md#static-error) |
`errorInfo` | ErrorInfo |

**Returns:** *void*

___

### `Optional` componentDidMount

▸ **componentDidMount**(): *void*

*Inherited from [Test](test.md).[componentDidMount](test.md#optional-componentdidmount)*

Called immediately after a component is mounted. Setting state here will trigger re-rendering.

**Returns:** *void*

___

### `Optional` componentDidUpdate

▸ **componentDidUpdate**(`prevProps`: Readonly‹any›, `prevState`: Readonly‹any›, `snapshot?`: SS): *void*

*Inherited from [Test](test.md).[componentDidUpdate](test.md#optional-componentdidupdate)*

Called immediately after updating occurs. Not called for the initial render.

The snapshot is only present if getSnapshotBeforeUpdate is present and returns non-null.

**Parameters:**

Name | Type |
------ | ------ |
`prevProps` | Readonly‹any› |
`prevState` | Readonly‹any› |
`snapshot?` | SS |

**Returns:** *void*

___

### `Optional` componentWillMount

▸ **componentWillMount**(): *void*

*Inherited from [Test](test.md).[componentWillMount](test.md#optional-componentwillmount)*

Called immediately before mounting occurs, and before `Component#render`.
Avoid introducing any side-effects or subscriptions in this method.

Note: the presence of getSnapshotBeforeUpdate or getDerivedStateFromProps
prevents this from being invoked.

**`deprecated`** 16.3, use componentDidMount or the constructor instead; will stop working in React 17

**`see`** https://reactjs.org/blog/2018/03/27/update-on-async-rendering.html#initializing-state

**`see`** https://reactjs.org/blog/2018/03/27/update-on-async-rendering.html#gradual-migration-path

**Returns:** *void*

___

### `Optional` componentWillReceiveProps

▸ **componentWillReceiveProps**(`nextProps`: Readonly‹any›, `nextContext`: any): *void*

*Inherited from [Test](test.md).[componentWillReceiveProps](test.md#optional-componentwillreceiveprops)*

Called when the component may be receiving new props.
React may call this even if props have not changed, so be sure to compare new and existing
props if you only want to handle changes.

Calling `Component#setState` generally does not trigger this method.

Note: the presence of getSnapshotBeforeUpdate or getDerivedStateFromProps
prevents this from being invoked.

**`deprecated`** 16.3, use static getDerivedStateFromProps instead; will stop working in React 17

**`see`** https://reactjs.org/blog/2018/03/27/update-on-async-rendering.html#updating-state-based-on-props

**`see`** https://reactjs.org/blog/2018/03/27/update-on-async-rendering.html#gradual-migration-path

**Parameters:**

Name | Type |
------ | ------ |
`nextProps` | Readonly‹any› |
`nextContext` | any |

**Returns:** *void*

___

### `Optional` componentWillUnmount

▸ **componentWillUnmount**(): *void*

*Inherited from [Button](button.md).[componentWillUnmount](button.md#optional-componentwillunmount)*

Called immediately before a component is destroyed. Perform any necessary cleanup in this method, such as
cancelled network requests, or cleaning up any DOM elements created in `componentDidMount`.

**Returns:** *void*

___

### `Optional` componentWillUpdate

▸ **componentWillUpdate**(`nextProps`: Readonly‹any›, `nextState`: Readonly‹any›, `nextContext`: any): *void*

*Inherited from [Test](test.md).[componentWillUpdate](test.md#optional-componentwillupdate)*

Called immediately before rendering when new props or state is received. Not called for the initial render.

Note: You cannot call `Component#setState` here.

Note: the presence of getSnapshotBeforeUpdate or getDerivedStateFromProps
prevents this from being invoked.

**`deprecated`** 16.3, use getSnapshotBeforeUpdate instead; will stop working in React 17

**`see`** https://reactjs.org/blog/2018/03/27/update-on-async-rendering.html#reading-dom-properties-before-an-update

**`see`** https://reactjs.org/blog/2018/03/27/update-on-async-rendering.html#gradual-migration-path

**Parameters:**

Name | Type |
------ | ------ |
`nextProps` | Readonly‹any› |
`nextState` | Readonly‹any› |
`nextContext` | any |

**Returns:** *void*

___

###  forceUpdate

▸ **forceUpdate**(`callback?`: undefined | function): *void*

*Inherited from [Test](test.md).[forceUpdate](test.md#forceupdate)*

**Parameters:**

Name | Type |
------ | ------ |
`callback?` | undefined &#124; function |

**Returns:** *void*

___

### `Optional` getSnapshotBeforeUpdate

▸ **getSnapshotBeforeUpdate**(`prevProps`: Readonly‹any›, `prevState`: Readonly‹any›): *SS | null*

*Inherited from [Test](test.md).[getSnapshotBeforeUpdate](test.md#optional-getsnapshotbeforeupdate)*

Runs before React applies the result of `render` to the document, and
returns an object to be given to componentDidUpdate. Useful for saving
things such as scroll position before `render` causes changes to it.

Note: the presence of getSnapshotBeforeUpdate prevents any of the deprecated
lifecycle events from running.

**Parameters:**

Name | Type |
------ | ------ |
`prevProps` | Readonly‹any› |
`prevState` | Readonly‹any› |

**Returns:** *SS | null*

___

###  onPress

▸ **onPress**(): *Promise‹void›*

**Returns:** *Promise‹void›*

___

###  render

▸ **render**(): *Element‹›*

*Overrides void*

**Returns:** *Element‹›*

___

###  setState

▸ **setState**<**K**>(`state`: function | null | S | object, `callback?`: undefined | function): *void*

*Inherited from [Test](test.md).[setState](test.md#setstate)*

**Type parameters:**

▪ **K**: *keyof any*

**Parameters:**

Name | Type |
------ | ------ |
`state` | function &#124; null &#124; S &#124; object |
`callback?` | undefined &#124; function |

**Returns:** *void*

___

### `Optional` shouldComponentUpdate

▸ **shouldComponentUpdate**(`nextProps`: Readonly‹any›, `nextState`: Readonly‹any›, `nextContext`: any): *boolean*

*Inherited from [Test](test.md).[shouldComponentUpdate](test.md#optional-shouldcomponentupdate)*

Called to determine whether the change in props and state should trigger a re-render.

`Component` always returns true.
`PureComponent` implements a shallow comparison on props and state and returns true if any
props or states have changed.

If false is returned, `Component#render`, `componentWillUpdate`
and `componentDidUpdate` will not be called.

**Parameters:**

Name | Type |
------ | ------ |
`nextProps` | Readonly‹any› |
`nextState` | Readonly‹any› |
`nextContext` | any |

**Returns:** *boolean*

## Object literals

###  state

### ▪ **state**: *object*

*Overrides [Test](test.md).[state](test.md#state)*

###  counter

• **counter**: *number* = 0
