function arabicToRomanNumeral(arabicNumber){
    var romanNumeralConversion = '';
    for(var i = 1; i <= arabicNumber; i++) {
        if(i % 4 !== 0 && arabicNumber <= 3){
            romanNumeralConversion += 'I'
        }
        if(i % 5 === 0){
            romanNumeralConversion += 'V'
        }
    }
    return romanNumeralConversion;
}