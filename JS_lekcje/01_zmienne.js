//var - zła praktyka od ES6

//let
let name = "Marianna";
let firstName = "Matylda";



//const
const second_Name = "PAweł"

console.log(name);
console.log(firstName);
name = "Maria";
console.log(name);
//second_Name = "Pioter"

console.log(second_Name);

//Typy:
//String
name = "Alicja"

//Number 
let wiek = 19
let wiek2 = 33

console.log(name+wiek)
console.log(typeof(name+wiek))
console.log(wiek + wiek2)
console.log(typeof(wiek + wiek2))

//boolean
const isTrue = true;
const ifFalse = false;

//Undefined
const undef = undefined
console.log(typeof(undef))

//Array
let cars= ["Honda", "bmw", "daihatsu"]

//Object
const bicycle = {
    model: "romet",
    year : "2021",
    color: "blue"
}

console.log(bicycle)

console.log(bicycle.color)

bicycle.color = "green"
console.log(bicycle.color)