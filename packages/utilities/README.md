<div align="center">

# @dareharu/utilities

### Common JavaScript utilities for [Dareharu] projects.

[![License: MIT](https://img.shields.io/badge/License-MIT-blue.svg)](https://raw.githubusercontent.com/dareharu/utilities/main/LICENSE)
[![npm bundle size](https://img.shields.io/bundlephobia/min/@dareharu/utilities?logo=webpack&style=flat-square)](https://bundlephobia.com/result?p=@dareharu/utilities)
[![npm](https://img.shields.io/npm/v/@dareharu/utilities?color=crimson&logo=npm&style=flat-square)](https://www.npmjs.com/package/@dareharu/utilities)

</div>

---

<details>
  <summary>Table of Contents</summary>

  -  [Features](#🧮-features)
  -  [Installation](#🚀-installation)
  -  [Usage](#🌟-usage)
      -  [`createBitField`](#createbitfield)
      -  [`keyMirror`](#keymirror)
  -  [Meta](#🔗-meta)
      -  [Contributing](#contributing)
      -  [License](#license)

</details>

## 🧮 Features

*  Written in TypeScript
*  Bundled with esbuild so it can be used in NodeJS and browsers
*  Offers CommonJS, ESM bundles
*  Fully tested

## 🚀 Installation

> **Note** In the following example commands we use `npm install` to fit best suited to the basic environment, feel free to replace `npm install` with your package manager of choice (yarn, pnpm or whatever).

```sh
npm install @dareharu/utilities
```

## 🌟 Usage

You can import individual utility function from subpath like: `@dareharu/utilities/keyMirror` or the entire library.

```ts
import { keyMirror } from '@dareharu/utilities/keyMirror';

// or
import { keyMirror } from '@dareharu/utilities';
```

> **Note** For TypeScript users, subpath import are only supported in `--moduleResolution node16` and `--moduleResolution nodenext`. More information can be found [in the issue #50794 on the microsoft/TypeScript repository](https://github.com/microsoft/TypeScript/issues/50794).

> **Note** While this section uses `require`, the imports match 1:1 with ESM imports. For example `const { deepClone } = require('@dareharu/utilities')` equals `import { deepClone } from '@dareharu/utilities'`.

#### `createBitField`

Converts the given array to a bitfield object.

```ts
const Group = createBitField(['Administrator', 'Moderator', 'Member', 'User', 'Guest']);

assert.equal(Group.Administrator, 1);
assert.equal(Group.Moderator, 2);
assert.equal(Group.Member, 4);
assert.equal(Group.User, 8);
assert.equal(Group.Guest, 16);
```

See also this package: [`@sapphire/bitfield`](https://www.npmjs.com/package/@sapphire/bitfield)

#### `keyMirror`

Creates a new object that assigned each value of the given array into property key and value.

```ts
const ChatInputId = keyMirror(['Ticket', 'Message']);

assert.equal(ChatInputId.Ticket, 'Ticket');
assert.equal(ChatInputId.Message, 'Message');
```

```ts
const ResponseType = {
  ...keyMirror(['Create', 'Delete'], { prefix: 'Ticket' }),
  ...keyMirror(['Send', 'Receive'], { prefix: 'Message' })
};
assert.equal(ResponseType.TicketCreate, 'TicketCreate');
assert.equal(ResponseType.TicketDelete, 'TicketDelete');
assert.equal(ResponseType.MessageSend, 'MessageSend');
assert.equal(ResponseType.MessageReceive, 'MessageReceive');
```

```ts
const ResponseType = {
  ...keyMirror(['Channel', 'Message'], { prefix: 'Haru', suffix: 'Create' }),
  ...keyMirror(['Channel', 'Message'], { prefix: 'Haru', suffix: 'Delete' }),
  ...keyMirror(['Channel', 'Message'], { prefix: 'Haru', suffix: 'Update' })
};

assert.equal(ResponseType.HaruChannelCreate, 'HaruChannelCreate');
assert.equal(ResponseType.HaruChannelDelete, 'HaruChannelDelete');
assert.equal(ResponseType.HaruChannelUpdate, 'HaruChannelUpdate');
assert.equal(ResponseType.HaruMessageCreate, 'HaruMessageCreate');
assert.equal(ResponseType.HaruMessageDelete, 'HaruMessageDelete');
assert.equal(ResponseType.HaruMessageUpdate, 'HaruMessageUpdate');
```

## 🔗 Meta

### Contributing

1. Fork it!
1. Create your feature branch: `git switch -c my-new-feature`
1. Commit your changes: `git commit -am 'Add awesome feature'`
1. Push to the branch: `git push origin my-new-feature`
1. Submit a pull request!

### License

Released under the [MIT License](LICENSE).

<!-- link dump -->

[Dareharu]: https://github.com/dareharu
