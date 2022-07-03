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
var person = {
    name: 'Rahmonjon',
    age: 30,
    nickname: 'Jon',
    hobbies: ['Sports', 'Cooking']
};
// let favouriteActivities: any[];
var favouriteActivities;
favouriteActivities = ['Sports'];
console.log(person.hobbies);
for (var _i = 0, _a = person.hobbies; _i < _a.length; _i++) {
    var hobby = _a[_i];
    console.log(hobby.toUpperCase());
    // console.log(hobby.map()); it works with arrays in Javascript
}
