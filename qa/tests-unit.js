var motto = require('../lib/motto.js');
var expect = require('chai').expect;

suite('Motto cookie tests', function(){

    test('getMotto() should return a motto', function(){
        expect(typeof motto.getMotto() === 'string');
    });

});
