exports = typeof window === 'undefined' ? global : window;

exports.objectsAnswers = {
  alterContext: function(fn, obj) {
  	  return fn.call(obj);
  },

  alterObjects: function(constructor, greeting) {
      constructor.prototype.greeting = greeting;
  },

  iterate: function(obj) {
  	  var ownNames = Object.getOwnPropertyNames(obj);
	  var result = [];

	  for(var i = 0; i < ownNames.length; i++){

    	  result.push(ownNames[i] + ': ' + obj[ownNames[i]]);
	  }
			
      return result;
  }
};
