describe('romanNumeralConverter',function() {
    describe('should convert the first 3 arabic numbers to Is: ', function(){
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

    describe('should convert multiples of 5 to Vs', function(){
        it('5 to v', function(){
           expect(arabicToRomanNumeral(5)).toBe('V');
        });
    });
});
