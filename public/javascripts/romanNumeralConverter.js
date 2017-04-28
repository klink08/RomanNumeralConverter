function arabicToRomanNumeral(arabicNumber){
    var romanNumeralArray = [];
    for(var i = 1; i <= arabicNumber; i++) {
        var initialArrayLength = romanNumeralArray.length;
        if(i % 50 === 0 && i % 100 !== 0){
            romanNumeralArray.splice(initialArrayLength - 2, 2);
            romanNumeralArray.splice(romanNumeralArray.length - 2, 1);
        } else if(romanNumeralArray.slice(initialArrayLength - 5, initialArrayLength).toString().replace(/,/g , "") === "XXXIX"){
            romanNumeralArray.splice(initialArrayLength - 3, 3);
            romanNumeralArray.splice(romanNumeralArray.length - 2, 1);
            romanNumeralArray.push('L');
        } else if(i % 10 === 0){
            romanNumeralArray.splice(initialArrayLength - 2, 1);
        } else if(i % 10 === 9){
            romanNumeralArray.splice(initialArrayLength - 2, 2);
            romanNumeralArray.splice(romanNumeralArray.length - 2, 1);
            romanNumeralArray.push('X');
        } else if(i % 5 === 0 && i % 10 !== 0){
            romanNumeralArray.splice(initialArrayLength - 2, 1);
        } else if(romanNumeralArray.slice(initialArrayLength - 3, initialArrayLength).toString().replace(/,/g , "") === "III") {
            romanNumeralArray.splice(initialArrayLength - 2, 2);
            romanNumeralArray.push('V');
        } else {
            romanNumeralArray.push('I');
        }
    }
    return [].concat.apply([], romanNumeralArray).toString().replace(/,/g , "");
}