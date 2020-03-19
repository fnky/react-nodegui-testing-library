---
id: "renderapi"
title: "RenderAPI"
sidebar_label: "RenderAPI"
---

## Hierarchy

* [GetByAPI](getbyapi.md)

* [QueryByAPI](querybyapi.md)

  ↳ **RenderAPI**

## Index

### Properties

* [debug](renderapi.md#debug)
* [getAllByDisplayValue](renderapi.md#getallbydisplayvalue)
* [getAllByPlaceholder](renderapi.md#getallbyplaceholder)
* [getAllByProps](renderapi.md#getallbyprops)
* [getAllByTestId](renderapi.md#getallbytestid)
* [getAllByText](renderapi.md#getallbytext)
* [getAllByType](renderapi.md#getallbytype)
* [getByDisplayValue](renderapi.md#getbydisplayvalue)
* [getByPlaceholder](renderapi.md#getbyplaceholder)
* [getByProps](renderapi.md#getbyprops)
* [getByTestId](renderapi.md#getbytestid)
* [getByText](renderapi.md#getbytext)
* [getByType](renderapi.md#getbytype)
* [queryAllByDisplayValue](renderapi.md#queryallbydisplayvalue)
* [queryAllByPlaceholder](renderapi.md#queryallbyplaceholder)
* [queryAllByProps](renderapi.md#queryallbyprops)
* [queryAllByTestId](renderapi.md#queryallbytestid)
* [queryAllByText](renderapi.md#queryallbytext)
* [queryAllByType](renderapi.md#queryallbytype)
* [queryByDisplayValue](renderapi.md#querybydisplayvalue)
* [queryByPlaceholder](renderapi.md#querybyplaceholder)
* [queryByProps](renderapi.md#querybyprops)
* [queryByTestId](renderapi.md#querybytestid)
* [queryByText](renderapi.md#querybytext)
* [queryByType](renderapi.md#querybytype)

### Methods

* [rerender](renderapi.md#rerender)
* [toJSON](renderapi.md#tojson)
* [unmount](renderapi.md#unmount)
* [update](renderapi.md#update)

## Properties

###  debug

• **debug**: *[Debug](../globals.md#debug)*

___

###  getAllByDisplayValue

• **getAllByDisplayValue**: *function*

*Inherited from [GetByAPI](getbyapi.md).[getAllByDisplayValue](getbyapi.md#getallbydisplayvalue)*

#### Type declaration:

▸ (`value`: string | RegExp): *Array‹ReactTestInstance›*

**Parameters:**

Name | Type |
------ | ------ |
`value` | string &#124; RegExp |

___

###  getAllByPlaceholder

• **getAllByPlaceholder**: *function*

*Inherited from [GetByAPI](getbyapi.md).[getAllByPlaceholder](getbyapi.md#getallbyplaceholder)*

#### Type declaration:

▸ (`placeholder`: string | RegExp): *Array‹ReactTestInstance›*

**Parameters:**

Name | Type |
------ | ------ |
`placeholder` | string &#124; RegExp |

___

###  getAllByProps

• **getAllByProps**: *function*

*Inherited from [GetByAPI](getbyapi.md).[getAllByProps](getbyapi.md#getallbyprops)*

#### Type declaration:

▸ (`props`: Record‹string, any›): *Array‹ReactTestInstance›*

**Parameters:**

Name | Type |
------ | ------ |
`props` | Record‹string, any› |

___

###  getAllByTestId

• **getAllByTestId**: *function*

*Inherited from [GetByAPI](getbyapi.md).[getAllByTestId](getbyapi.md#getallbytestid)*

#### Type declaration:

▸ (`testID`: string): *Array‹ReactTestInstance›*

**Parameters:**

Name | Type |
------ | ------ |
`testID` | string |

___

###  getAllByText

• **getAllByText**: *function*

*Inherited from [GetByAPI](getbyapi.md).[getAllByText](getbyapi.md#getallbytext)*

#### Type declaration:

▸ (`text`: string | RegExp): *Array‹ReactTestInstance›*

**Parameters:**

Name | Type |
------ | ------ |
`text` | string &#124; RegExp |

___

###  getAllByType

• **getAllByType**: *function*

*Inherited from [GetByAPI](getbyapi.md).[getAllByType](getbyapi.md#getallbytype)*

#### Type declaration:

▸ <**P**>(`type`: React.ComponentType‹P›): *Array‹ReactTestInstance›*

**Type parameters:**

▪ **P**

**Parameters:**

Name | Type |
------ | ------ |
`type` | React.ComponentType‹P› |

___

###  getByDisplayValue

• **getByDisplayValue**: *function*

*Inherited from [GetByAPI](getbyapi.md).[getByDisplayValue](getbyapi.md#getbydisplayvalue)*

#### Type declaration:

▸ (`value`: string | RegExp): *ReactTestInstance*

**Parameters:**

Name | Type |
------ | ------ |
`value` | string &#124; RegExp |

___

###  getByPlaceholder

• **getByPlaceholder**: *function*

*Inherited from [GetByAPI](getbyapi.md).[getByPlaceholder](getbyapi.md#getbyplaceholder)*

#### Type declaration:

▸ (`placeholder`: string | RegExp): *ReactTestInstance*

**Parameters:**

Name | Type |
------ | ------ |
`placeholder` | string &#124; RegExp |

___

###  getByProps

• **getByProps**: *function*

*Inherited from [GetByAPI](getbyapi.md).[getByProps](getbyapi.md#getbyprops)*

#### Type declaration:

▸ (`props`: Record‹string, any›): *ReactTestInstance*

**Parameters:**

Name | Type |
------ | ------ |
`props` | Record‹string, any› |

___

###  getByTestId

• **getByTestId**: *function*

*Inherited from [GetByAPI](getbyapi.md).[getByTestId](getbyapi.md#getbytestid)*

#### Type declaration:

▸ (`testID`: string): *ReactTestInstance*

**Parameters:**

Name | Type |
------ | ------ |
`testID` | string |

___

###  getByText

• **getByText**: *function*

*Inherited from [GetByAPI](getbyapi.md).[getByText](getbyapi.md#getbytext)*

#### Type declaration:

▸ (`text`: string | RegExp): *ReactTestInstance*

**Parameters:**

Name | Type |
------ | ------ |
`text` | string &#124; RegExp |

___

###  getByType

• **getByType**: *function*

*Inherited from [GetByAPI](getbyapi.md).[getByType](getbyapi.md#getbytype)*

#### Type declaration:

▸ <**P**>(`type`: React.ComponentType‹P›): *ReactTestInstance*

**Type parameters:**

▪ **P**

**Parameters:**

Name | Type |
------ | ------ |
`type` | React.ComponentType‹P› |

___

###  queryAllByDisplayValue

• **queryAllByDisplayValue**: *function*

*Inherited from [QueryByAPI](querybyapi.md).[queryAllByDisplayValue](querybyapi.md#queryallbydisplayvalue)*

#### Type declaration:

▸ (`value`: string | RegExp): *Array‹ReactTestInstance› | []*

**Parameters:**

Name | Type |
------ | ------ |
`value` | string &#124; RegExp |

___

###  queryAllByPlaceholder

• **queryAllByPlaceholder**: *function*

*Inherited from [QueryByAPI](querybyapi.md).[queryAllByPlaceholder](querybyapi.md#queryallbyplaceholder)*

#### Type declaration:

▸ (`placeholder`: string | RegExp): *Array‹ReactTestInstance› | []*

**Parameters:**

Name | Type |
------ | ------ |
`placeholder` | string &#124; RegExp |

___

###  queryAllByProps

• **queryAllByProps**: *function*

*Inherited from [QueryByAPI](querybyapi.md).[queryAllByProps](querybyapi.md#queryallbyprops)*

#### Type declaration:

▸ (`props`: Record‹string, any›): *Array‹ReactTestInstance› | []*

**Parameters:**

Name | Type |
------ | ------ |
`props` | Record‹string, any› |

___

###  queryAllByTestId

• **queryAllByTestId**: *function*

*Inherited from [QueryByAPI](querybyapi.md).[queryAllByTestId](querybyapi.md#queryallbytestid)*

#### Type declaration:

▸ (`testID`: string): *Array‹ReactTestInstance› | null*

**Parameters:**

Name | Type |
------ | ------ |
`testID` | string |

___

###  queryAllByText

• **queryAllByText**: *function*

*Inherited from [QueryByAPI](querybyapi.md).[queryAllByText](querybyapi.md#queryallbytext)*

#### Type declaration:

▸ (`text`: string | RegExp): *Array‹ReactTestInstance› | []*

**Parameters:**

Name | Type |
------ | ------ |
`text` | string &#124; RegExp |

___

###  queryAllByType

• **queryAllByType**: *function*

*Inherited from [QueryByAPI](querybyapi.md).[queryAllByType](querybyapi.md#queryallbytype)*

#### Type declaration:

▸ <**P**>(`type`: React.ComponentType‹P›): *Array‹ReactTestInstance› | []*

**Type parameters:**

▪ **P**

**Parameters:**

Name | Type |
------ | ------ |
`type` | React.ComponentType‹P› |

___

###  queryByDisplayValue

• **queryByDisplayValue**: *function*

*Inherited from [QueryByAPI](querybyapi.md).[queryByDisplayValue](querybyapi.md#querybydisplayvalue)*

#### Type declaration:

▸ (`value`: string | RegExp): *ReactTestInstance | null*

**Parameters:**

Name | Type |
------ | ------ |
`value` | string &#124; RegExp |

___

###  queryByPlaceholder

• **queryByPlaceholder**: *function*

*Inherited from [QueryByAPI](querybyapi.md).[queryByPlaceholder](querybyapi.md#querybyplaceholder)*

#### Type declaration:

▸ (`placeholder`: string | RegExp): *ReactTestInstance | null*

**Parameters:**

Name | Type |
------ | ------ |
`placeholder` | string &#124; RegExp |

___

###  queryByProps

• **queryByProps**: *function*

*Inherited from [QueryByAPI](querybyapi.md).[queryByProps](querybyapi.md#querybyprops)*

#### Type declaration:

▸ (`props`: Record‹string, any›): *ReactTestInstance | null*

**Parameters:**

Name | Type |
------ | ------ |
`props` | Record‹string, any› |

___

###  queryByTestId

• **queryByTestId**: *function*

*Inherited from [QueryByAPI](querybyapi.md).[queryByTestId](querybyapi.md#querybytestid)*

#### Type declaration:

▸ (`testID`: string): *ReactTestInstance | null*

**Parameters:**

Name | Type |
------ | ------ |
`testID` | string |

___

###  queryByText

• **queryByText**: *function*

*Inherited from [QueryByAPI](querybyapi.md).[queryByText](querybyapi.md#querybytext)*

#### Type declaration:

▸ (`name`: string | RegExp): *ReactTestInstance | null*

**Parameters:**

Name | Type |
------ | ------ |
`name` | string &#124; RegExp |

___

###  queryByType

• **queryByType**: *function*

*Inherited from [QueryByAPI](querybyapi.md).[queryByType](querybyapi.md#querybytype)*

#### Type declaration:

▸ <**P**>(`type`: React.ComponentType‹P›): *ReactTestInstance | null*

**Type parameters:**

▪ **P**

**Parameters:**

Name | Type |
------ | ------ |
`type` | React.ComponentType‹P› |

## Methods

###  rerender

▸ **rerender**(`nextElement`: ReactElement‹any›): *void*

**Parameters:**

Name | Type |
------ | ------ |
`nextElement` | ReactElement‹any› |

**Returns:** *void*

___

###  toJSON

▸ **toJSON**(): *ReactTestRendererJSON | null*

**Returns:** *ReactTestRendererJSON | null*

___

###  unmount

▸ **unmount**(`nextElement?`: React.ReactElement‹any›): *void*

**Parameters:**

Name | Type |
------ | ------ |
`nextElement?` | React.ReactElement‹any› |

**Returns:** *void*

___

###  update

▸ **update**(`nextElement`: ReactElement‹any›): *void*

**Parameters:**

Name | Type |
------ | ------ |
`nextElement` | ReactElement‹any› |

**Returns:** *void*
