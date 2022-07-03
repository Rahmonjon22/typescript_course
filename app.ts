
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

const person = {
    name: 'Rahmonjon',
    age: 30,
    nickname: 'Jon',
    hobbies: ['Sports', 'Cooking']
};
// let favouriteActivities: any[];

let favouriteActivities: string[];
favouriteActivities= ['Sports'];
console.log(person.hobbies);


for( const hobby of person.hobbies) {
    console.log(hobby.toUpperCase());
   // console.log(hobby.map()); it works with arrays in Javascript
}