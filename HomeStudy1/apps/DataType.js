'use strict'

module.exports = {
	dataTypes: function(input){
		var dataType = typeof input;

		if (dataType === 'object' && input instanceof Array){
			return input[2];
		}
		if (dataType === 'string'){
			return input.length;
		}
		if (dataType === 'boolean'){
			return input;
		}
		if (dataType === 'number'){
			if(input < 100){
				return 'less than 100';
			}
			else if(input === 100){
				return 'equal to 100';
			}
			else{
				return 'more than 100';
			}
		}
		if (dataType === 'function'){
			return input(true);
		}
		if (dataType === 'object' && input === null || dataType === 'undefined') {
        return "no value";
    	}
    }
	
}