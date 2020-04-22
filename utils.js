"use strict";

//
// Common minor utilities 
//
// Castellon.CH - 2020 (c)
// Author: Antonio Castellon
//

module.exports = function() {

  const model = {};


  //
  // ASSIGNATIONS
  //

  model.existProperty = existProperty;
  model.isNotNull = isNotNull;
  model.isEmpty = isEmpty;
  model.isNotEmpty = isNotEmpty;
  model.isNotUndefined = isNotUndefined;
  model.isUndefined = isUndefined;
  model.isAnObject = isAnObject;
  
  
  // BODY 



		function existProperty(prop) {
			return (  prop != null
				&& typeof prop != 'undefined'
				&& (
					(typeof prop == 'string' && prop.length > 0 )
					||
					(typeof prop == 'number')
					)
			);
		}

		function isNotNull(data){
		  return data != null && isNotEmpty(data);
		}

		function isEmpty(data){
		  return !isNotEmpty(data);
		}

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


	return model;

}
