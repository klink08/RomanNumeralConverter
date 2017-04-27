// var romanNumeralConverter = require('romanNumeralConverter');

describe('romanNumeralConverter',function(){
    it('should convert a 1 to I', function(){
        var result = arabicToRoamnNumeral(1);
        expect(result).toBe('I');
    });
});