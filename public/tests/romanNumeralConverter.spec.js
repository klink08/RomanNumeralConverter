describe('romanNumeralConverter',function() {
    describe('should convert the first 3 arabic numbers to Is: ', function() {
        it('1 to I', function() {
            expect(arabicToRomanNumeral(1)).toBe('I');
        });

        it('2 to II', function() {
            expect(arabicToRomanNumeral(2)).toBe('II');
        });

        it('3 to III', function() {
            expect(arabicToRomanNumeral(3)).toBe('III');
        });
    });

    describe('should use subtraction to convert ', function() {
        it('4 to IV', function() {
            expect(arabicToRomanNumeral(4)).toBe('IV');
        });

        it('9 to IX', function(){
            expect(arabicToRomanNumeral(9)).toBe('IX');
        });

        it('40 to XL', function() {
            expect(arabicToRomanNumeral(40)).toBe('XL');
        });
    });

    describe('should convert the arabic number ', function() {
        it('5 to V', function() {
           expect(arabicToRomanNumeral(5)).toBe('V');
        });

        it('10 to X', function() {
            expect(arabicToRomanNumeral(10)).toBe('X');
        });

        it('39 to XXX', function() {
            expect(arabicToRomanNumeral(39)).toBe('XXXIX');
        });

        it('49 to XLIX', function() {
            expect(arabicToRomanNumeral(49)).toBe('XLIX');
        })
    })
});
