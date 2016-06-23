exports = typeof window === 'undefined' ? global : window;

exports.arraysAnswers = {
  indexOf: function(arr, item) {
      return arr.indexOf(item);
  },

  sum: function(arr) {
      var result = 0;
      for(var i = 0; i < arr.length; i++){
          result += arr[i];
      }
      return result;
  },

  remove: function(arr, item) {
      var result = [];
      for(var i = 0; i < arr.length; i++){
          if(arr[i] != item){
              result.push(arr[i]); 
          }
      }
      return result;
  },

  removeWithoutCopy: function(arr, item) {
      while(arr.indexOf(item) !== -1) {
         arr.splice(arr.indexOf(item), 1);
      }
      return arr;
  },

  append: function(arr, item) {
      arr.push(item);
      return arr;
  },

  truncate: function(arr) {
      arr.pop();
      return arr;
  },

  prepend: function(arr, item) {
      arr.unshift(item);
      return arr;
  },

  curtail: function(arr) {
      arr.shift();
      return arr;
  },

  concat: function(arr1, arr2) {
      return arr1.concat(arr2);
  },

  insert: function(arr, item, index) {
      arr.splice(index, 0, item);
      return arr;
  },

  count: function(arr, item) {
      var count = 0;
      for (var i = 0; i < arr.length; i++) {
          if(arr[i] == item){
              count++;
          }
      }
      return count;
  },

  duplicates: function(arr) {
      var set = new Set();
      var result = new Set();
      for (var i = 0; i < arr.length; i++) {
          if(set.has(arr[i])){
            result.add(arr[i]);
          }
          set.add(arr[i]);
      }
      var resultA = [];
      for (let item of result) {
          resultA.push(item);
      }
      return resultA;
  },

  square: function(arr) {
      var result = []
      for (var i = 0; i < arr.length; i++) {
          result.push(arr[i] * arr[i]);
      }
      return result;
  },

  findAllOccurrences: function(arr, target) {
      var result = [];
      for (var i = 0; i < arr.length; i++) {
          if(arr[i] == target){
              result.push(i);
          }
      }
      return result;
  }
};
