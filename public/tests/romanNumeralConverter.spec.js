// var romanNumeralConverter = require('romanNumeralConverter');

describe('romanNumeralConverter',function() {
    it('should convert 1 to I', function() {
        expect(arabicToRoamnNumeral(1)).toBe('I');
    });

    it('should convert 2 to II', function() {
        expect(arabicToRoamnNumeral(2)).toBe('II');
    });
});