<div align="center">

# @dareharu/ts-config

### Shareable TypeScript configuration for [Dareharu] projects.

[![License: MIT](https://img.shields.io/badge/License-MIT-blue.svg)](https://raw.githubusercontent.com/dareharu/eslint-config/main/LICENSE)
[![npm bundle size](https://img.shields.io/bundlephobia/min/@dareharu/ts-config?logo=webpack&style=flat-square)](https://bundlephobia.com/result?p=@dareharu/ts-config)
[![npm](https://img.shields.io/npm/v/@dareharu/ts-config?color=crimson&logo=npm&style=flat-square)](https://www.npmjs.com/package/@dareharu/ts-config)

Strongly inspired by [@sapphiredev/ts-config](https://github.com/sapphiredev/utilities/tree/main/packages/ts-config).

</div>

---

<details>
  <summary>Table of Contents</summary>

  -  [Installation](#🚀-installation)
  -  [Usage](#🌟-usage)
      -  [Config without decorators](#config-without-decorators)
  -  [Meta](#🔗-meta)
      -  [Contributing](#contributing)
      -  [License](#license)

</details>

## 🚀 Installation

> **Note** In the following example commands we use `npm install` to fit best suited to the basic environment, feel free to replace `npm install` with your package manager of choice (yarn, pnpm or whatever).

```sh
npm install --save-dev @dareharu/ts-config
```

## 🌟 Usage

You can use `@dareharu/ts-config` base [`tsconfig.json`](tsconfig.json) by extending it in yours:

```json
{
  "extends": "@dareharu/ts-config"
}
```

This TypeScript config is set up in such a way that it will suite nearly all projects, you may extend this to include your own configuration options as well.

Following is a copy of this config file for easy viewing:

```json
{
  "compileOnSave": true,
  "compilerOptions": {
    "allowUnreachableCode": false,
    "allowUnusedLabels": false,
    "alwaysStrict": true,
    "declaration": true,
    "declarationMap": true,
    "emitDecoratorMetadata": true,
    "esModuleInterop": true,
    "experimentalDecorators": true,
    "forceConsistentCasingInFileNames": true,
    "importHelpers": true,
    "incremental": true,
    "isolatedModules": true,
    "lib": ["ESNext"],
    "module": "NodeNext",
    "moduleResolution": "Node",
    "newLine": "lf",
    "noEmitHelpers": true,
    "noFallthroughCasesInSwitch": true,
    "noImplicitOverride": true,
    "noImplicitReturns": true,
    "noPropertyAccessFromIndexSignature": true,
    "noUncheckedIndexedAccess": true,
    "noUnusedLocals": true,
    "noUnusedParameters": true,
    "preserveConstEnums": true,
    "pretty": true,
    "removeComments": false,
    "resolveJsonModule": true,
    "sourceMap": true,
    "strict": true,
    "target": "ES2020",
    "useDefineForClassFields": true
  }
}
```

### Config without decorators

You can use `@dareharu/ts-config`'s [`without-decorators.json`](without-decorators.json) by extending it in yours:

```json
{
  "extends": "@dareharu/ts-config/without-decorators"
}
```

This TypeScript extends everything from the base config, but disables decorator support.

Following is a copy of this config file for easy viewing:

```json
{
  "extends": "./tsconfig.json",
  "compilerOptions": {
    "emitDecoratorMetadata": false,
    "experimentalDecorators": false
  }
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
