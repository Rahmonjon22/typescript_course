//** Union Types in typescript */

// function combine(input1: number | string, input2: number | string,) {
//     let result;
//     if (typeof input1 === 'number' && typeof input2 === 'number') {
//         result = input1 + input2;
//     } else {
//         result = input1.toString() + input2.toString();
//     }
//     return result;
// }
// const combineAges = combine(30, 26);

// console.log(combineAges);

// const combineNames = combine('Max', 'Anna');
// console.log(combineNames);


//** Literal types in TypeScript */

// function combine(
//     input1: number | string, 
//     input2: number | string,
//     resultConversion : 'as-number' | 'as-text' // instead of using string 
//     ) {
//     let result;
//     if (typeof input1 === 'number' && typeof input2 === 'number' || resultConversion === 'as-number') {
//         result = +input1 + +input2; // for each converted into number
//     } else {
//         result = input1.toString() + input2.toString();
//     }
//     return result;
//     // if (resultConversion === 'as-number') {
//     //      return +result;
//     // } else {
//     //     return result.toString();
//     // }
   
// }
// const combineAges = combine(30, 26, 'as-number');
// console.log(combineAges);
// const combinedStringAges = combine('30', '26', 'as-number');
// console.log(combinedStringAges);

// const combineNames = combine('Max', 'Anna', 'as-text');
// console.log(combineNames);


//**  types Aliases in TypeScript */

type Combinable = number | string;
type ConversionDescriptor = 'as-number' | 'as-text';
function combine(
    input1: Combinable, 
    input2: Combinable,
    resultConversion : ConversionDescriptor // instead of using string 
    ) {
    let result;
    if (typeof input1 === 'number' && typeof input2 === 'number' || resultConversion === 'as-number') {
        result = +input1 + +input2; // for each converted into number
    } else {
        result = input1.toString() + input2.toString();
    }
    return result;
    // if (resultConversion === 'as-number') {
    //      return +result;
    // } else {
    //     return result.toString();
    // }
   
}
const combineAges = combine(30, 26, 'as-number');
console.log(combineAges);
const combinedStringAges = combine('30', '26', 'as-number');
console.log(combinedStringAges);

const combineNames = combine('Max', 'Anna', 'as-text');
console.log(combineNames);