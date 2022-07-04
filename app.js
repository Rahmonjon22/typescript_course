//** Unknown in TypeScript */
// let userInput: unknown;
var userInput;
var userName;
userInput = 5;
userInput = 'Max';
if (typeof userInput === 'string') {
    userName = userInput;
}
//** Never in TypeScript */
function generateError(message, code) {
    throw { message: message, errorCode: code };
}
var result = generateError('An error occured!', 500);
console.log(result);
