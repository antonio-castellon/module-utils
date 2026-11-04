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

### existProperty(prop: any): boolean

Returns true if prop is non-null, defined, and either a non-empty string or a number.

**Example:**

```js
const utils = require('@acastellon/utils')();

console.log(utils.existProperty('hello')); // true
const config = { host: 'localhost' };
console.log(utils.existProperty(config.host)); // true
console.log(utils.existProperty('')); // false
```

### isNotNull(data: any): boolean

Alias-ish for defined + not empty.

**Example:**

```js
const utils = require('@acastellon/utils')();
console.log(utils.isNotNull('value')); // true
console.log(utils.isNotNull(null)); // false
```

### isEmpty(data: any): boolean

Negation of isNotEmpty.

**Example:**

```js
const utils = require('@acastellon/utils')();
console.log(utils.isEmpty('')); // true
console.log(utils.isEmpty({})); // true
```

### isNotEmpty(data: any): boolean

True for non-undefined/non-null values that are either non-empty objects (keys) or have string length >0.

**Example:**

```js
const utils = require('@acastellon/utils')();
console.log(utils.isNotEmpty({a:1})); // true
console.log(utils.isNotEmpty([])); // false
console.log(utils.isNotEmpty(42)); // true
```

### isNotUndefined(data: any): boolean

**Example:**

```js
const utils = require('@acastellon/utils')();
console.log(utils.isNotUndefined(0)); // true
console.log(utils.isNotUndefined(undefined)); // false
```

### isUndefined(data: any): boolean

**Example:**

```js
const utils = require('@acastellon/utils')();
console.log(utils.isUndefined(undefined)); // true
```

### isAnObject(data: any): boolean

`typeof === 'object'` (arrays and null-ish are true here).

**Example:**

```js
const utils = require('@acastellon/utils')();
console.log(utils.isAnObject({})); // true
console.log(utils.isAnObject('string')); // false
```

### isAnySQLInjection(data: any): boolean

Checks for presence of UPDATE/DROP/DELETE/INSERT/CREATE (only on strings).

**Example:**

```js
const utils = require('@acastellon/utils')();
console.log(utils.isAnySQLInjection('DROP TABLE users')); // true
console.log(utils.isAnySQLInjection('SELECT * FROM x')); // false
console.log(utils.isAnySQLInjection(123)); // false
```

## License

MIT

## Notice and Disclaimer

NOTICE AND DISCLAIMER: module-utils does not retrieve external materials at run time; it only works with the local application. This software is provided "AS IS", without warranty of any kind. The author assumes no liability for any losses, damages, liabilities or legal consequences from your use or inability to use this software. Use this software at your own risk.
