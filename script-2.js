// JS => Non explicitement typé
// 7 oct 2022

// Type de donnée
let age = 4; // number
let moyen = 10.5; // decimal : decimal, float, double
let nom = ""; // string | chaine de caractere
let ampyTaona = true; // boolean
let person = { p1: 2 } // Objet literal
let car = new Error(); // Objet class
let s1 = "5";
let s2 = "5";
let symb1 = Symbol("5")
let symb2 = Symbol("5")

console.log("s1 == s2 : ", s1 == s2) // true
console.log("symb1 == symb2 : ", symb1 == symb2) // false
console.log("symb1 : ", symb1) // false
console.log(typeof s1, typeof symb1) // string, symbol

person.p1 = 34;

// Type variable
let u = undefined;
let n = null;
let f = function(){ // function
    // test
}

console.log("age : ", age, ", type age : ", typeof(age)); // 4 => number
age = undefined;
console.log("age : ", age, ", type age : ", typeof(age)); // undefined => undefined

f();

age = "faly";
console.log("age : ", age, ", type age : ", typeof age); // faly => string
console.log("type typeof : ", typeof(typeof(age))); // string

if( typeof age == "string" ){
    // Block 1
    // age string
}

//
// 5 == "5", 5 === "5"