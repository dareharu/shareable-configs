# @dareharu/eslint-config

### Shareable ESLint configuration for [Dareharu] projects.

[![License: MIT](https://img.shields.io/badge/License-MIT-blue.svg)](https://raw.githubusercontent.com/dareharu/eslint-config/main/LICENSE)

Strongly inspired by [@sapphiredev/eslint-config](https://github.com/sapphiredev/utilities/tree/main/packages/eslint-config).

---

<details>
  <summary>Table of Contents</summary>

  -  [Installation](#🚀-installation)
  -  [Usage](#🌟-usage)
  -  [Meta](#🔗-meta)
      -  [Contributing](#contributing)
      -  [License](#license)

</details>

# 🚀 Installation

> **Note** In the following example commands we use `npm install` to fit best suited to the basic environment, feel free to replace `npm install` with your package manager of choice (yarn, pnpm or whatever).

**First install the Peer Dependencies**.

```sh
npm install --save-dev eslint typescript @typescript-eslint/{parser,eslint-plugin}
```

**Then install the Optional Dependencies** (Optional).

```sh
npm install --save-dev eslint-plugin-import
```

**Finally install `@dareharu/eslint-config`**.

```sh
npm install --save-dev @dareharu/eslint-config
```

# 🌟 Usage

Add the ESLint config to your `package.json`:

```json
{
  "eslintConfig": {
    "extends": "@dareharu"
  }
}
```

Or to `eslintrc.js` / `.eslintrc.json`:

```js
module.exports = require('@dareharu/eslint-config')
```

```json
{
  "extends": "@dareharu"
}
```

Create `tsconfig.eslint.json` next to the eslint config file, for example with content:

```json
{
  "extends": "./tsconfig.json",
  "include": ["src", "tests"]
}
```

# 🔗 Meta

## Contributing

1. Fork it!
1. Create your feature branch: `git switch -c my-new-feature`
1. Commit your changes: `git commit -am 'Add awesome feature'`
1. Push to the branch: `git push origin my-new-feature`
1. Submit a pull request!

## License

Released under the [MIT License](LICENSE).

<!-- link dump -->

[Dareharu]: https://github.com/dareharu
