//1 method
function veryEasyFun() {
    return console.log("very nice easy function");
}

veryEasyFun()

//2 method - funkcja strzałkowa

const hardnestFun = () => {
    return console.log("funkcja szczałkowa");
}

hardnestFun()


// SCOPE

//with parameter
const sumParam = (a, b)=> {
    return console.log(a+b); 
}
sumParam(12, 67.93)