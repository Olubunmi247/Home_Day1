
'use strict'
var chai = require('chai');
var expect = chai.expect;
var myApp = require('../apps/primesFunction.js');

describe("Return an array of prime numbers between 0 and the integer value provided: ", function(){
	describe("Return an error message if integer value provided is not compatible: ", function(){
		it('should return error message for -5 since it is negative', function(){
			expect(myApp.getPrimes(-5)).to.equal("Invalid input");
		});
		it('should return error message for -9 since it is negative', function(){
			expect(myApp.getPrimes(-9)).to.equal("Invalid input");
		});
		it('should return error message for -600 since it is negative', function(){
			expect(myApp.getPrimes(-20)).to.equal("Invalid input");
		});
		it('should return error message for -600 since it is negative', function(){
			expect(myApp.getPrimes(0)).to.equal("Invalid input");
		});
	});	
	describe("Return an empty array if integer value provided is 0 or 1 ", function(){
		it('should return [] for 1', function(){
			expect(myApp.getPrimes(1)).to.deep.equal([]);
		});

	});

	describe("Return an array of prime numbers if integer value provided is provided: ", function(){
		it('should return the list of prime numbers between 0 and number(inclusive)', function(){
			expect(myApp.getPrimes(9)).to.deep.equal([2, 3, 5,7]);
		});
		it('should return the list of prime numbers between 0 and number(inclusive)', function(){
			expect(myApp.getPrimes(20)).to.deep.equal([2, 3, 5, 7, 11, 13, 17, 19]);
		});
		it('should return the list of prime numbers between 0 and number (inclusive)', function(){
			expect(myApp.getPrimes(31)).to.deep.equal([2, 3, 5, 7, 11, 13, 17, 19, 23, 29, 31]);
		});
		it('should return the list of prime numbers between 0 and number(inclusive)', function(){
			expect(myApp.getPrimes(40)).to.deep.equal([2, 3, 5, 7, 11, 13, 17, 19, 23, 29, 31, 37]);
		});
		it('should return the list of prime numbers between 0 and number (inclusive)', function(){
			expect(myApp.getPrimes(56)).to.deep.equal([2, 3, 5, 7, 11, 13, 17, 19, 23, 29, 31, 37, 41, 43, 47, 53]);
		});

	});
});

