# @dareharu/eslint-config

### Shareable ESLint and TypeScript configuration for [Dareharu] projects.

[![License: MIT](https://img.shields.io/badge/License-MIT-blue.svg)](https://raw.githubusercontent.com/dareharu/eslint-config/main/LICENSE)

Strongly inspired by [@skyra/eslint-config].

---

<details>
  <summary>Table of Contents</summary>

  -  [Installation](#🚀-installation)
  -  [Usage](#🌟-usage)
      -  [ESLint config](#eslint-config)
      -  [TypeScript config](#typescript-config)
  -  [Meta](#🔗-meta)
      -  [Contributing](#contributing)
      -  [License](#license)

</details>

# 🚀 Installation

> **Note** In the following example commands we use `npm install` to fit best suited to the basic environment, feel free to replace `npm install` with your package manager of choice (yarn, pnpm or whatever).

**First install the Peer Dependencies**.

```sh
npm install eslint typescript @typescript-eslint/{parser,eslint-plugin} --save-dev
```

**Then install `@dareharu/eslint-config`**

# 🌟 Usage

### ESLint config

Add the ESLint config to your `package.json`:

```json
{
  "eslintConfig": {
    "extends": "@dareharu"
  }
}
```

Or to `eslintrc.js` or `.eslintrc.json`:

```json
{
  "extends": "@dareharu"
}
```

Create `tsconfig.eslint.json` next to the eslint config file, for example with content:

```json
{
  "extends": "./tsconfig.json",
  "include": ["src", "test"]
}
```

### TypeScript config

You can use `@dareharu/eslint-config`'s
[`tsconfig.json`](tsconfig.json) by extending it in yours:

```json
{
  "extends": "@dareharu/eslint-config"
}
```

All of its properties have defaulted for bleeding-edge TypeScript options, you may extend this to include your own configuration options as well.

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
[@skyra/eslint-config]: https://github.com/skyra-project/eslint-config
