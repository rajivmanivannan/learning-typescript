// TypeScript - is superset of JavaScript
// A language building up of JavaScript
// Adds new features and advantages to JavaScript
// Browsers can't execute TypeScript. TypeScript compiles to JavaScript to execute it.

/**
 * TypeScript is statically typed and, therefore, all checks are performed at compile time.
 * The compiler checks all variables and expressions against their types, and removes all type
 * information when it converts the code into valid JavaScript.
 */

//Advantages Of TypeScript

// 1.Types!
// 2.Next - gen JavaScript Features(compiled down for older Browsers)
// 3.Non - JavaScript Featured like Interfaces or Generics
// 4.Meta - Programmming Features like Decorators
// 5.Rich Configuration Option
// 6.Modern tooling that helps even in non - TypeScript Projects

// ----------------------------------------------------------------------------------------------------------------------- //
//Core Types

// 1.number   1,3.14,-10       All number no differentiation between float or decimal
// 2.string  "Hi",'Hi',`Hi`    All text value
// 3.boolean  true,false
// To be continued ... 
function add(n1: number, n2: number, showResult: boolean, phrase: string) {
    // if (typeof n1 !== 'number' || typeof n2 !== 'number') {
    //   throw new Error('Incorrect input!');
    // }
    const result = n1 + n2;
    if (showResult) {
        console.log(phrase + result);
    } else {
        return result;
    }
}

const number1 = 5; // 5.0
const number2 = 2.8;
const printResult = true;
const resultPhrase = 'Result is: ';

add(number1, number2, printResult, resultPhrase);


// In TypeScript, you work with types like string or number.
// Important: It is string and number(etc.), NOT String, Number etc.
// The core primitive types in TypeScript are all lowercase!

// 4. object   { age: 30 }   Any JavaScript object, more specific types(type of object) are possible.

// const person: {
//   name: string;
//   age: number;
// } = {
const person = {
    name: 'Jack',
    age: 30,
    hobbies: ['Sports', 'Cooking'] // Array
};

console.log(person.name);

// 5. Array  [1,2,3]   Any JavaScript array, type can be flexible or strict (regarding the element types)

let favoriteActivities: string[];
favoriteActivities = ['Sports'];

console.log(person.name);

for (const hobby of person.hobbies) {
    console.log(hobby.toUpperCase());
    // console.log(hobby.map()); // !!! ERROR !!!
}

//c6. Tuple  [1,2]   Added by TypeScript Fixed Length Array

const person1: {
    name: string;
    age: number;
    hobbies: string[];
    role: [number, string];
} = {
    name: 'Maximilian',
    age: 30,
    hobbies: ['Sports', 'Cooking'],
    role: [2, 'author'] // Tuple
};

// person1.role.push('admin');
// person1.role[1] = 10;

// person1.role = [0, 'admin', 'user'];

// 7. Enum     enum { NEW, OLD }    Added by TypeScript: Automatically enumerated global constant identifiers 

enum Role { ADMIN = 'ADMIN', READ_ONLY = 100, AUTHOR = 'AUTHOR' };

const person2 = {
    name: 'Maximilian',
    age: 30,
    hobbies: ['Sports', 'Cooking'],
    role: Role.ADMIN
};

if (person2.role === Role.AUTHOR) {
    console.log('is author');
}

// 8. Any *    Any kind of value, no specific type assignment

let activities: any;

activities = "hello";

activities = 1;

console.log(activities);

// 9. Union Types |  combine and use any number of types to accept as Input

function combine(input1: number | string, input2: number | string) {
    let result;
    if (typeof input1 === 'number' && typeof input2 === 'number') {
        result = input1 + input2;
    } else {
        result = input1.toString() + input2.toString();
    }
    return result;
}

const combinedAges = combine(26, 27);
console.log(combinedAges);

const combinedNames = combine('Alice', 'Bob');
console.log(combinedNames);


// 10. Literal Types

function combine1(
    input1: number | string,
    input2: number | string,
    resultConversion: 'as-number' | 'as-text' // Literal
) {
    let result;
    if (typeof input1 === 'number' && typeof input2 === 'number' || resultConversion === 'as-number') {
        result = +input1 + +input2;
    } else {
        result = input1.toString() + input2.toString();
    }
    return result;
    // if (resultConversion === 'as-number') {
    //   return +result;
    // } else {
    //   return result.toString();
    // }
}

const combinedAges1 = combine1(30, 26, 'as-number');
console.log(combinedAges);

const combinedStringAges = combine1('30', '26', 'as-number');
console.log(combinedStringAges);

const combinedNames1 = combine1('Max', 'Anna', 'as-text');
console.log(combinedNames);


