var ex = require('../js/reviewWithNode')


let arr1 = [1, 2, 2, 2, 3, 4, 5, 4, 6];
let arrObj = [1, "jessica", "testing", 2];


// ARRAY EXERCISE
console.log("EVEN array ", ex.EvenExp(arr1));
console.log("ODD array ", ex.OddExp(arr1));
console.log("DIV by 4 array ", ex.Div4Exp(arr1));
console.log("SUM of array ", ex.SumExp(arr1));
console.log("Unique array ", ex.Unique(arr1));
console.log("Transform array ", ex.TransformObj(arrObj));