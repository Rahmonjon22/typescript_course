//** Functions return Types && Void */
function add(n1, n2) {
    return n1 + n2;
}
//  //** Void function, it does not necessarly be there  */
// function printResult(num: number): void {
//     console.log('Result: ' + num);
// }
// printResult(add(5, 12));
// console.log(printResult(add(5, 12)));
//** underfined function, it does not necessarly be there  */
//  function printResult(num: number): undefined {
//     console.log('Result: ' + num);
//     return;
// }
// printResult(add(5, 12));
// Function Types allows us to use specific which type of function wheter it is parameter or callbacks
function printResult(num) {
    console.log('Result: ' + num);
}
function addAndHandle(n1, n2, callback) {
    var result = n1 + n2;
    callback(result);
}
printResult(add(5, 12));
var combineValues;
// let combineValues: Function;
combineValues = add;
// combineValues= printResult; function has to be function types so that we dont run it problem
// combineValues = 6; that is only caught in browser. therefore it has to be function
console.log(combineValues(8, 8));
addAndHandle(10, 20, function (result) {
    console.log(result); // callback here and typescript knows it is number
    return result;
}); // expected result : 30 
