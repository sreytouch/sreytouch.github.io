let arr = [1, 2, 2, 2, 3, 4, 5, 4, 6];
let arrObj = [1, "jessica", "testing", 2];

//1 Array – Find array of Odd/Even/Numbers divisible by 4
function findOdd(arr) {
    let a = [];
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] % 2 != 0) {
            a.push(arr[i]);
        }
    }
    return a;
}
// console.log("--findOdd--", findOdd(arr));

function findEven(arr) {
    let a = [];
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] % 2 == 0) {
            a.push(arr[i]);
        }
    }
    return a;
}
// console.log("--findEven--", findEven(arr));

function findNum(arr) {
    let a = [];
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] % 4 == 0) {
            a.push(arr[i]);
        }
    }
    return a;
}
// console.log("--findNum divisible by 4--", findNum(arr));


//2 Caluculate Sum of all Odd/Even/Numbers divisible by 4
function sum(arr) {
    let a = 0, c = 0, d = 0;
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] % 2 == 0) {
            a += arr[i];
        }
        if (arr[i] % 2 != 0) {
            c += arr[i];
        }
        if (arr[i] % 4 == 0) {
            d += arr[i];
        }
    }
    return "sumEven:" + a + " , sumOdd:" + c + " , sumNum:" + d;
}
// console.log("--sum--", sum(arr));

// //3 . Find Unique Numbers in the Array
function uniqueNumbers(arr) {
    let a = [];
    for (let i = 0; i < arr.length; i++) {
        // for (let j = i + 1; j < arr.length; j++) {
        //     // console.log("--333--", arr[i]);
        //     // console.log("--222--", arr[i]);
        //     // if( arr[i] == arr[j]){
        //     //     console.log(arr[j]);
        //     // }
        // }
        if(a.indexOf(arr[i]) < 0){
            a.push(arr[i]); 
        }
    }
    return a;
}
// console.log("--sum--", uniqueNumbers(arr));




// //4 . Transform Array to print the type of elements in the Array
function transform(arrObj) {
    let transformed = [];
    for (const item of arrObj) {
        let typ = typeof item;
        transformed.push(typ);
    }
    return transformed;
}

// //5 . Destructure Array 


// //6 . Find Index of first odd number - (using array method and also not  using array methods)


// //7. Convert string to array and array to string. don’t use split() and toString()


module.exports = {
    OddExp: findOdd, EvenExp: findEven, Div4Exp: findNum
    , SumExp: sum, Unique: uniqueNumbers, TransformObj: transform
};