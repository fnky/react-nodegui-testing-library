---
id: "globals"
title: "react-nodegui-testing-library"
sidebar_label: "Globals"
---

## Index

### Namespaces

* ["@nodegui/react-nodegui/dist/components/config"](globals.md#@nodegui/react-nodegui/dist/components/config)

### Classes

* [Banana](classes/banana.md)
* [BananaContainer](classes/bananacontainer.md)
* [Button](classes/button.md)
* [ErrorWithStack](classes/errorwithstack.md)
* [Test](classes/test.md)

### Interfaces

* [GetByAPI](interfaces/getbyapi.md)
* [Props](interfaces/props.md)
* [QueryByAPI](interfaces/querybyapi.md)
* [RenderAPI](interfaces/renderapi.md)
* [RenderOptions](interfaces/renderoptions.md)
* [ShallowRenderer](interfaces/shallowrenderer.md)
* [TestRendererOptions](interfaces/testrendereroptions.md)

### Type aliases

* [ConsoleErrorMock](globals.md#consoleerrormock)
* [ConsoleLogMock](globals.md#consolelogmock)
* [Debug](globals.md#debug)
* [DebugAPI](globals.md#debugapi)
* [DebugFn](globals.md#debugfn)
* [DebugFunction](globals.md#debugfunction)
* [DebugShallow](globals.md#debugshallow)
* [EventHandler](globals.md#eventhandler)
* [FireEventAPI](globals.md#fireeventapi)
* [FireEventFunction](globals.md#fireeventfunction)
* [QueryNames](globals.md#querynames)
* [RendererUpdateFn](globals.md#rendererupdatefn)

### Variables

* [INPUT_CHEF](globals.md#const-input_chef)
* [INPUT_FRESHNESS](globals.md#const-input_freshness)
* [PLACEHOLDER_CHEF](globals.md#const-placeholder_chef)
* [PLACEHOLDER_FRESHNESS](globals.md#const-placeholder_freshness)
* [act](globals.md#let-act)
* [cleanupQueue](globals.md#const-cleanupqueue)

### Functions

* [Counter](globals.md#const-counter)
* [CustomEventComponent](globals.md#const-customeventcomponent)
* [CustomEventComponentWithCustomName](globals.md#const-customeventcomponentwithcustomname)
* [MyCustomButton](globals.md#const-mycustombutton)
* [OnComponent](globals.md#const-oncomponent)
* [TextComponent](globals.md#textcomponent)
* [TextPress](globals.md#const-textpress)
* [UseEffect](globals.md#const-useeffect)
* [WithoutEventComponent](globals.md#const-withouteventcomponent)
* [actMock](globals.md#actmock)
* [addToCleanupQueue](globals.md#addtocleanupqueue)
* [changeTextHandler](globals.md#const-changetexthandler)
* [cleanup](globals.md#cleanup)
* [clickHandler](globals.md#const-clickhandler)
* [createLibraryNotSupportedError](globals.md#const-createlibrarynotsupportederror)
* [createQueryByError](globals.md#const-createquerybyerror)
* [debug](globals.md#debug)
* [debugDeep](globals.md#debugdeep)
* [debugDeepElementOrInstance](globals.md#debugdeepelementorinstance)
* [debugShallow](globals.md#debugshallow)
* [filterNodeByType](globals.md#const-filternodebytype)
* [findEventHandler](globals.md#const-findeventhandler)
* [fireEvent](globals.md#const-fireevent)
* [flushMicrotasksQueue](globals.md#flushmicrotasksqueue)
* [format](globals.md#format)
* [getAllByDisplayValue](globals.md#const-getallbydisplayvalue)
* [getAllByPlaceholder](globals.md#const-getallbyplaceholder)
* [getAllByProps](globals.md#const-getallbyprops)
* [getAllByTestId](globals.md#const-getallbytestid)
* [getAllByText](globals.md#const-getallbytext)
* [getAllByType](globals.md#const-getallbytype)
* [getButtonNodeByText](globals.md#const-getbuttonnodebytext)
* [getByAPI](globals.md#const-getbyapi)
* [getByDisplayValue](globals.md#const-getbydisplayvalue)
* [getByPlaceholder](globals.md#const-getbyplaceholder)
* [getByProps](globals.md#const-getbyprops)
* [getByTestId](globals.md#const-getbytestid)
* [getByText](globals.md#const-getbytext)
* [getByType](globals.md#const-getbytype)
* [getLineEditNodeByDisplayValue](globals.md#const-getlineeditnodebydisplayvalue)
* [getLineEditNodeByPlaceholder](globals.md#const-getlineeditnodebyplaceholder)
* [getNodeByText](globals.md#const-getnodebytext)
* [invokeEvent](globals.md#const-invokeevent)
* [isNodeValid](globals.md#isnodevalid)
* [makeAliases](globals.md#makealiases)
* [makeQuery](globals.md#const-makequery)
* [prepareErrorMessage](globals.md#const-prepareerrormessage)
* [queryAllByDisplayValue](globals.md#const-queryallbydisplayvalue)
* [queryAllByPlaceholder](globals.md#const-queryallbyplaceholder)
* [queryAllByProps](globals.md#const-queryallbyprops)
* [queryAllByTestId](globals.md#const-queryallbytestid)
* [queryAllByText](globals.md#const-queryallbytext)
* [queryAllByType](globals.md#const-queryallbytype)
* [queryByAPI](globals.md#const-querybyapi)
* [queryByDisplayValue](globals.md#const-querybydisplayvalue)
* [queryByPlaceholder](globals.md#const-querybyplaceholder)
* [queryByProps](globals.md#const-querybyprops)
* [queryByTestId](globals.md#const-querybytestid)
* [queryByText](globals.md#const-querybytext)
* [queryByType](globals.md#const-querybytype)
* [render](globals.md#render)
* [renderWithAct](globals.md#renderwithact)
* [shallow](globals.md#shallow)
* [toEventHandlerName](globals.md#const-toeventhandlername)
* [updateWithAct](globals.md#updatewithact)
* [waitForElement](globals.md#waitforelement)

## Namespaces

###  "@nodegui/react-nodegui/dist/components/config"

• **"@nodegui/react-nodegui/dist/components/config"**:

###  RNProps

• **RNProps**:

### `Optional` testID

• **testID**? : *undefined | string*

## Type aliases

###  ConsoleErrorMock

Ƭ **ConsoleErrorMock**: *jest.MockedFunction‹typeof error›*

___

###  ConsoleLogMock

Ƭ **ConsoleLogMock**: *jest.MockedFunction‹typeof log›*

___

###  Debug

Ƭ **Debug**: *[DebugFn](globals.md#debugfn) & object*

___

###  DebugAPI

Ƭ **DebugAPI**: *[DebugFunction](globals.md#debugfunction) & object*

___

###  DebugFn

Ƭ **DebugFn**: *function*

#### Type declaration:

▸ (`message?`: undefined | string): *void*

**Parameters:**

Name | Type |
------ | ------ |
`message?` | undefined &#124; string |

___

###  DebugFunction

Ƭ **DebugFunction**: *function*

#### Type declaration:

▸ (`instance`: ReactTestInstance | ReactElement‹any›, `message?`: undefined | string): *void*

**Parameters:**

Name | Type |
------ | ------ |
`instance` | ReactTestInstance &#124; ReactElement‹any› |
`message?` | undefined &#124; string |

___

###  DebugShallow

Ƭ **DebugShallow**: *[DebugFn](globals.md#debugfn)*

___

###  EventHandler

Ƭ **EventHandler**: *function*

#### Type declaration:

▸ (...`args`: any[]): *void*

**Parameters:**

Name | Type |
------ | ------ |
`...args` | any[] |

___

###  FireEventAPI

Ƭ **FireEventAPI**: *[FireEventFunction](globals.md#fireeventfunction) & object*

___

###  FireEventFunction

Ƭ **FireEventFunction**: *function*

#### Type declaration:

▸ (`element`: ReactTestInstance, `eventName`: string, ...`data`: Array‹any›): *any*

**Parameters:**

Name | Type |
------ | ------ |
`element` | ReactTestInstance |
`eventName` | string |
`...data` | Array‹any› |

___

###  QueryNames

Ƭ **QueryNames**: *object*

#### Type declaration:

* **getAllBy**: *Array‹string›*

* **getBy**: *Array‹string›*

* **queryAllBy**: *Array‹string›*

* **queryBy**: *Array‹string›*

___

###  RendererUpdateFn

Ƭ **RendererUpdateFn**: *function*

#### Type declaration:

▸ (`component`: ReactElement): *void*

**Parameters:**

Name | Type |
------ | ------ |
`component` | ReactElement |

## Variables

### `Const` INPUT_CHEF

• **INPUT_CHEF**: *"I inspected freshie"* = "I inspected freshie"

___

### `Const` INPUT_FRESHNESS

• **INPUT_FRESHNESS**: *"Custom Freshie"* = "Custom Freshie"

___

### `Const` PLACEHOLDER_CHEF

• **PLACEHOLDER_CHEF**: *"Who inspected freshness?"* = "Who inspected freshness?"

___

### `Const` PLACEHOLDER_FRESHNESS

• **PLACEHOLDER_FRESHNESS**: *"Add custom freshness"* = "Add custom freshness"

___

### `Let` act

• **act**: *typeof realAct*

___

### `Const` cleanupQueue

• **cleanupQueue**: *Set‹function›* = new Set<() => void>()

## Functions

### `Const` Counter

▸ **Counter**(): *Element‹›*

**Returns:** *Element‹›*

___

### `Const` CustomEventComponent

▸ **CustomEventComponent**(`__namedParameters`: object): *Element‹›*

**Parameters:**

▪ **__namedParameters**: *object*

Name | Type |
------ | ------ |
`onCustomEvent` | function |

**Returns:** *Element‹›*

___

### `Const` CustomEventComponentWithCustomName

▸ **CustomEventComponentWithCustomName**(`__namedParameters`: object): *Element‹›*

**Parameters:**

▪ **__namedParameters**: *object*

Name | Type |
------ | ------ |
`handleClick` | function |

**Returns:** *Element‹›*

___

### `Const` MyCustomButton

▸ **MyCustomButton**(`__namedParameters`: object): *Element‹›*

**Parameters:**

▪ **__namedParameters**: *object*

Name | Type |
------ | ------ |
`handleClick` | function |

**Returns:** *Element‹›*

___

### `Const` OnComponent

▸ **OnComponent**(`__namedParameters`: object): *Element‹›*

**Parameters:**

▪ **__namedParameters**: *object*

Name | Type |
------ | ------ |
`on` | undefined &#124; object &#124; object |

**Returns:** *Element‹›*

___

###  TextComponent

▸ **TextComponent**(`__namedParameters`: object): *ReactElement*

**Parameters:**

▪ **__namedParameters**: *object*

Name | Type |
------ | ------ |
`text` | string |

**Returns:** *ReactElement*

___

### `Const` TextPress

▸ **TextPress**(`__namedParameters`: object): *Element‹›*

**Parameters:**

▪ **__namedParameters**: *object*

Name | Type |
------ | ------ |
`dummyID` | undefined &#124; string |

**Returns:** *Element‹›*

___

### `Const` UseEffect

▸ **UseEffect**(`__namedParameters`: object): *null*

**Parameters:**

▪ **__namedParameters**: *object*

Name | Type |
------ | ------ |
`callback` | function |

**Returns:** *null*

___

### `Const` WithoutEventComponent

▸ **WithoutEventComponent**(): *Element‹›*

**Returns:** *Element‹›*

___

###  actMock

▸ **actMock**(`callback`: function): *Promise‹undefined›*

Wrap any code rendering and triggering updates to your components into `act()` calls.

Ensures that the behavior in your tests matches what happens in the browser
more closely by executing pending `useEffect`s before returning. This also
reduces the amount of re-renders done.

**`see`** https://reactjs.org/blog/2019/02/06/react-v16.8.0.html#testing-hooks

**Parameters:**

▪ **callback**: *function*

An asynchronous, void callback that will execute as a single, complete React commit.

▸ (): *Promise‹void | undefined›*

**Returns:** *Promise‹undefined›*

▸ **actMock**(`callback`: function): *DebugPromiseLike*

Wrap any code rendering and triggering updates to your components into `act()` calls.

Ensures that the behavior in your tests matches what happens in the browser
more closely by executing pending `useEffect`s before returning. This also
reduces the amount of re-renders done.

**`see`** https://reactjs.org/blog/2019/02/06/react-v16.8.0.html#testing-hooks

**Parameters:**

▪ **callback**: *function*

A synchronous, void callback that will execute as a single, complete React commit.

▸ (): *void | undefined*

**Returns:** *DebugPromiseLike*

___

###  addToCleanupQueue

▸ **addToCleanupQueue**(`fn`: function): *void*

**Parameters:**

▪ **fn**: *function*

▸ (`nextElement?`: ReactElement‹any›): *void*

**Parameters:**

Name | Type |
------ | ------ |
`nextElement?` | ReactElement‹any› |

**Returns:** *void*

___

### `Const` changeTextHandler

▸ **changeTextHandler**(`element`: ReactTestInstance, ...`data`: Array‹any›): *any*

**Parameters:**

Name | Type |
------ | ------ |
`element` | ReactTestInstance |
`...data` | Array‹any› |

**Returns:** *any*

___

###  cleanup

▸ **cleanup**(): *void*

**Returns:** *void*

___

### `Const` clickHandler

▸ **clickHandler**(`element`: ReactTestInstance): *any*

**Parameters:**

Name | Type |
------ | ------ |
`element` | ReactTestInstance |

**Returns:** *any*

___

### `Const` createLibraryNotSupportedError

▸ **createLibraryNotSupportedError**(`error`: [Error](classes/errorwithstack.md#static-error)): *[Error](classes/errorwithstack.md#static-error)*

**Parameters:**

Name | Type |
------ | ------ |
`error` | [Error](classes/errorwithstack.md#static-error) |

**Returns:** *[Error](classes/errorwithstack.md#static-error)*

___

### `Const` createQueryByError

▸ **createQueryByError**(`error`: [Error](classes/errorwithstack.md#static-error), `callsite`: Function): *null | never*

**Parameters:**

Name | Type |
------ | ------ |
`error` | [Error](classes/errorwithstack.md#static-error) |
`callsite` | Function |

**Returns:** *null | never*

___

###  debug

▸ **debug**(`instance`: ReactTestInstance, `renderer`: object): *[Debug](globals.md#debug)*

**Parameters:**

▪ **instance**: *ReactTestInstance*

▪ **renderer**: *object*

Name | Type |
------ | ------ |
`toJSON` |  |

**Returns:** *[Debug](globals.md#debug)*

___

###  debugDeep

▸ **debugDeep**(`instance?`: ReactTestRendererJSON | ReactElement‹any› | null, `message`: any): *void*

Log pretty-printed deep test component instance

**Parameters:**

Name | Type | Default |
------ | ------ | ------ |
`instance?` | ReactTestRendererJSON &#124; ReactElement‹any› &#124; null | - |
`message` | any | "" |

**Returns:** *void*

___

###  debugDeepElementOrInstance

▸ **debugDeepElementOrInstance**(`instance`: ReactElement‹any› | undefined | ReactTestRendererJSON | null, `message`: any): *void*

Log pretty-printed deep test component instance

**Parameters:**

Name | Type | Default |
------ | ------ | ------ |
`instance` | ReactElement‹any› &#124; undefined &#124; ReactTestRendererJSON &#124; null | - |
`message` | any | "" |

**Returns:** *void*

___

###  debugShallow

▸ **debugShallow**(`instance`: ReactTestInstance | ReactElement‹any›, `message?`: any): *void*

Log pretty-printed shallow test component instance

**Parameters:**

Name | Type |
------ | ------ |
`instance` | ReactTestInstance &#124; ReactElement‹any› |
`message?` | any |

**Returns:** *void*

___

### `Const` filterNodeByType

▸ **filterNodeByType**(`node`: ReactTestInstance, `type`: string): *boolean*

**Parameters:**

Name | Type |
------ | ------ |
`node` | ReactTestInstance |
`type` | string |

**Returns:** *boolean*

___

### `Const` findEventHandler

▸ **findEventHandler**(`element`: ReactTestInstance, `eventName`: string, `callsite?`: any): *[EventHandler](globals.md#eventhandler)*

**Parameters:**

Name | Type |
------ | ------ |
`element` | ReactTestInstance |
`eventName` | string |
`callsite?` | any |

**Returns:** *[EventHandler](globals.md#eventhandler)*

___

### `Const` fireEvent

▸ **fireEvent**(`element`: ReactTestInstance, `eventName`: string, ...`data`: any[]): *any*

**Parameters:**

Name | Type |
------ | ------ |
`element` | ReactTestInstance |
`eventName` | string |
`...data` | any[] |

**Returns:** *any*

___

###  flushMicrotasksQueue

▸ **flushMicrotasksQueue**(): *Promise‹void›*

Wait for microtasks queue to flush

**Returns:** *Promise‹void›*

___

###  format

▸ **format**(`input?`: ReactTestRendererJSON | ReactElement‹any› | null): *string*

**Parameters:**

Name | Type |
------ | ------ |
`input?` | ReactTestRendererJSON &#124; ReactElement‹any› &#124; null |

**Returns:** *string*

___

### `Const` getAllByDisplayValue

▸ **getAllByDisplayValue**(`instance`: ReactTestInstance): *getAllByDisplayValueFn*

**Parameters:**

Name | Type |
------ | ------ |
`instance` | ReactTestInstance |

**Returns:** *getAllByDisplayValueFn*

___

### `Const` getAllByPlaceholder

▸ **getAllByPlaceholder**(`instance`: ReactTestInstance): *getAllByPlaceholderFn*

**Parameters:**

Name | Type |
------ | ------ |
`instance` | ReactTestInstance |

**Returns:** *getAllByPlaceholderFn*

___

### `Const` getAllByProps

▸ **getAllByProps**(`instance`: ReactTestInstance): *getAllByPropsFn*

**Parameters:**

Name | Type |
------ | ------ |
`instance` | ReactTestInstance |

**Returns:** *getAllByPropsFn*

___

### `Const` getAllByTestId

▸ **getAllByTestId**(`instance`: ReactTestInstance): *getAllByTestIdFn*

**Parameters:**

Name | Type |
------ | ------ |
`instance` | ReactTestInstance |

**Returns:** *getAllByTestIdFn*

___

### `Const` getAllByText

▸ **getAllByText**(`instance`: ReactTestInstance): *getAllByTextFn*

**Parameters:**

Name | Type |
------ | ------ |
`instance` | ReactTestInstance |

**Returns:** *getAllByTextFn*

___

### `Const` getAllByType

▸ **getAllByType**(`instance`: ReactTestInstance): *getAllByTypeFn*

**Parameters:**

Name | Type |
------ | ------ |
`instance` | ReactTestInstance |

**Returns:** *getAllByTypeFn*

___

### `Const` getButtonNodeByText

▸ **getButtonNodeByText**(`node`: ReactTestInstance, `text`: string | RegExp): *boolean*

**Parameters:**

Name | Type |
------ | ------ |
`node` | ReactTestInstance |
`text` | string &#124; RegExp |

**Returns:** *boolean*

___

### `Const` getByAPI

▸ **getByAPI**(`instance`: ReactTestInstance): *[GetByAPI](interfaces/getbyapi.md)*

**Parameters:**

Name | Type |
------ | ------ |
`instance` | ReactTestInstance |

**Returns:** *[GetByAPI](interfaces/getbyapi.md)*

___

### `Const` getByDisplayValue

▸ **getByDisplayValue**(`instance`: ReactTestInstance): *getByDisplayValueFn*

**Parameters:**

Name | Type |
------ | ------ |
`instance` | ReactTestInstance |

**Returns:** *getByDisplayValueFn*

___

### `Const` getByPlaceholder

▸ **getByPlaceholder**(`instance`: ReactTestInstance): *getByPlaceholderFn*

**Parameters:**

Name | Type |
------ | ------ |
`instance` | ReactTestInstance |

**Returns:** *getByPlaceholderFn*

___

### `Const` getByProps

▸ **getByProps**(`instance`: ReactTestInstance): *getByPropsFn*

**Parameters:**

Name | Type |
------ | ------ |
`instance` | ReactTestInstance |

**Returns:** *getByPropsFn*

___

### `Const` getByTestId

▸ **getByTestId**(`instance`: ReactTestInstance): *getByTestIdFn*

**Parameters:**

Name | Type |
------ | ------ |
`instance` | ReactTestInstance |

**Returns:** *getByTestIdFn*

___

### `Const` getByText

▸ **getByText**(`instance`: ReactTestInstance): *getByTextFn*

**Parameters:**

Name | Type |
------ | ------ |
`instance` | ReactTestInstance |

**Returns:** *getByTextFn*

___

### `Const` getByType

▸ **getByType**(`instance`: ReactTestInstance): *getByTypeFn*

**Parameters:**

Name | Type |
------ | ------ |
`instance` | ReactTestInstance |

**Returns:** *getByTypeFn*

___

### `Const` getLineEditNodeByDisplayValue

▸ **getLineEditNodeByDisplayValue**(`node`: ReactTestInstance, `text`: string | RegExp): *boolean*

**Parameters:**

Name | Type |
------ | ------ |
`node` | ReactTestInstance |
`text` | string &#124; RegExp |

**Returns:** *boolean*

___

### `Const` getLineEditNodeByPlaceholder

▸ **getLineEditNodeByPlaceholder**(`node`: ReactTestInstance, `placeholder`: string | RegExp): *boolean*

**Parameters:**

Name | Type |
------ | ------ |
`node` | ReactTestInstance |
`placeholder` | string &#124; RegExp |

**Returns:** *boolean*

___

### `Const` getNodeByText

▸ **getNodeByText**(`node`: ReactTestInstance, `text`: string | RegExp): *boolean*

**Parameters:**

Name | Type |
------ | ------ |
`node` | ReactTestInstance |
`text` | string &#124; RegExp |

**Returns:** *boolean*

___

### `Const` invokeEvent

▸ **invokeEvent**(`element`: ReactTestInstance, `eventName`: string, `callsite?`: any, ...`data`: Array‹any›): *any*

**Parameters:**

Name | Type |
------ | ------ |
`element` | ReactTestInstance |
`eventName` | string |
`callsite?` | any |
`...data` | Array‹any› |

**Returns:** *any*

___

###  isNodeValid

▸ **isNodeValid**(`node`: ReactTestInstance): *boolean*

**Parameters:**

Name | Type |
------ | ------ |
`node` | ReactTestInstance |

**Returns:** *boolean*

___

###  makeAliases

▸ **makeAliases**(`aliases`: Array‹string›, `query`: Function): *object*

**Parameters:**

Name | Type |
------ | ------ |
`aliases` | Array‹string› |
`query` | Function |

**Returns:** *object*

* \[ **x**: *string*\]: Function

___

### `Const` makeQuery

▸ **makeQuery**<**P**, **M**>(`name`: string, `queryNames`: [QueryNames](globals.md#querynames), `matcherFn`: function): *(Anonymous function)*

**Type parameters:**

▪ **P**: *unknown*

▪ **M**: *unknown*

**Parameters:**

▪ **name**: *string*

▪ **queryNames**: *[QueryNames](globals.md#querynames)*

▪ **matcherFn**: *function*

▸ (`prop`: P, `value`: M): *boolean*

**Parameters:**

Name | Type |
------ | ------ |
`prop` | P |
`value` | M |

**Returns:** *(Anonymous function)*

___

### `Const` prepareErrorMessage

▸ **prepareErrorMessage**(`error`: [Error](classes/errorwithstack.md#static-error)): *string*

**Parameters:**

Name | Type |
------ | ------ |
`error` | [Error](classes/errorwithstack.md#static-error) |

**Returns:** *string*

___

### `Const` queryAllByDisplayValue

▸ **queryAllByDisplayValue**(`instance`: ReactTestInstance): *(Anonymous function)*

**Parameters:**

Name | Type |
------ | ------ |
`instance` | ReactTestInstance |

**Returns:** *(Anonymous function)*

___

### `Const` queryAllByPlaceholder

▸ **queryAllByPlaceholder**(`instance`: ReactTestInstance): *(Anonymous function)*

**Parameters:**

Name | Type |
------ | ------ |
`instance` | ReactTestInstance |

**Returns:** *(Anonymous function)*

___

### `Const` queryAllByProps

▸ **queryAllByProps**(`instance`: ReactTestInstance): *(Anonymous function)*

**Parameters:**

Name | Type |
------ | ------ |
`instance` | ReactTestInstance |

**Returns:** *(Anonymous function)*

___

### `Const` queryAllByTestId

▸ **queryAllByTestId**(`instance`: ReactTestInstance): *(Anonymous function)*

**Parameters:**

Name | Type |
------ | ------ |
`instance` | ReactTestInstance |

**Returns:** *(Anonymous function)*

___

### `Const` queryAllByText

▸ **queryAllByText**(`instance`: ReactTestInstance): *(Anonymous function)*

**Parameters:**

Name | Type |
------ | ------ |
`instance` | ReactTestInstance |

**Returns:** *(Anonymous function)*

___

### `Const` queryAllByType

▸ **queryAllByType**(`instance`: ReactTestInstance): *(Anonymous function)*

**Parameters:**

Name | Type |
------ | ------ |
`instance` | ReactTestInstance |

**Returns:** *(Anonymous function)*

___

### `Const` queryByAPI

▸ **queryByAPI**(`instance`: ReactTestInstance): *[QueryByAPI](interfaces/querybyapi.md)*

**Parameters:**

Name | Type |
------ | ------ |
`instance` | ReactTestInstance |

**Returns:** *[QueryByAPI](interfaces/querybyapi.md)*

___

### `Const` queryByDisplayValue

▸ **queryByDisplayValue**(`instance`: ReactTestInstance): *queryByDisplayValueFn*

**Parameters:**

Name | Type |
------ | ------ |
`instance` | ReactTestInstance |

**Returns:** *queryByDisplayValueFn*

___

### `Const` queryByPlaceholder

▸ **queryByPlaceholder**(`instance`: ReactTestInstance): *queryByPlaceholderFn*

**Parameters:**

Name | Type |
------ | ------ |
`instance` | ReactTestInstance |

**Returns:** *queryByPlaceholderFn*

___

### `Const` queryByProps

▸ **queryByProps**(`instance`: ReactTestInstance): *queryByPropsFn*

**Parameters:**

Name | Type |
------ | ------ |
`instance` | ReactTestInstance |

**Returns:** *queryByPropsFn*

___

### `Const` queryByTestId

▸ **queryByTestId**(`instance`: ReactTestInstance): *queryByTestIdFn*

**Parameters:**

Name | Type |
------ | ------ |
`instance` | ReactTestInstance |

**Returns:** *queryByTestIdFn*

___

### `Const` queryByText

▸ **queryByText**(`instance`: ReactTestInstance): *queryByTextFn*

**Parameters:**

Name | Type |
------ | ------ |
`instance` | ReactTestInstance |

**Returns:** *queryByTextFn*

___

### `Const` queryByType

▸ **queryByType**(`instance`: ReactTestInstance): *queryByTypeFn*

**Parameters:**

Name | Type |
------ | ------ |
`instance` | ReactTestInstance |

**Returns:** *queryByTypeFn*

___

###  render

▸ **render**<**T**>(`component`: ReactElement‹T›, `__namedParameters`: object): *[RenderAPI](interfaces/renderapi.md)*

**Type parameters:**

▪ **T**

**Parameters:**

▪ **component**: *ReactElement‹T›*

▪`Default value`  **__namedParameters**: *object*= {}

Name | Type |
------ | ------ |
`Wrapper` | undefined &#124; ComponentClass‹any, any› &#124; FunctionComponent‹any› |
`createNodeMock` | undefined &#124; function |

**Returns:** *[RenderAPI](interfaces/renderapi.md)*

___

###  renderWithAct

▸ **renderWithAct**(`component`: ReactElement‹any›, `options?`: [TestRendererOptions](interfaces/testrendereroptions.md)): *ReactTestRenderer*

**Parameters:**

Name | Type |
------ | ------ |
`component` | ReactElement‹any› |
`options?` | [TestRendererOptions](interfaces/testrendereroptions.md) |

**Returns:** *ReactTestRenderer*

___

###  shallow

▸ **shallow**(`instance`: ReactTestInstance | ReactElement‹any›): *[ShallowRenderer](interfaces/shallowrenderer.md)*

**Parameters:**

Name | Type |
------ | ------ |
`instance` | ReactTestInstance &#124; ReactElement‹any› |

**Returns:** *[ShallowRenderer](interfaces/shallowrenderer.md)*

___

### `Const` toEventHandlerName

▸ **toEventHandlerName**(`eventName`: string): *string*

**Parameters:**

Name | Type |
------ | ------ |
`eventName` | string |

**Returns:** *string*

___

###  updateWithAct

▸ **updateWithAct**(`renderer`: ReactTestRenderer, `wrap`: function): *[RendererUpdateFn](globals.md#rendererupdatefn)*

**Parameters:**

▪ **renderer**: *ReactTestRenderer*

▪ **wrap**: *function*

▸ (`innerElement`: ReactElement‹any›): *ReactElement‹any›*

**Parameters:**

Name | Type |
------ | ------ |
`innerElement` | ReactElement‹any› |

**Returns:** *[RendererUpdateFn](globals.md#rendererupdatefn)*

___

###  waitForElement

▸ **waitForElement**<**T**>(`expectation`: function, `timeout`: number, `interval`: number): *Promise‹T›*

**Type parameters:**

▪ **T**

**Parameters:**

▪ **expectation**: *function*

▸ (): *T*

▪`Default value`  **timeout**: *number*= 4500

▪`Default value`  **interval**: *number*= 50

**Returns:** *Promise‹T›*
