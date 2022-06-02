//Sample Comments

// function main() {//var x;
//     console.log("x1 is:" + x);//undefined? x is declared but not yet assigned,
//     //there is local varaible with same name.
//     x = 20;
//     console.log("x2 is:" + x);//20? assign local variable
//     if (x > 0) {
//         var x = 30;//
//         console.log("x3 is:" + x);//30?local variable is reassigned.
//     }
//     console.log("x4 is:" + x);//30 (209) var is function scope, so you can read it out of block
//     var x = 40;
//     var f = function (x) {
//         console.log("x5 is:" + x);//50 x is parameter, x is called with 50(217)
//     };
//     f(50);
//     console.log("x6 is:" + x);//40 (213)local variable is assigned 40,
// }
// main();
// console.log("x7 is:" + x);//10 (213, 209) local declaration of x inside the function.

// 1.
let grapes = "green";

function fruits() {
    return function (message) {
        return grapes;
    };
}

console.log(fruits()()); //prints green : fruits()() calls annonymous function of fruits and "grapes" is defined globally

// 2.
let x = 10;

function globalVar() {
    return function () {
        return x;
    };
}

x = 20;

let fn = globalVar();

console.log(fn()); //prints 20 : x is set to 20 before calling fn() function

// 3.
function sport(message) {
    message = "Hi";
    return function (message) {
        return message;
    };
}

let sportFn = sport("Hello");

console.log(sportFn()); //retuns undefined: "message" is parameter for return function, but no parameter is passed

// // 4.
function test(x) {
    x = 10;
    x++;
    console.log(x);
    return function () {
        return x++;
    };
}
// returns 11 and 11: 2 is passed as parameter but reassigned to 10 as x is local variable, then it is incremented and set to 11,
// further in return function x is post incremented hence it returns 11  
console.log(test(2)());

// // 5.
function car() {
    let color = "white";
    function seat() {
        let color = "brown";
        console.log(color); //___________
    }
    console.log(color); //___________  White
}

car("black"); // only white will be printed, because seat function is not called.

// 6.
function department() {
    let numberOfDepartments = 5;
    console.log(numberOfDepartments); //prints 5
    function software() {
        let language = "javascript";
        console.log(language);
    }

    console.log(language); // language is not defined
}

department(); //first 5 is printed then undefined is printed as language is not defined

// // 7.
function department(language) {
    let numberOfDepartments = 5;
    console.log(numberOfDepartments); //prints 5
    function software() {
        let language = "javascript";
        console.log(language);
    }

    console.log(language); //prints "java"
}

department("java"); // first 5 is printed as numberOfDepartments is set t0 5 locally and as "java" is sent as parameter in language, it prints "java"
