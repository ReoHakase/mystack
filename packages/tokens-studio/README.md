# 🎨 Tokens Studio: Sync Destination Package

## How to Configurate Tokens Studio

Add sync provider to Tokens Studio in Figma.

Open `Tokens Studio` window → Open `Settings` → `Sync providers` → `Add new` → `GitHub`

| Field name                                                | Example value                                            | Note                                                                                                 |
| --------------------------------------------------------- | -------------------------------------------------------- | ---------------------------------------------------------------------------------------------------- |
| Name                                                      | `mystack`                                                | Your preferred name for this sync provider.                                                          |
| Personal Access Token                                     | `github_pat_...`                                         | A GitHub API token that has at least `Content`: `Read and write` authorization.                      |
| Repository (owner/repo)                                   | `ReoHakase/mystack`                                      | The name of your destination repository on GitHub.                                                   |
| Branch                                                    | `tokens-studio`                                          | The name of the branch that Tokens Studio will push commits with tokens `.json` data to.             |
| File Path (e.g. tokens.json) or Folder Path (e.g. tokens) | `packages/tokens-studio/src/tokens.json` (Do not change) | The absolute path to the `.json` file(s). For this package, the use of a singular file is mandatory. |

## How to Configurate `token-transformer`

> `token-transformer` converts tokens from Tokens Studio for Figma to something Style Dictionary can read, removing any math operations or aliases, only resulting in raw values.

If your have tokens sets named like below list:

- `core`
- `light` (depends on `core` set)
- `dark` (depends on `core` set)

Set these scripts and `files` arguments to `package.json`.

```json
{
  "files": ["dist/core.json", "dist/light.json", "dist/dark.json"],
  "scripts": {
    "build-core": "pnpx token-transformer src/tokens.json dist/core.json core",
    "build-light": "pnpx token-transformer src/tokens.json dist/light.json core,light core",
    "build-dark": "pnpx token-transformer src/tokens.json dist/dark.json core,dark core",
    "build": "pnpm run build-core && pnpm run build-light && pnpm run build-dark"
  }
}
```

## Usage

Add this package `tokens-studio` to `devDependencies` like:

```json
{
  "name": "web",
  "version": "0.0.0",
  "private": true,
  "scripts": {
    "dev": "next dev",
    "build": "next build",
    ...
  },
  "dependencies": {
    ...
  },
  "devDependencies": {
    ...
    "@storybook/testing-library": "^0.0.13",
    "autoprefixer": "^10.4.13",
    "tokens-studio": "workspace:*",
    "eslint-config-custom-next": "workspace:*",
    "jest-mock": "^29.4.3",
    ...
  }
}
```

And then, load built token files from your config file.

```ts
import * as coreTokens from 'tokens-studio/dist/core.json';
import * as lightTokens from 'tokens-studio/dist/light.json';
import * as darkTokens from 'tokens-studio/dist/dark.json';
```

```ts
const coreTokens = require('tokens-studio/dist/core.json');
const lightTokens = require('tokens-studio/dist/light.json');
const darkTokens = require('tokens-studio/dist/dark.json');
```

## ❗ For More Infomation

[Visit Tokens Studio docs](https://docs.tokens.studio/sync/github)
[Visit an example repository with Tailwind CSS](https://github.com/tokens-studio/plugin-example-tailwindcss)
