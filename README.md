# @supercharge/eslint-config
A shareable ESLint config for JavaScript projects.


## Installation

```bash
npm i -D eslint@8 @supercharge/eslint-config
```


### Compatibility
| `eslint` | `@supercharge/eslint-config`            |
| -------- | --------------------------------------- |
| `8.x`    | `1.x`                                   |
| `7.x`    | *not supported*                         |


## Usage
Then extend the `@supercharge` ESLint config. This is a shortcut for `@supercharge/eslint-config` which ESLint automatically resolves:

**`.eslintrc.js`**

```js
module.exports = {
  extends: '@supercharge'
}
```


## Related

- [@supercharge/eslint-config-typescript](https://github.com/supercharge/eslint-config-typescript) - ESLint config for TypeScript projects
