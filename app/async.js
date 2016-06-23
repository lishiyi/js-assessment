exports = typeof window === 'undefined' ? global : window;

exports.asyncAnswers = {
  async: function(value) {
    	var promise = new Promise(function(resolve, reject){
    		resolve(value);
    	}); 
    	return promise; 
  },

  manipulateRemoteData: function(url) {

       	var names = []; 	
    	var promise = new Promise(function(resolve, reject) {

	    	$.getJSON(url, function(data){
	    		$.each(data["people"], function (key, value) {
	    			names.push(value);
	    		});
	    		
	    	});
	    	resolve(names.sort());
    	});

    	return promise; 
  }
};
