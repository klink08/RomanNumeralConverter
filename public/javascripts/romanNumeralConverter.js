function arabicToRomanNumeral(arabicNumber){
    var romanNumeralArray = [];
    for(var i = 1; i <= arabicNumber; i++) {
        if(i % 5 === 0){
            romanNumeralArray.splice(romanNumeralArray.length - 2, 1);
        } else if(i % 4 === 0){
            romanNumeralArray.splice(romanNumeralArray.length - 1, 1);
            romanNumeralArray.splice(romanNumeralArray.length - 2, 1);
            romanNumeralArray.push('V');
        } else if(i % 4 !== 0){
            romanNumeralArray.push('I')
        }
    }
    return [].concat.apply([], romanNumeralArray).toString().replace(/,/g , "");
}