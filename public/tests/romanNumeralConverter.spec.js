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

    describe('should use subtraction', function() {
        it('to convert 4 to IV', function() {
            expect(arabicToRomanNumeral(4)).toBe('IV');
        });

        it('to convert 9 to IX', function(){
            expect(arabicToRomanNumeral(9)).toBe('IX');
        });
    });

    describe('should convert the arabit number ', function() {
        it('5 to V', function() {
           expect(arabicToRomanNumeral(5)).toBe('V');
        });

        it('10 to X', function() {
            expect(arabicToRomanNumeral(10)).toBe('X');
        });

        it('30 to XXX', function() {
            expect(arabicToRomanNumeral(30)).toBe('XXX');
        })

    })
});
