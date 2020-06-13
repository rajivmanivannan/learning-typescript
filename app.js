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
function add(n1, n2, showResult, phrase) {
    // if (typeof n1 !== 'number' || typeof n2 !== 'number') {
    //   throw new Error('Incorrect input!');
    // }
    var result = n1 + n2;
    if (showResult) {
        console.log(phrase + result);
    }
    else {
        return result;
    }
}
var number1 = 5; // 5.0
var number2 = 2.8;
var printResult = true;
var resultPhrase = 'Result is: ';
add(number1, number2, printResult, resultPhrase);
// In TypeScript, you work with types like string or number.
// Important: It is string and number(etc.), NOT String, Number etc.
// The core primitive types in TypeScript are all lowercase!
// 4. object   { age: 30 }   Any JavaScript object, more specific types(type of object) are possible.
// const person: {
//   name: string;
//   age: number;
// } = {
var person = {
    name: 'Jack',
    age: 30,
    hobbies: ['Sports', 'Cooking'] // Array
};
console.log(person.name);
// 5. Array  [1,2,3]   Any JavaScript array, type can be flexible or strict (regarding the element types)
var favoriteActivities;
favoriteActivities = ['Sports'];
console.log(person.name);
for (var _i = 0, _a = person.hobbies; _i < _a.length; _i++) {
    var hobby = _a[_i];
    console.log(hobby.toUpperCase());
    // console.log(hobby.map()); // !!! ERROR !!!
}
//c6. Tuple  [1,2]   Added by TypeScript Fixed Length Array
var person1 = {
    name: 'Maximilian',
    age: 30,
    hobbies: ['Sports', 'Cooking'],
    role: [2, 'author'] // Tuple
};
// person1.role.push('admin');
// person1.role[1] = 10;
// person1.role = [0, 'admin', 'user'];
// 7. Enum     enum { NEW, OLD }    Added by TypeScript: Automatically enumerated global constant identifiers 
var Role;
(function (Role) {
    Role["ADMIN"] = "ADMIN";
    Role[Role["READ_ONLY"] = 100] = "READ_ONLY";
    Role["AUTHOR"] = "AUTHOR";
})(Role || (Role = {}));
;
var person2 = {
    name: 'Maximilian',
    age: 30,
    hobbies: ['Sports', 'Cooking'],
    role: Role.ADMIN
};
if (person2.role === Role.AUTHOR) {
    console.log('is author');
}
// 8. Any *    Any kind of value, no specific type assignment
var activities;
activities = "hello";
activities = 1;
console.log(activities);
