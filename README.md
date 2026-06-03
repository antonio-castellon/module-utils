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

- `existProperty(prop)`
- `isNotNull(data)`
- `isEmpty(data)`
- `isNotEmpty(data)`
- `isNotUndefined(data)`
- `isUndefined(data)`
- `isAnObject(data)`
- `isAnySQLInjection(data)`

## License

MIT
