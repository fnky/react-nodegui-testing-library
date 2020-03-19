<div align='center'>
  <a href="https://www.emojione.com/emoji/1f98B">
    <img
      height="80"
      width="80"
      alt="butterfly"
      src="https://raw.githubusercontent.com/fnky/react-nodegui-testing-library/master/other/butterfly.png"
    />
  </a>
  
  <h1>React NodeGui Testing Library</h1>

  <p>Simple React NodeGui testing utilities that encourage good testing
practices.</P>

  <br />

[**Read The Docs**](https://fnky.github.io/react-nodegui-testing-library)

</div>

<!-- prettier-ignore-start -->
[![Build Status][build-badge]][build]
[![version][version-badge]][package] [![downloads][downloads-badge]][npmtrends]
[![MIT License][license-badge]][license]

<!-- ALL-CONTRIBUTORS-BADGE:START - Do not remove or modify this section -->
[![All Contributors](https://img.shields.io/badge/all_contributors-1-orange.svg?style=flat-square)](#contributors-)
<!-- ALL-CONTRIBUTORS-BADGE:END -->

[![Watch on GitHub][github-watch-badge]][github-watch]
[![Star on GitHub][github-star-badge]][github-star]
<!-- prettier-ignore-end -->

## The problem

You want to write maintainable tests for your [React
NodeGui](https://github.com/nodegui/react-nodegui) components testing without
implementation details and rather focus on making your tests give you the
confidence for which they are intended.

## This solution

The `react-nodegui-testing-library` is a very lightweight solution for testing
React NodeGui components. It provides light utility functions on top of
`react-test-renderer`, in a way that encourages better testing practices.

The project is heavily based on [`react-native-testing-library`](https://github.com/callstack/react-native-testing-library)

## Installation

This module is distributed via [npm][npm] which is bundled with [node][node] and
should be installed as one of your project's `devDependencies`:

```bash
yarn install --dev react-nodegui-testing-library
# or
npm install --save-dev react-nodegui-testing-library
```

This library has `peerDependencies` listings for `react`, `@nodegui/react-nodegui` and
`react-test-renderer`.

> [**Docs**](https://fnky.github.io/react-nodegui-testing-library)

## Example

```tsx
import React from 'react'
import { View, Text, Button, useEventHandler } from '@nodegui/react-nodegui'

export const HiddenMessage: React.FC = ({ children }) => {
  const [showMessage, setShowMessage] = React.useState(false);

  return (
    <View>
      <Button
        on={clicked: () => {
          setShowMessage(prevShowMessage => !!prevShowMessage)
        }}
        text="Show Message"
      />
      {showMessage ? children : null}
    </View>
  )
}

// __tests__/hidden-message.test.ts
import { render, fireEvent } from 'react-nodegui-testing-library';
import { HiddenMessage } from '../HiddenMessage';

test('toggles the children when the button is clicked', () => {
  const testMessage = 'Test Message';
  const { getByText, queryByText } = render(
    <HiddenMessage>
      <Text>{testMessage}</Text>
    </HiddenMessage>
  );

  // query* functions will return the element or null if it cannot be found
  // get* functions will return the element or throw an error if it cannot be found
  expect(queryByText(testMessage)).toBeNull();

  // the queries can accept a regex to make your selectors more resilient to content tweaks and changes.
  fireEvent.click(getByText(/show/i));

  expect(getByText(testMessage)).toBeDefined();
});
```

## Docs

[**Read The Docs**](https://fnky.github.io/react-nodegui-testing-library)

## Contributors

Thanks goes to these people ([emoji key][emojis]):

<!-- ALL-CONTRIBUTORS-LIST:START - Do not remove or modify this section -->
<!-- prettier-ignore-start -->
<!-- markdownlint-disable -->
<table>
  <tr>
    <td align="center"><a href="https://cbp.io"><img src="https://avatars1.githubusercontent.com/u/995050?v=4" width="100px;" alt=""/><br /><sub><b>Christian Petersen</b></sub></a><br /><a href="https://github.com/fnky/react-nodegui-testing-library/commits?author=fnky" title="Code">💻</a> <a href="https://github.com/fnky/react-nodegui-testing-library/commits?author=fnky" title="Documentation">📖</a> <a href="#infra-fnky" title="Infrastructure (Hosting, Build-Tools, etc)">🚇</a> <a href="https://github.com/fnky/react-nodegui-testing-library/commits?author=fnky" title="Tests">⚠️</a></td>
  </tr>
</table>

<!-- markdownlint-enable -->
<!-- prettier-ignore-end -->
<!-- ALL-CONTRIBUTORS-LIST:END -->

This project follows the [all-contributors][all-contributors] specification.
Contributions of any kind welcome!

## LICENSE

[MIT](LICENSE)

<!-- prettier-ignore-start -->
[npm]: https://www.npmjs.com/
[node]: https://nodejs.org
[build-badge]: https://github.com/fnky/react-nodegui-testing-library/workflows/Tests/badge.svg?style=flat-square
[build]: https://github.com/fnky/react-nodegui-testing-library
[version-badge]: https://img.shields.io/npm/v/react-nodegui-testing-library.svg?style=flat-square
[package]: https://www.npmjs.com/package/react-nodegui-testing-library
[downloads-badge]: https://img.shields.io/npm/dm/react-nodegui-testing-library.svg?style=flat-square
[npmtrends]: http://www.npmtrends.com/react-nodegui-testing-library
[license-badge]: https://img.shields.io/npm/l/react-nodegui-testing-library.svg?style=flat-square
[license]: https://github.com/fnky/react-nodegui-testing-library/blob/master/LICENSE
[prs-badge]: https://img.shields.io/badge/PRs-welcome-brightgreen.svg?style=flat-square
[prs]: http://makeapullrequest.com
[github-watch-badge]: https://img.shields.io/github/watchers/fnky/react-nodegui-testing-library.svg?style=social
[github-watch]: https://github.com/fnky/react-nodegui-testing-library/watchers
[github-star-badge]: https://img.shields.io/github/stars/fnky/react-nodegui-testing-library.svg?style=social
[github-star]: https://github.com/fnky/react-nodegui-testing-library/stargazers
[emojis]: https://github.com/all-contributors/all-contributors#emoji-key
[all-contributors]: https://github.com/all-contributors/all-contributors
[bugs]: https://github.com/fnky/react-nodegui-testing-library/issues?q=is%3Aissue+is%3Aopen+label%3Abug+sort%3Acreated-desc
[requests]: https://github.com/fnky/react-nodegui-testing-library/issues?q=is%3Aissue+sort%3Areactions-%2B1-desc+label%3Aenhancement+is%3Aopen
[good-first-issue]: https://github.com/fnky/react-nodegui-testing-library/issues?utf8=✓&q=is%3Aissue+is%3Aopen+sort%3Areactions-%2B1-desc+label%3A"good+first+issue"+
[stackoverflow]: https://stackoverflow.com/questions/tagged/react-nodegui-testing-library

<!-- prettier-ignore-end -->
