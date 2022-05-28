// window.onload = function () {

    /* runs test to see if expected argument is === to value returned by function2test argument */
    function myFunctionTest(expected, found) {
        if (expected === found) {
            return "TEST SUCCEEDED";
        } else {
            return "TEST FAILED.  Expected " + expected + " found " + found;
        }
    }

    /* 1. max returns the maximum of 2 arguments */
    function max(a, b) {
        if (a > b) {
            return a;
        } else {
            return b;
        };
    }
    console.log("Expected output of max(20,10) is 20  " + myFunctionTest(20, max(20, 10)));

    /* 2. max3 takes 3 numbers as arguments and returns the largest */
    function maxOfThree(a, b, c) {
        return max(max(a, b), c);

    }
    console.log("Expected output of maxOfThree(5,4,44) is 44  " + myFunctionTest(44, maxOfThree(5, 4, 44)));
    console.log("Expected output of maxOfThree(55,4,44) is 55  " + myFunctionTest(55, maxOfThree(55, 4, 44)));
    console.log("Expected output of maxOfThree(55,4,44) is 55  " + myFunctionTest(4, maxOfThree(55, 4, 44)));

    // 3. isVowel that takes a character
    function isVowel(a, b, c) {
        return true;
    }
    console.log("Expected output of isVowel(5,4,44) is 44  " + myFunctionTest(true, isVowel(5, 4, 44)));

    // 4. sum and a function multiply that sums and multiplies (respectively) all the numbers in an array of numbers
    let arr = [1,2,3,4];
    let su = 0;
    let mu = arr[0];
    function sum(arr) {
        for(let i=0; i<arr.length;i++){
            su += arr[i];
        }
        return su;
    }
    function multiply(arr) {
        for(let i=0; i<arr.length;i++){
            mu *= arr[i];
        }
        return mu;
    }
    console.log("Expected output of sum([1,2,3,4]) is 10  " + myFunctionTest(10, sum(arr)));
    console.log("Expected output of multiply([1,2,3,4]) is 24  " + myFunctionTest(24, multiply(arr)));

    // 5. reverse that computes the reversal of a string.
    let stringRever = "jag testar";
    function reversString(stringRever) {
        let sin = "";
        for (let i = stringRever.length - 1; i >= 0; i--) {
            sin += stringRever[i];
        }
        return sin;
    }
    console.log("Expected output of reverse(jag testar) is ratset gaj  " + myFunctionTest("ratset gaj", reversString(stringRever)));

    // 6. findLongestWord that takes an array of words and returns the length of the longest one.
    function findLongestWord(a, b, c) {
        return true;
    }
    console.log("Expected output of findLongestWord(5,4,44) is 44  " + myFunctionTest(true, findLongestWord(5, 4, 44)));

    // 7. filterLongWords that takes an array of words and an integer i and returns the array of words that are longer than i.
    function filterLongWords(a, b, c) {
        return true;
    }
    console.log("Expected output of filterLongWords(5,4,44) is 44  " + myFunctionTest(true, filterLongWords(5, 4, 44)));

    // 8. isVowel that takes a character
    // function isVowel(a, b, c) {
    //     return true;
    // }
    // console.log("Expected output of isVowel(5,4,44) is 44  " + myFunctionTest(true, isVowel(5, 4, 44)));

// }