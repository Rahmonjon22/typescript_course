//** Union Types in typescript */
function combine(input1, input2, resultConversion // instead of using string 
) {
    var result;
    if (typeof input1 === 'number' && typeof input2 === 'number' || resultConversion === 'as-number') {
        result = +input1 + +input2; // for each converted into number
    }
    else {
        result = input1.toString() + input2.toString();
    }
    return result;
    // if (resultConversion === 'as-number') {
    //      return +result;
    // } else {
    //     return result.toString();
    // }
}
var combineAges = combine(30, 26, 'as-number');
console.log(combineAges);
var combinedStringAges = combine('30', '26', 'as-number');
console.log(combinedStringAges);
var combineNames = combine('Max', 'Anna', 'as-text');
console.log(combineNames);
