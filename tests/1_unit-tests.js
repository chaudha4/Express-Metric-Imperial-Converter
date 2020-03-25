/*
*
*
*       FILL IN EACH UNIT TEST BELOW COMPLETELY
*       -----[Keep the tests in the same order!]----
*       (if additional are added, keep them at the very end!)
*/

var chai = require('chai');
var assert = chai.assert;
var ConvertHandler = require('../controllers/convertHandler.js');

var convertHandler = new ConvertHandler();

suite('Unit Tests', function(){
  
  suite('Function convertHandler.getNum(input)', function() {
    
    test('Whole number input', function(done) {
      var input = '32L';
      var result = convertHandler.getNum(input);
      assert.equal(result,32);
      done();
    });
    
    test('Decimal Input', function(done) {
      var input = '32.0L';
      assert.equal(convertHandler.getNum(input),32.0);
      done();
    });
    
    test('Fractional Input', function(done) {
      var input = '64/2L';
      assert.equal(convertHandler.getNum(input),32);
      done();
    });
    
    test('Fractional Input w/ Decimal', function(done) {
      var input = '64.0/2L';
      assert.equal(convertHandler.getNum(input),32.0);
      done();
    });
    
    test('Invalid Input (double fraction)', function(done) {
       var input = '64.0/2L';
      assert.equal(convertHandler.getNum(input),32);
      done();
    });
    
    test('No Numerical Input', function(done) {
      var input = 'd64.0/2L';
      assert.equal(convertHandler.getNum(input), 1);    // Default is 1
      done();
    }); 
    
  });
  
  suite('Function convertHandler.getUnit(input)', function() { 
    
    test('For Each Valid Unit Inputs', function(done) {
      var input = ['gal','l','mi','km','lbs','kg','GAL','L','MI','KM','LBS','KG'];
      input.forEach(function(ele) {
        assert.isNotNull(convertHandler.getUnit(ele), "Test Failed for " + ele);
      });
      done();
    });
    
    test('Unknown Unit Input', function(done) {
      var unknownStr = "abc";
      assert.isNull(convertHandler.getUnit(unknownStr), "Test Failed for " + unknownStr);
      done();
    });  
    
  });
  
  suite('Function convertHandler.getReturnUnit(initUnit)', function() {
    
    test('For Each Valid Unit Inputs', function(done) {
      var input = ['gal','l','mi','km','lbs','kg'];
      var expect = ['l','gal','km','mi','kg','lbs'];
      input.forEach(function(ele, i) {
        assert.equal(convertHandler.getReturnUnit(ele), expect[i]);
      });
      done();
    });
    
  });  
  
  suite('Function convertHandler.spellOutUnit(unit)', function() {
    
    test('For Each Valid Unit Inputs', function(done) {
      //see above example for hint
      var input = ['gal','l','mi','km','lbs','kg'];
      var expect = ['gallons','liters','miles','kilometers','pounds','kilogram'];   
      input.forEach(function(ele, i) {
        assert.equal(convertHandler.spellOutUnit(ele), expect[i]);
      });      
      done();
    });
    
  });
  
  suite('Function convertHandler.convert(num, unit)', function() {
    
    test('Gal to L', function(done) {
      var input = [5, 'gal'];
      var expected = 18.9271;
      assert.approximately(convertHandler.convert(input[0],input[1]),expected,0.1); //0.1 tolerance
      done();
    });
    
    test('L to Gal', function(done) {
      assert.approximately(convertHandler.convert(1,"l"), 0.26417, 0.1); //0.1 tolerance
      done();
    });
    
    test('Mi to Km', function(done) {
      assert.approximately(convertHandler.convert(1,"mi"), 1.6, 0.1); //0.1 tolerance
      done();
    });
    
    test('Km to Mi', function(done) {
      assert.approximately(convertHandler.convert(1,"km"), .62, 0.1); //0.1 tolerance
      done();
    });
    
    test('Lbs to Kg', function(done) {
      assert.approximately(convertHandler.convert(1,"lbs"), .45, 0.1); //0.1 tolerance
      done();      
      //done();
    });
    
    test('Kg to Lbs', function(done) {
      assert.approximately(convertHandler.convert(1,"kg"), 2.2, 0.1); //0.1 tolerance
      done();      
      //done();
    });
    
  });

});