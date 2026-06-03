"use strict";

//
// Common minor utilities 
//
// Castellon.CH - 2020-2026 (c)
// Author: Antonio Castellon
//

/**
 * Factory returning a set of common predicate and validation utilities.
 * @returns {object} model with the utility functions
 */
module.exports = function() {

  const model = {};

  const sqlInjectionKeys = ['UPDATE', 'DROP', 'DELETE', 'INSERT', 'CREATE'];

  model.existProperty = existProperty;
  model.isNotNull = isNotNull;
  model.isEmpty = isEmpty;
  model.isNotEmpty = isNotEmpty;
  model.isNotUndefined = isNotUndefined;
  model.isUndefined = isUndefined;
  model.isAnObject = isAnObject;
  model.isAnySQLInjection = isAnySQLInjection;

  /**
   * Checks if a property is non-null, defined, and (if string) non-empty or a number.
   * @param {*} prop
   * @returns {boolean}
   */
  function existProperty(prop) {
    return (prop != null
      && typeof prop != 'undefined'
      && (
        (typeof prop == 'string' && prop.length > 0)
        || (typeof prop == 'number')
      )
    );
  }

  /**
   * @param {*} data
   * @returns {boolean}
   */
  function isNotNull(data){
    return data != null && isNotEmpty(data);
  }

  function isEmpty(data){
    return !isNotEmpty(data);
  }

  /**
   * Non-empty: defined, non-null, and (object with keys or stringified length >0)
   * @param {*} data
   * @returns {boolean}
   */
  function isNotEmpty(data){
    return (isNotUndefined(data)
      && (
        (isAnObject(data) && Object.keys(data).length != 0)
        || (!isAnObject(data) && (('' + data).length > 0))
      )
    );
  }

  function isNotUndefined(data){
    return (typeof data != 'undefined') && (data != null);
  }

  function isUndefined(data){
    return (typeof data == 'undefined');
  }

  function isAnObject(data){
    return (typeof data == 'object');
  }

  /**
   * Detects common SQL keywords (case sensitive per current impl).
   * Safe for non-strings.
   * @param {*} data
   * @returns {boolean}
   */
  function isAnySQLInjection(data){
    if (typeof data != 'string') return false;
    return sqlInjectionKeys.some((el) => data.includes(el));
  }

  return model;
};
