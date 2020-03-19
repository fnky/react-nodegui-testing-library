---
id: "querybyapi"
title: "QueryByAPI"
sidebar_label: "QueryByAPI"
---

## Hierarchy

* **QueryByAPI**

  ↳ [RenderAPI](renderapi.md)

## Index

### Properties

* [queryAllByDisplayValue](querybyapi.md#queryallbydisplayvalue)
* [queryAllByPlaceholder](querybyapi.md#queryallbyplaceholder)
* [queryAllByProps](querybyapi.md#queryallbyprops)
* [queryAllByTestId](querybyapi.md#queryallbytestid)
* [queryAllByText](querybyapi.md#queryallbytext)
* [queryAllByType](querybyapi.md#queryallbytype)
* [queryByDisplayValue](querybyapi.md#querybydisplayvalue)
* [queryByPlaceholder](querybyapi.md#querybyplaceholder)
* [queryByProps](querybyapi.md#querybyprops)
* [queryByTestId](querybyapi.md#querybytestid)
* [queryByText](querybyapi.md#querybytext)
* [queryByType](querybyapi.md#querybytype)

## Properties

###  queryAllByDisplayValue

• **queryAllByDisplayValue**: *function*

#### Type declaration:

▸ (`value`: string | RegExp): *Array‹ReactTestInstance› | []*

**Parameters:**

Name | Type |
------ | ------ |
`value` | string &#124; RegExp |

___

###  queryAllByPlaceholder

• **queryAllByPlaceholder**: *function*

#### Type declaration:

▸ (`placeholder`: string | RegExp): *Array‹ReactTestInstance› | []*

**Parameters:**

Name | Type |
------ | ------ |
`placeholder` | string &#124; RegExp |

___

###  queryAllByProps

• **queryAllByProps**: *function*

#### Type declaration:

▸ (`props`: Record‹string, any›): *Array‹ReactTestInstance› | []*

**Parameters:**

Name | Type |
------ | ------ |
`props` | Record‹string, any› |

___

###  queryAllByTestId

• **queryAllByTestId**: *function*

#### Type declaration:

▸ (`testID`: string): *Array‹ReactTestInstance› | null*

**Parameters:**

Name | Type |
------ | ------ |
`testID` | string |

___

###  queryAllByText

• **queryAllByText**: *function*

#### Type declaration:

▸ (`text`: string | RegExp): *Array‹ReactTestInstance› | []*

**Parameters:**

Name | Type |
------ | ------ |
`text` | string &#124; RegExp |

___

###  queryAllByType

• **queryAllByType**: *function*

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

#### Type declaration:

▸ (`value`: string | RegExp): *ReactTestInstance | null*

**Parameters:**

Name | Type |
------ | ------ |
`value` | string &#124; RegExp |

___

###  queryByPlaceholder

• **queryByPlaceholder**: *function*

#### Type declaration:

▸ (`placeholder`: string | RegExp): *ReactTestInstance | null*

**Parameters:**

Name | Type |
------ | ------ |
`placeholder` | string &#124; RegExp |

___

###  queryByProps

• **queryByProps**: *function*

#### Type declaration:

▸ (`props`: Record‹string, any›): *ReactTestInstance | null*

**Parameters:**

Name | Type |
------ | ------ |
`props` | Record‹string, any› |

___

###  queryByTestId

• **queryByTestId**: *function*

#### Type declaration:

▸ (`testID`: string): *ReactTestInstance | null*

**Parameters:**

Name | Type |
------ | ------ |
`testID` | string |

___

###  queryByText

• **queryByText**: *function*

#### Type declaration:

▸ (`name`: string | RegExp): *ReactTestInstance | null*

**Parameters:**

Name | Type |
------ | ------ |
`name` | string &#124; RegExp |

___

###  queryByType

• **queryByType**: *function*

#### Type declaration:

▸ <**P**>(`type`: React.ComponentType‹P›): *ReactTestInstance | null*

**Type parameters:**

▪ **P**

**Parameters:**

Name | Type |
------ | ------ |
`type` | React.ComponentType‹P› |
