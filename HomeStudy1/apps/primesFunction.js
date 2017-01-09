'use strict'
function isPrime(num) {
    for ( var i = 2; i <= Math.sqrt(num); i++ ) {
        if ( num % i === 0 ) {
            return false;
        }
    }
    return true;
}
module.exports = {
getPrimes: function(n) {
    var primesList = [];
    if(n < 1){
      return "Invalid input";
    }
    else if (n < 2){
      return primesList; 
    }
    
    for ( var i = 2; i <= n; i++ ) {
        if ( isPrime(i) ) {
            primesList.push(i);
        }
    }
    return(primesList); 
}

}