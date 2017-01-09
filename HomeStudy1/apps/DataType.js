'use strict'

module.exports = {
	dataTypes: function(input){
		var dataType = input.constructor;
		
		if (dataType === Array){
			return input[2];
		}

		else if (dataType === String){
			return input.length;
		}
		else if (dataType === Boolean){
			return input;
		}
		else if (dataType === Number){
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
		else if (dataType === Function){
			return input(true);
		}
		

		if(typeof(input) === 'undefined' || dataType === null){
			return 'no value'
		}
		
	}
	
}