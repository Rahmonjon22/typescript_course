//** Unknown in TypeScript */
// let userInput: unknown;

let userInput: any;
let userName: string;

userInput = 5;
userInput = 'Max';
if (typeof userInput === 'string') {
    userName = userInput;
}


//** Never in TypeScript */
function generateError(message: string, code: number): never {
    throw {message: message, errorCode: code}
   // while (true) {}
}
const result = generateError('An error occured!', 500);
console.log(result);