function arabicToRomanNumeral(arabicNumber){
    var romanNumeralArray = [];
    for(var i = 1; i <= arabicNumber; i++) {
        if(i % 10 === 0){
            romanNumeralArray.splice(romanNumeralArray.length - 2, 1);
        } else if(i % 10 === 9){
            romanNumeralArray.splice(romanNumeralArray.length - 1, 1);
            romanNumeralArray.splice(romanNumeralArray.length - 1, 1);
            romanNumeralArray.splice(romanNumeralArray.length - 2, 1);
            romanNumeralArray.push('X');
        } else if(i % 5 === 0 && i % 10 !== 0){
            romanNumeralArray.splice(romanNumeralArray.length - 2, 1);
        } else if(romanNumeralArray[romanNumeralArray.length - 1] === 'I' &&
                  romanNumeralArray[romanNumeralArray.length - 2] === 'I' &&
                  romanNumeralArray[romanNumeralArray.length - 3] === 'I') {
            romanNumeralArray.splice(romanNumeralArray.length - 1, 1);
            romanNumeralArray.splice(romanNumeralArray.length - 1, 1);
            romanNumeralArray.push('V');
        } else if(romanNumeralArray[romanNumeralArray.length - 1] !== 'I' ||
            romanNumeralArray[romanNumeralArray.length - 2] !== 'I' ||
            romanNumeralArray[romanNumeralArray.length - 3] !== 'I' ||
            i <= 3) {
            romanNumeralArray.push('I');
        }
    }
    return [].concat.apply([], romanNumeralArray).toString().replace(/,/g , "");
}