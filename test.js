//
// Comprehensive tests for @acastellon/utils
//
const assert = require('assert');
const utils = require('./utils')();

console.log('Running utils tests...');

// existProperty
assert.strictEqual(utils.existProperty('foo'), true);
assert.strictEqual(utils.existProperty(123), true);
assert.strictEqual(utils.existProperty(''), false);
assert.strictEqual(utils.existProperty(null), false);
assert.strictEqual(utils.existProperty(undefined), false);
console.log('existProperty OK');

// isNotNull / isEmpty / isNotEmpty
assert.strictEqual(utils.isNotNull('bar'), true);
assert.strictEqual(utils.isEmpty(''), true);
assert.strictEqual(utils.isNotEmpty({a:1}), true);
assert.strictEqual(utils.isNotEmpty([]), false); // empty object check
assert.strictEqual(utils.isNotEmpty(0), true); // number 0 is not empty per impl
console.log('null/empty checks OK');

// undefined
assert.strictEqual(utils.isUndefined(undefined), true);
assert.strictEqual(utils.isNotUndefined(null), true);
console.log('undefined checks OK');

// isAnObject
assert.strictEqual(utils.isAnObject({}), true);
assert.strictEqual(utils.isAnObject([]), true); // typeof object
assert.strictEqual(utils.isAnObject('str'), false);
console.log('isAnObject OK');

// SQL injection
assert.strictEqual(utils.isAnySQLInjection('DROP TABLE users'), true);
assert.strictEqual(utils.isAnySQLInjection('select * from x'), false);
assert.strictEqual(utils.isAnySQLInjection(123), false); // non-string safe
console.log('SQL injection OK');

console.log('All utils tests passed!');
