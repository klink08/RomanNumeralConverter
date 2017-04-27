// var romanNumeralConverter = require('romanNumeralConverter');

describe('romanNumeralConverter',function() {
    it('should convert 1 to I', function() {
        expect(arabicToRomanNumeral(1)).toBe('I');
    });

    it('should convert 2 to II', function() {
        expect(arabicToRomanNumeral(2)).toBe('II');
    });

    it('should convert 3 to III', function() {
        expect(arabicToRomanNumeral(3)).toBe('III');
    });
});