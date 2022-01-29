// const person: {
//     name: string;
//     age: number;
// } = {
//     name:"Abel",
//     age: 32
// }

// ************

// However, typescript inferes the object type and its elements types. Hence, it is enough doing:

// const person = {
//     name:"abel",
//     age:32
// }

// *************

// when we have tuples, the inference doesn't really work well and we have to declare the object like:

// const person:{
//     name:string;
//     age:number;
//     hobbies:string[];
//     role:[number,string]
// } = {
//     name: "Abel",
//     age: 32,
//     hobbies: ['Coding','Cooking'], // this is an array of strings
//     role: [2,'author'] // tuple type
// }

// ************

// Now we make use of enum type. Hover over it to see.

enum Role {ADMIN = 1,READ_ONLY, AUTHOR};

const person = {
        name: "Abel",
        age: 32,
        hobbies: ['Coding','Cooking'], // this is an array of strings
        role: Role.ADMIN
    }

// person.role.push('admin'); //push is not catch as an error in TS
// person.role[1] = 10;


let favouriteActivities: string[];
favouriteActivities = ['Sports']

console.log(person);
console.log(person.name);

for (const hobby of person.hobbies){
    console.log(hobby.toUpperCase());
    // console.log(hobby.map()) // gives an error. hover over map
}

console.log(person.role);

if (person.role === Role.ADMIN) console.log('is adming')