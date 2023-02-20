---
# Name of template. (Required)
# Rule: You must indicate the scope of this template within `name`
# (e.g.) [/packages] Create a new package
#        [/apps/web] Create a new React component
#        [/.scaffdog] Create a new Scaffdog template
name:
  '[/packages] Create a new package'

  # The directory as the starting point of the output destination. (Required)
root: 'packages'

# Directory starting from root and being a destination candidate. You can use glob syntax. (Required)
output: '.'

# Directory to exclude from candidate output destination. You can use glob syntax.
ignore: []

# Message to display when accepting input. You can write the field's descrition in its value.
questions:
  name: 'Please enter the name of a new package. (Will automatically converted to kebab-case)'
  license:
    message: 'What do you prefer as the license for the new package?'
    choices:
      - 'MIT'
      - 'GPL'
      - 'BSD'
      - 'UNLICENSED'
    initial: 'UNLICENSED'
---

# `{{ inputs.name | kebab }}/package.json`

```json
{
  "name": "{{ inputs.name | kebab }}",
  "version": "0.0.0",
  "main": "./index.ts",
  "types": "./index.ts",
  "license": "{{ inputs.license }}",
  "scripts": {
    "lint": "eslint *.ts*"
  },
  "devDependencies": {
    "eslint": "^7.32.0",
    "eslint-config-custom": "workspace:*",
    "tsconfig": "workspace:*",
    "typescript": "^4.5.2"
  }
}
```

# `{{ inputs.name | kebab }}/index.ts`

```ts
export const utils = {
  foo: 'bar',
};
```

# `{{ inputs.name | kebab }}/.eslintrc.js`

```js
/** @type {import('eslint').Linter.Config} */
module.exports = {
  root: true,
  extends: ['custom'],
  parserOptions: {
    tsconfigRootDir: __dirname,
    project: ['./tsconfig.json'],
  },
};
```

# `{{ inputs.name | kebab }}/tsconfig.json`

```json
{
  "extends": "tsconfig/node.json",
  "include": ["."],
  "exclude": ["dist", "build", "node_modules"]
}
```
