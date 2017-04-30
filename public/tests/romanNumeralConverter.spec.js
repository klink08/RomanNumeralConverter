describe('arabicToRomanNumeral',function() {
    describe('story test cases', function() {
        it('1 to I', function() {
            expect(arabicToRomanNumeral(1)).toBe('I');
        });

        it('3 to III', function() {
            expect(arabicToRomanNumeral(3)).toBe('III');
        });

        it('9 to IX', function(){
            expect(arabicToRomanNumeral(9)).toBe('IX');
        });

        it('1066 to MLXVI', function(){
            expect(arabicToRomanNumeral(1066)).toBe('MLXVI');
        });

        it('1989 to MCMLXXXIX', function(){
            expect(arabicToRomanNumeral(1989)).toBe('MCMLXXXIX');
        });
    });

    describe('should convert the first 3 arabic numbers to Is: ', function() {
        it('2 to II', function() {
            expect(arabicToRomanNumeral(2)).toBe('II');
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

        it('90 to XC', function() {
            expect(arabicToRomanNumeral(90)).toBe('XC');
        });

        it('89 to XC', function() {
            expect(arabicToRomanNumeral(124)).toBe('CXXIV');
        })
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
        });

        it('50 to L', function() {
            expect(arabicToRomanNumeral(50)).toBe('L');
        });

        it('78 to LXXVIII', function() {
            expect(arabicToRomanNumeral(78)).toBe('LXXVIII');
        });
    })
});

describe('romanNumeralToArabic', function(){
    describe('story test cases', function() {
        it('should convert I to 1', function() {
            expect(romanNumeralToArabic('I')).toBe(1);
        });

        it('should convert III to 3', function(){
            expect(romanNumeralToArabic('III')).toBe(3);
        });

        it('should convert IX to 9', function() {
            expect(romanNumeralToArabic('IX')).toBe(9);
        });

        it('should convert MLXVI to 1066', function() {
            expect(romanNumeralToArabic('MLXVI')).toBe(1066);
        });

        it('should convert MCMLXXXIX to 1989', function() {
            expect(romanNumeralToArabic('MCMLXXXIX')).toBe(1989);
        });
    });

   it('should convert I to 1', function() {
       expect(romanNumeralToArabic('II')).toBe(2);
   });

   it('should convert V to 5', function() {
       expect(romanNumeralToArabic('V')).toBe(5);
   });

    it('should convert X to 10', function() {
        expect(romanNumeralToArabic('X')).toBe(10);
    });

    it('should convert L to 50', function() {
        expect(romanNumeralToArabic('L')).toBe(50);
    });

    it('should convert C to 100', function() {
        expect(romanNumeralToArabic('C')).toBe(100);
    });

    it('should convert D to 500', function() {
        expect(romanNumeralToArabic('D')).toBe(500);
    });

    it('should convert M to 1000', function() {
        expect(romanNumeralToArabic('M')).toBe(1000);
    });
});
