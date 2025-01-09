<div align="center">

# @dareharu/biome-config

### Shareable Biome configuration for [Dareharu] projects.

[![License: MIT](https://img.shields.io/badge/License-MIT-blue.svg)](https://raw.githubusercontent.com/dareharu/biome-config/main/LICENSE)
[![npm bundle size](https://img.shields.io/bundlephobia/min/@dareharu/biome-config?logo=webpack&style=flat-square)](https://bundlephobia.com/result?p=@dareharu/biome-config)
[![npm](https://img.shields.io/npm/v/@dareharu/biome-config?color=crimson&logo=npm&style=flat-square)](https://www.npmjs.com/package/@dareharu/biome-config)

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
npm install --save-dev @dareharu/biome-config
```

## 🌟 Usage

You can use `@dareharu/biome-config` base [`biome.jsonc`](biome.jsonc) by extending it in yours:

```json
{
  "extends": ["@dareharu/biome-config"]
}
```

This Biome config is set up in such a way that it will work for nearly all projects, you may leverage this feature to avoid repeating the same configuration in multiple projects and keep them in sync.

# 🔗 Meta

## Contributing

1. Fork it!
1. Create your feature branch: `git switch -c my-new-feature`
1. Commit your changes: `git commit -am 'Add awesome feature'`
1. Push to the branch: `git push -u origin my-new-feature`
1. Submit a pull request!

## License

Released under the [MIT License](LICENSE).

<!-- link dump -->

[Dareharu]: https://github.com/dareharu
