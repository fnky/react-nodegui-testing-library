---
id: "banana"
title: "Banana"
sidebar_label: "Banana"
---

## Type parameters

▪ **SS**

▪ **S**

▪ **SS**

▪ **S**

## Hierarchy

* Component‹any, object›

* Component‹any›

  ↳ **Banana**

## Index

### Constructors

* [constructor](banana.md#constructor)

### Properties

* [context](banana.md#context)
* [props](banana.md#props)
* [refs](banana.md#refs)
* [contextType](banana.md#static-optional-contexttype)

### Methods

* [UNSAFE_componentWillMount](banana.md#optional-unsafe_componentwillmount)
* [UNSAFE_componentWillReceiveProps](banana.md#optional-unsafe_componentwillreceiveprops)
* [UNSAFE_componentWillUpdate](banana.md#optional-unsafe_componentwillupdate)
* [changeFresh](banana.md#changefresh)
* [componentDidCatch](banana.md#optional-componentdidcatch)
* [componentDidMount](banana.md#optional-componentdidmount)
* [componentDidUpdate](banana.md#componentdidupdate)
* [componentWillMount](banana.md#optional-componentwillmount)
* [componentWillReceiveProps](banana.md#optional-componentwillreceiveprops)
* [componentWillUnmount](banana.md#componentwillunmount)
* [componentWillUpdate](banana.md#optional-componentwillupdate)
* [forceUpdate](banana.md#forceupdate)
* [getSnapshotBeforeUpdate](banana.md#optional-getsnapshotbeforeupdate)
* [render](banana.md#render)
* [setState](banana.md#setstate)
* [shouldComponentUpdate](banana.md#optional-shouldcomponentupdate)

### Object literals

* [state](banana.md#state)

## Constructors

###  constructor

\+ **new Banana**(`props`: Readonly‹any›): *[Banana](banana.md)*

*Inherited from [Test](test.md).[constructor](test.md#constructor)*

*Overrides [Test](test.md).[constructor](test.md#constructor)*

**`deprecated`** 

**`see`** https://reactjs.org/docs/legacy-context.html

**Parameters:**

Name | Type |
------ | ------ |
`props` | Readonly‹any› |

**Returns:** *[Banana](banana.md)*

\+ **new Banana**(`props`: any, `context?`: any): *[Banana](banana.md)*

*Inherited from [Test](test.md).[constructor](test.md#constructor)*

*Overrides [Test](test.md).[constructor](test.md#constructor)*

**`deprecated`** 

**`see`** https://reactjs.org/docs/legacy-context.html

**Parameters:**

Name | Type |
------ | ------ |
`props` | any |
`context?` | any |

**Returns:** *[Banana](banana.md)*

## Properties

###  context

• **context**: *any*

*Inherited from [Test](test.md).[context](test.md#context)*

*Overrides [Test](test.md).[context](test.md#context)*

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

*Overrides [Test](test.md).[props](test.md#props)*

___

###  refs

• **refs**: *object*

*Inherited from [Test](test.md).[refs](test.md#refs)*

*Overrides [Test](test.md).[refs](test.md#refs)*

**`deprecated`** 
https://reactjs.org/docs/refs-and-the-dom.html#legacy-api-string-refs

#### Type declaration:

* \[ **key**: *string*\]: ReactInstance

___

### `Static` `Optional` contextType

▪ **contextType**? : *Context‹any›*

*Inherited from [Test](test.md).[contextType](test.md#static-optional-contexttype)*

*Overrides [Test](test.md).[contextType](test.md#static-optional-contexttype)*

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

*Overrides [Test](test.md).[UNSAFE_componentWillMount](test.md#optional-unsafe_componentwillmount)*

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

*Overrides [Test](test.md).[UNSAFE_componentWillReceiveProps](test.md#optional-unsafe_componentwillreceiveprops)*

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

▸ **UNSAFE_componentWillUpdate**(`nextProps`: Readonly‹any›, `nextState`: Readonly‹object›, `nextContext`: any): *void*

*Inherited from [Test](test.md).[UNSAFE_componentWillUpdate](test.md#optional-unsafe_componentwillupdate)*

*Overrides [Test](test.md).[UNSAFE_componentWillUpdate](test.md#optional-unsafe_componentwillupdate)*

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
`nextState` | Readonly‹object› |
`nextContext` | any |

**Returns:** *void*

___

###  changeFresh

▸ **changeFresh**(): *void*

**Returns:** *void*

▸ **changeFresh**(): *void*

**Returns:** *void*

___

### `Optional` componentDidCatch

▸ **componentDidCatch**(`error`: [Error](errorwithstack.md#static-error), `errorInfo`: ErrorInfo): *void*

*Inherited from [Test](test.md).[componentDidCatch](test.md#optional-componentdidcatch)*

*Overrides [Test](test.md).[componentDidCatch](test.md#optional-componentdidcatch)*

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

*Overrides [Test](test.md).[componentDidMount](test.md#optional-componentdidmount)*

Called immediately after a component is mounted. Setting state here will trigger re-rendering.

**Returns:** *void*

___

###  componentDidUpdate

▸ **componentDidUpdate**(): *void*

*Overrides [Test](test.md).[componentDidUpdate](test.md#optional-componentdidupdate)*

**Returns:** *void*

___

### `Optional` componentWillMount

▸ **componentWillMount**(): *void*

*Inherited from [Test](test.md).[componentWillMount](test.md#optional-componentwillmount)*

*Overrides [Test](test.md).[componentWillMount](test.md#optional-componentwillmount)*

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

*Overrides [Test](test.md).[componentWillReceiveProps](test.md#optional-componentwillreceiveprops)*

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

###  componentWillUnmount

▸ **componentWillUnmount**(): *void*

*Overrides [Button](button.md).[componentWillUnmount](button.md#optional-componentwillunmount)*

**Returns:** *void*

___

### `Optional` componentWillUpdate

▸ **componentWillUpdate**(`nextProps`: Readonly‹any›, `nextState`: Readonly‹object›, `nextContext`: any): *void*

*Inherited from [Test](test.md).[componentWillUpdate](test.md#optional-componentwillupdate)*

*Overrides [Test](test.md).[componentWillUpdate](test.md#optional-componentwillupdate)*

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
`nextState` | Readonly‹object› |
`nextContext` | any |

**Returns:** *void*

___

###  forceUpdate

▸ **forceUpdate**(`callback?`: undefined | function): *void*

*Inherited from [Test](test.md).[forceUpdate](test.md#forceupdate)*

*Overrides [Test](test.md).[forceUpdate](test.md#forceupdate)*

**Parameters:**

Name | Type |
------ | ------ |
`callback?` | undefined &#124; function |

**Returns:** *void*

___

### `Optional` getSnapshotBeforeUpdate

▸ **getSnapshotBeforeUpdate**(`prevProps`: Readonly‹any›, `prevState`: Readonly‹object›): *SS | null*

*Inherited from [Test](test.md).[getSnapshotBeforeUpdate](test.md#optional-getsnapshotbeforeupdate)*

*Overrides [Test](test.md).[getSnapshotBeforeUpdate](test.md#optional-getsnapshotbeforeupdate)*

Runs before React applies the result of `render` to the document, and
returns an object to be given to componentDidUpdate. Useful for saving
things such as scroll position before `render` causes changes to it.

Note: the presence of getSnapshotBeforeUpdate prevents any of the deprecated
lifecycle events from running.

**Parameters:**

Name | Type |
------ | ------ |
`prevProps` | Readonly‹any› |
`prevState` | Readonly‹object› |

**Returns:** *SS | null*

___

###  render

▸ **render**(): *Element‹›*

*Overrides void*

**Returns:** *Element‹›*

___

###  setState

▸ **setState**<**K**>(`state`: function | null | S | object, `callback?`: undefined | function): *void*

*Inherited from [Test](test.md).[setState](test.md#setstate)*

*Overrides [Test](test.md).[setState](test.md#setstate)*

**Type parameters:**

▪ **K**: *keyof object*

**Parameters:**

Name | Type |
------ | ------ |
`state` | function &#124; null &#124; S &#124; object |
`callback?` | undefined &#124; function |

**Returns:** *void*

___

### `Optional` shouldComponentUpdate

▸ **shouldComponentUpdate**(`nextProps`: Readonly‹any›, `nextState`: Readonly‹object›, `nextContext`: any): *boolean*

*Inherited from [Test](test.md).[shouldComponentUpdate](test.md#optional-shouldcomponentupdate)*

*Overrides [Test](test.md).[shouldComponentUpdate](test.md#optional-shouldcomponentupdate)*

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
`nextState` | Readonly‹object› |
`nextContext` | any |

**Returns:** *boolean*

## Object literals

###  state

### ▪ **state**: *object*

*Overrides [Test](test.md).[state](test.md#state)*

###  fresh

• **fresh**: *boolean* = false
