var ex = require('../js/reviewWithNode')


let arr1 = [1, 2, 2, 2, 3, 4, 5, 4, 6];
let arrObj = [1, "jessica", "testing", 2];

console.log("even array ", ex.EvenExp(arr1));
console.log("ood array ", ex.OddExp(arr1));
console.log("div by 4 array ", ex.Div4Exp(arr1));
console.log("sum of array ", ex.SumExp(arr1));
console.log("unique array ", ex.Unique(arr1));
console.log("transfrom object ", ex.TransformObj(arrObj));