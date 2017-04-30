// function arabicToRomanNumeral(arabicNumber){
//     var romanNumeralArray = [];
//     for(var i = 1; i <= arabicNumber; i++) {
//         var initialArrayLength = romanNumeralArray.length;
//         if(i % 100 === 0 && i % 500 !== 0){
//             romanNumeralArray.splice(initialArrayLength - 6, initialArrayLength - 1)
//         } else if(romanNumeralArray.slice(initialArrayLength - 6, initialArrayLength).toString().replace(/,/g , "") === "LXXXIX"){
//             romanNumeralArray.splice(initialArrayLength - 6, initialArrayLength - 1);
//             romanNumeralArray.push('C');
//         } else if(i % 50 === 0 && i % 100 !== 0){
//             romanNumeralArray.splice(initialArrayLength - 2, 2);
//             romanNumeralArray.splice(romanNumeralArray.length - 2, 1);
//         } else if(romanNumeralArray.slice(initialArrayLength - 5, initialArrayLength).toString().replace(/,/g , "") === "XXXIX"){
//             romanNumeralArray.splice(initialArrayLength - 3, 3);
//             romanNumeralArray.splice(romanNumeralArray.length - 2, 1);
//             romanNumeralArray.push('L');
//         } else if(i % 10 === 0){
//             romanNumeralArray.splice(initialArrayLength - 2, 1);
//         } else if(i % 10 === 9){
//             romanNumeralArray.splice(initialArrayLength - 2, 2);
//             romanNumeralArray.splice(romanNumeralArray.length - 2, 1);
//             romanNumeralArray.push('X');
//         } else if(i % 5 === 0 && i % 10 !== 0){
//             romanNumeralArray.splice(initialArrayLength - 2, 1);
//         } else if(romanNumeralArray.slice(initialArrayLength - 3, initialArrayLength).toString().replace(/,/g , "") === "III") {
//             romanNumeralArray.splice(initialArrayLength - 2, 2);
//             romanNumeralArray.push('V');
//         } else {
//             romanNumeralArray.push('I');
//         }
//     }
//     return [].concat.apply([], romanNumeralArray).toString().replace(/,/g , "");
// }

function arabicToRomanNumeral(num) {
    var romanSymbols = {M:1000,CM:900,D:500,CD:400,C:100,XC:90,L:50,XL:40,X:10,IX:9,V:5,IV:4,I:1},
        romanConversion = '';
    for (var i in romanSymbols ) {
        while ( num >= romanSymbols[i] ) {
            romanConversion += i;
            num -= romanSymbols[i];
        }
    }
    return romanConversion;
}