dataTypes: function(input){
      if (typeof input === 'string') {
        return input.length;
      } 
      if (input === null || input === undefined) {
        return "no value";
      } 
      if (typeof input === 'boolean') {
        return input;
      } 
      if (typeof input === 'number' && input < 100) {
        return "less than 100";
      } 
      if (typeof input === 'number' && input == 100) {
        return "equal to 100";
      } 
      if (typeof input === 'number' && input > 100) {
        return "more than 100";
      } 
      if(input instanceof Array) {
        if (input[2] != 'object'){
          return input[2];
        } else {
          return undefined;
        }
      }

      if(typeof input === 'function'){ 
        return 'called callback';
      }

    }