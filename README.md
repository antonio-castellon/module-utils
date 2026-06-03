# @acastellon/utils

Minor common utils for javascript.

## Install

```bash
npm install @acastellon/utils
```

## Usage

```js
const utils = require('@acastellon/utils')();

if (utils.isNotEmpty(someValue)) { ... }
if (utils.isAnySQLInjection(userInput)) { throw new Error('injection'); }
console.log( utils.existProperty(foo) );
```

## API

All functions are attached to the returned model.

### `existProperty(prop: any): boolean`
Returns true if prop is non-null, defined, and either a non-empty string or a number.

### `isNotNull(data: any): boolean`
Alias-ish for defined + not empty.

### `isEmpty(data: any): boolean`
Negation of isNotEmpty.

### `isNotEmpty(data: any): boolean`
True for non-undefined/non-null values that are either non-empty objects (keys) or have string length >0.

### `isNotUndefined(data: any): boolean`

### `isUndefined(data: any): boolean`

### `isAnObject(data: any): boolean`
`typeof === 'object'` (arrays and null-ish are true here).

### `isAnySQLInjection(data: any): boolean`
Checks for presence of UPDATE/DROP/DELETE/INSERT/CREATE (only on strings).

## License

MIT
