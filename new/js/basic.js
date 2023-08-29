
/* runs test to see if expected argument is === to value returned by function2test argument */
function myFunctionTest(expected, found) {
    if (expected === found) {
        return "TEST SUCCEEDED";
    } else {
        return "TEST FAILED.  Expected " + expected + " found " + found;
    }
}

/* runs test to see if expected array argument is equal to value returned by function2test argument */
function arrayEquals(a, b) {
    if (Array.isArray(a) &&
        Array.isArray(b) &&
        a.length === b.length &&
        a.every((val, index) => val === b[index])) {
        return "TEST SUCCEEDED - Result array is same as expected.";
    } else {
        return "TEST FAILED.  Expected differs from the provided array.";
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

// 3. Write a function isVowel() that takes a character (i.e. a string of length 1) and returns true if it is a vowel, false otherwise.
function isVowel(char) {
    char = char.toUpperCase();
    if (char === "a" || char === "A")
        return true;
    else if (char === "e" || char === "E")
        return true;
    else if (char === "i" || char === "I")
        return true;
    else if (char === "o" || char === "O")
        return true;
    else if (char === "u" || char === "U")
        return true;
    else
        return false;
}

// 4. Define a function sum() and a function multiply() that sums and multiplies (respectively) all the numbers in an array of numbers. 
// For example, sum([1,2,3,4]) should return 10, and multiply([1,2,3,4]) should return 24.

function sum(numbers) {
    let sum = 0;
    for (let i = 0; i < numbers.length; i++) {
        sum += numbers[i];
    }
    return sum;
}

function multiply(numbers) {
    let multiply = 1;
    for (let i = 0; i < numbers.length; i++) {
        multiply = multiply * numbers[i];
    }
    return multiply;
}

// Define a function reverse() that computes the reversal of a string. For example, reverse("jag testar") should return the string "ratset gaj".
function reverse(word) {
    let reversedWord = "";
    for (let i = word.length - 1; i >= 0; i--) {
        reversedWord += word[i];
    }
    console.log(reversedWord)
    return reversedWord;
}

// Write a function findLongestWord() that takes an array of words and returns the length of the longest one.
function findLongestWord(longestWord) {
    let word = "";
    for (let i = 0; i < longestWord.length; i++) {
        if (word.length < longestWord[i].length) {
            word = longestWord[i];
        }
    }
    return word.length;
}

//Write a function filterLongWords() that takes an array of words and an integer i and returns the array of words that are longer than i.

function filterLongWords(longWords, len) {
    let words = [];
    for (let i = 0; i < longWords.length; i++) {
        if (longWords[i].length > len) {
            words.push(longWords[i]);
        }
    }
    return words;
}

//jsfiddle

const a = [1, 3, 5, 3, 3];

// a) multiply each element by 10; 
function multiplyElements(arrayOfNumbers) {
    const b = arrayOfNumbers.map(function (elem, i, array) {
        return elem * 10;
    })
    return b;
}

// b) return array with all elements equal to 3;
function filterNumber(arrayOfNumbers) {
    const c = a.filter(function (element, index, array) {
        return element === 3;
    })
    return c;
}

// c) return the product of all elements;
function productOfAllElem(arrayOfNumbers) {
    const d = a.reduce(function (prev, element, index, array) {
        return prev * element
    }, 1)
    return d;
}


console.log("Expected output of maxOfThree(5,4,44) is 44  " + myFunctionTest(44, maxOfThree(5, 4, 44)));
console.log("Expected output of maxOfThree(55,4,44) is 55  " + myFunctionTest(55, maxOfThree(55, 4, 44)));

console.log("Expected output of maxOfThree(55,4,44) is 55  " + myFunctionTest(4, maxOfThree(55, 4, 44)));

console.log("Expected output of isVowel(a) is true  " + myFunctionTest(true, isVowel("a")));
console.log("Expected output of isVowel(E) is true  " + myFunctionTest(true, isVowel("E")));
console.log("Expected output of isVowel(b) is false  " + myFunctionTest(false, isVowel("b")));

console.log("Expected output of sum([1,2,3,4]) is 10  " + myFunctionTest(10, sum([1, 2, 3, 4])));
console.log("Expected output of multiply([1,2,3,4]) is 24  " + myFunctionTest(24, multiply([1, 2, 3, 4])));

console.log("Expected output of reverse('jag testar') is 'ratset gaj'  " + myFunctionTest("ratset gaj", reverse("jag testar")));
console.log("Expected output of findLongestWord('ritesh, rajendra, ananda') is 'rajendra'  " + myFunctionTest(8, findLongestWord(["ritesh", "rajendra", " ananda"])));
console.log("Expected output of filterLongWords('ritesh, rajendra, ananda') is 'ritesh, rajendra'  " + arrayEquals(['ritesh', 'rajendra'], filterLongWords(["ritesh", "rajendra", " anan"], 5)));


//jsfiidle
console.log("Expected output of multiplyElements([1, 3, 5, 3, 3]) is [10, 30, 50, 30, 30]  " + arrayEquals([10, 30, 50, 30, 30], multiplyElements(a)));
console.log("Expected output of filterNumber([1, 3, 5, 3, 3]) is [ 3, 3, 3 ] " + arrayEquals([3, 3, 3], filterNumber(a)));
console.log("Expected output of productOfAllElem([1, 3, 5, 3, 3]) is 135 " + myFunctionTest(135, productOfAllElem(a)));

// console.log(productOfAllElem(a));
// console.log(c);
// console.log(d);