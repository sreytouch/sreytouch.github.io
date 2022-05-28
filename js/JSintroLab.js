window.onload = function () {


    /* runs test to see if expected argument is === to value returned by function2test argument */
    function myFunctionTest(expected, found) {
        if (expected === found) {
            return "TEST SUCCEEDED";
        } else {
            return "TEST FAILED.  Expected " + expected + " found " + found;
        }
    }

    /* max returns the maximum of 2 arguments */
    function max(a, b) {
        if (a > b) {
            return a;
        } else {
            return b;
        };
    }
    console.log("Expected output of max(20,10) is 20  " + myFunctionTest(20, max(20, 10)));

    /* max3 takes 3 numbers as arguments and returns the largest */
    function maxOfThree(a, b, c) {
        return max(max(a, b), c);

    }
    console.log("Expected output of maxOfThree(5,4,44) is 44  " + myFunctionTest(44, maxOfThree(5, 4, 44)));
    console.log("Expected output of maxOfThree(55,4,44) is 55  " + myFunctionTest(55, maxOfThree(55, 4, 44)));
    console.log("Expected output of maxOfThree(55,4,44) is 55  " + myFunctionTest(4, maxOfThree(55, 4, 44)));
}