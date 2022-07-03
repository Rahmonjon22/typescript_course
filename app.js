// how typescript can make everything more accurate by signing each object 
//** Objects in Typescript */
// const person: {
//     name: string;
//     age: number;
//     nickname: string;
// } = {
//     name: 'Rahmonjon',
//     age: 30,
//     nickname: 'Jon'
// };
// console.log(person.nickname);
//** Arrays in Typescript */
// const person = {
//     name: 'Rahmonjon',
//     age: 30,
//     nickname: 'Jon',
//     hobbies: ['Sports', 'Cooking']
// };
// // let favouriteActivities: any[];
// let favouriteActivities: string[];
// favouriteActivities= ['Sports'];
// console.log(person.hobbies);
// for( const hobby of person.hobbies) {
//     console.log(hobby.toUpperCase());
//    // console.log(hobby.map()); it works with arrays in Javascript
// }
//** Tuple in Typescript */
// fixed length
// const person: {
//     name: string;
//     age: number;
//     nickname: string;
//     hobbies: string[];
//     role: [number, string];
// } = {
//     name: 'Rahmonjon',
//     age: 30,
//     nickname: 'Jon',
//     hobbies: ['Sports', 'Cooking'], // array with typescript
//     role: [2, 'author'] // array with tuple, first element is numeric and second element is string
// };
// person.role.push('admin');
// // person.role[1] = 10;
// // person.role = [0, 'admin', 'user']
// let favouriteActivities: string[];
// favouriteActivities= ['Sports'];
// console.log(person.role);
//** Enum in Typescript */
// const ADMIN = 0; // strings
// const READ_ONLY = 1;
// const AUTHER = 2;
// const person = {
//     name: 'Rahmonjon',
//     age: 30,
//     nickname: 'Jon',
//     hobbies: ['Sports', 'Cooking'],
//     role: ADMIN
// };
// if (person.role === ADMIN) {
//     console.log('is admin')
// }
var Role;
(function (Role) {
    Role[Role["ADMIN"] = 0] = "ADMIN";
    Role[Role["READ_ONLY"] = 1] = "READ_ONLY";
    Role[Role["AUTHER"] = 2] = "AUTHER";
})(Role || (Role = {}));
;
var person = {
    name: 'Rahmonjon',
    age: 30,
    hobbies: ['Sports', 'Cooking'],
    role: Role.ADMIN
};
var favouriteActivities;
favouriteActivities = ['Sports'];
console.log(person.name);
for (var _i = 0, _a = person.hobbies; _i < _a.length; _i++) {
    var hobby = _a[_i];
    console.log(hobby.toUpperCase);
}
if (person.role === Role.AUTHER) {
    console.log('is auther');
}
