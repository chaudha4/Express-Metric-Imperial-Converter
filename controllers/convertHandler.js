/*
*
*
*       Complete the handler logic below
*       
*       
*/

function ConvertHandler() {
  
  this.getNum = function(input) {
    
    let matchStr = /^[\d./]+(?=\D)/g;  // Look for 3.5 or 3.1/2 followed by all text like "Kg" "gal"
    let result = input.match(matchStr);
    
    if (result == null) {
      return 1;
    }
    
    return result[0];
  };
  
  this.getUnit = function(input) {
    var result;
    
    return result;
  };
  
  this.getReturnUnit = function(initUnit) {
    var result;
    
    return result;
  };

  this.spellOutUnit = function(unit) {
    var result;
    
    return result;
  };
  
  this.convert = function(initNum, initUnit) {
    const galToL = 3.78541;
    const lbsToKg = 0.453592;
    const miToKm = 1.60934;
    var result;
    
    return result;
  };
  
  this.getString = function(initNum, initUnit, returnNum, returnUnit) {
    var result;
    
    return result;
  };
  
}

module.exports = ConvertHandler;
