/////////////////////////////////////////////////////////////////////////////////
///Initialising variables
/////////////////////////////////////////////////////////////////////////////////

const { debug } = require("console");

//1.1
const number1 = 1;
console.log(number1);
const number2 = 2;
console.log(number2);
const number3 = 3;
console.log(number3);
console.log("");

//1.2
const word1 = "word";
console.log(word1);
const word2 = "also word";
console.log(word2);
const word3 = "maybe not a word";
console.log(word3);
console.log("");

//1.3
const numberSet1 = [1, 2, 3];
console.log(numberSet1);
const numberSet2 = [4, 5, 6];
console.log(numberSet2);
const numberSet3 = [7, 8, 9];
console.log(numberSet3);
console.log("");

//1.4
const wordSet1 = ["word", "set"];
console.log(wordSet1);
const wordSet2 = ["also", "a", "word", "set"];
console.log(wordSet2);
const wordSet3 = ["actually", "not", "a", "word", "set"];
console.log(wordSet3);
console.log("");
console.log("");
console.log("");



/////////////////////////////////////////////////////////////////////////////////
///Actions with variables
/////////////////////////////////////////////////////////////////////////////////

//2.1
const numberSum1 = number1 + number2 + number3;
console.log(numberSum1);
console.log("");

//2.2
const wordSum1 = word1 + " " + word2 + " " + word3;
console.log(wordSum1);
console.log("");

//2.3
const numberSum2 = numberSet1[0] + numberSet1[1] - numberSet1[2] + 
    numberSet2[0] - numberSet2[1] + numberSet2[2] - 
    numberSet3[0] + numberSet3[1] - numberSet3[2];
console.log(numberSum2);
console.log("");

//2.4
const wordSum2 = wordSet1[0] + ", " + wordSet1[1] + ", " + 
wordSet2[0] + ", " + wordSet2[1] + ", " + wordSet2[2] + ", " + wordSet2[3] + ", " + 
wordSet3[0] + ", " + wordSet3[1] + ", " + wordSet3[2] + ", " + wordSet3[3] + ", " + wordSet3[4] + ".";
console.log(wordSum2);
console.log("");
console.log("");
console.log("");



/////////////////////////////////////////////////////////////////////////////////
///Comparing variables
/////////////////////////////////////////////////////////////////////////////////

//3.1
//a
if (number1 > number2)
{
    if (number1 > number3)
        console.log(number1);
    else
        console.log(number3);
}
else
{
    if (number2 > number3)
        console.log(number2);
    else
        console.log(number3);
}

//b
if (number1 < number2)
{
    if (number1 < number3)
        console.log(number1);
    else
        console.log(number3);
}
else
{
    if (number2 < number3)
        console.log(number2);
    else
        console.log(number3);
}

//c
if (number1 == number2)
    console.log("tomato");
else
console.log("try again");

//d
if (number2 != number3)
    console.log("tomato");
else
    console.log("try again");

//e
if (number1 >= number2)
    console.log(number1);
if (number2 >= number1)
    console.log(number2);
//yes, a second if statment, because both numbers can satisfy a "which one is EQUAL TO or more than"

//f
if (number2 >= number3)
console.log(number1);
if (number3 >= number2)
console.log(number2);
console.log("");

//3.2
console.log(word1.length);
console.log(word2.length);
console.log(word3.length);
console.log("");

//3.3
if (word1.length > word2.length)
{
    if (word1.length > word3.length)
        console.log(number1);
    else
        console.log(word3.length);
}
else
{
    if (word2.length > word3.length)
        console.log(word2.length);
    else
        console.log(word3.length);
}
console.log("...etc. The rest is basically just pressing ctrl+c and ctrl+v");
console.log("");

//3.4
console.log(wordSet1.length);
console.log(wordSet2.length);
console.log(wordSet3.length);
console.log("");

//3.5
if (wordSet1.length < wordSet2.length)
    console.log(wordSet1.length);
else
    console.log(wordSet2.length);
//the condition is less, because I'm testing single-line if statement stuff
console.log("...etc. Onwards and upwards!");
console.log("");
console.log("");
console.log("");



/////////////////////////////////////////////////////////////////////////////////
///Use of the for loop
/////////////////////////////////////////////////////////////////////////////////

//4.1
//a
let numberSum3 = 0;
for (let i = 0; i < 0; i++)
    numberSum3 = numberSum3 + i;
console.log(numberSum3);

//b
let numberSum4 = 0;
for (let i = 0; i < 5; i++)
    numberSum4 = numberSum4 + i;
console.log(numberSum4);

//c
let numberSum5 = 0;
for (let i = 0; i < 101; i++)
    numberSum5 = numberSum5 + i;
console.log(numberSum5);

//d
let numberSum6 = 0;
for (let i = 574; i < 816; i++)
    numberSum6 = numberSum6 + i;
console.log(numberSum6);

//e
let numberSum7 = 0;
for (let i = -50; i < 51; i++)
    numberSum7 = numberSum7 + i;
console.log(numberSum7);

//f
let numberSum8 = 0;
for (let i = -70; i < 31; i++)
    numberSum8 = numberSum8 + i;
console.log(numberSum8);
console.log("");

//4.2
let reverseWord = "";
for (let i = 0; i < word1.length; i++)
    reverseWord = reverseWord + word1.charAt(word1.length - i - 1);
console.log(reverseWord);
console.log("");

//4.3
//a
let divisiblesBy3_1 = 0;
let divisiblesBy5_1 = 0;
let divisiblesBy7_1 = 0;

for (let i = 0; i < 12; i++)
{
    if( !(i % 3))
        divisiblesBy3_1++;
}
console.log("In the set 0 - 11 (inc), there are " + divisiblesBy3_1 + " numbers divisible by 3");

for (let i = 0; i < 12; i++)
{
    if( !(i % 5))
        divisiblesBy5_1++;
}
console.log("In the set 0 - 11 (inc), there are " + divisiblesBy5_1 + " numbers divisible by 5");

for (let i = 0; i < 12; i++)
{
    if( !(i % 7))
        divisiblesBy7_1++;
}
console.log("In the set 0 - 11 (inc), there are " + divisiblesBy7_1 + " numbers divisible by 7");
console.log("===");

//b
let divisiblesBy3_2 = 0;
let divisiblesBy5_2 = 0;
let divisiblesBy7_2 = 0;

for (let i = 8; i < 32; i++)
{
    if( !(i % 3))
        divisiblesBy3_2++;
}
console.log("In the set 8 - 31 (inc), there are " + divisiblesBy3_2 + " numbers divisible by 3");

for (let i = 8; i < 32; i++)
{
    if( !(i % 5))
        divisiblesBy5_2++;
}
console.log("In the set 8 - 31 (inc), there are " + divisiblesBy5_2 + " numbers divisible by 5");

for (let i = 8; i < 32; i++)
{
    if( !(i % 7))
        divisiblesBy7_2++;
}
console.log("In the set 8 - 31 (inc), there are " + divisiblesBy7_2 + " numbers divisible by 7");
console.log("===");

//c
let divisiblesBy3_3 = 0;
let divisiblesBy5_3 = 0;
let divisiblesBy7_3 = 0;

for (let i = -18; i < 19; i++)
{
    if( !(i % 3))
        divisiblesBy3_3++;
}
console.log("In the set -18 - 18 (inc), there are " + divisiblesBy3_3 + " numbers divisible by 3");

for (let i = -18; i < 19; i++)
{
    if( !(i % 5))
        divisiblesBy5_3++;
}
console.log("In the set -18 - 18 (inc), there are " + divisiblesBy5_3 + " numbers divisible by 5");

for (let i = -18; i < 19; i++)
{
    if( !(i % 7))
        divisiblesBy7_3++;
}
console.log("In the set -18 - 18 (inc), there are " + divisiblesBy7_3 + " numbers divisible by 7");
console.log("");
console.log("");
console.log("");



/////////////////////////////////////////////////////////////////////////////////
///Functions
/////////////////////////////////////////////////////////////////////////////////

//0
function isActuallyANumber(n)
{
    return (typeof n === "number" && n * 0 === 0);
}

//1
function emptyFunction()
{
    return false;
}
console.log(emptyFunction());
console.log("");

//2
function multiplication(n1, n2)
{
    result = n1 * n2;
    return result;
}
console.log( multiplication(number1, number2) );
console.log( multiplication(number3, number2) );
console.log( multiplication(number1, number3) );
console.log("");

//3
function numberOfDigits(n)
{
    if (!isActuallyANumber(n))
        return "Invalid data type";
    
    let nLength = 0;
    let nS = n.toString();

    for (let i = 0; i < nS.length; i++)
    {
        if (nS[i] * 0 == "0")
            nLength++;
    }
    return nLength;
}
console.log(numberOfDigits(5));
console.log(numberOfDigits(781));
console.log(numberOfDigits(37060123456));
console.log(numberOfDigits(true));
console.log(numberOfDigits("asd"));
console.log(numberOfDigits(NaN));
console.log(numberOfDigits(Infinity));
console.log(numberOfDigits(3.14));
console.log(numberOfDigits(-50));
console.log(numberOfDigits(0.000000000000001)); //out of scope of this task. Solve if we feel like
console.log(numberOfDigits(1000000000000000));
console.log("");

//4
function largestOf(n)
{
    if (!(Array.isArray(n)))
        return "Input has to be an array";
    if (n.length == 0)
        return "The array cannot be empty";

    let largestN = -Infinity;
    for (let i = 0; i < n.length; i++)
    {
        if (isActuallyANumber(n))
            continue;
        if (largestN < n[i])
            largestN = n[i];
    }
    if (largestN === -Infinity)
        return "Error";
    return largestN;
}
console.log( largestOf( [1] ) );
console.log( largestOf( [1, 2, 3] ) );
console.log( largestOf( [-5, 78, 14, 0, 18] ) );
console.log( largestOf( [69, 69, 69, 69, 66] ) );
console.log( largestOf( [-1, -2, -3, -4, -5, -6, -7, -8] ) );
console.log( largestOf( "tomato" ) );
console.log( largestOf( [] ) );
console.log( largestOf( ['x'] ) );
console.log( largestOf( ['x', 'x', -3, -4, -5, -6, -7, -8] ) );
console.log("");

//5
function pickOutLetters(string1, n)
{
    if (typeof string1 != "string")
        return "First variable must be a string";
    if (string1.length < 1 || string1.length > 100)
        return "First variable has invalid length";
    if (!isActuallyANumber(n))
        return "Second variable must be a number";
    if (n < 1)
        return "Second variable must be greater than 0";
    if (n > string1.length)
        return "Second variable must be less than the length of first variable";

    let shorterString = "";

    for (let i = 0; i < string1.length; i++)
    {
        if ( (i+1) % n == 0)
            shorterString = shorterString + string1.charAt(i);
    }
    return shorterString;
}
console.log( pickOutLetters("abcdefg", 2) );
console.log( pickOutLetters("abcdefghijkl", 3) );
console.log( pickOutLetters("abc", 0) );
console.log( pickOutLetters("abc", 4) );
console.log( pickOutLetters(1561, 2) );
console.log("");

//6
function division(n1, n2)
{
    if (!isActuallyANumber(n1))
        return "The first variable must be a number";
    if (!isActuallyANumber(n2))
        return "The second variable must be a number";
    if (n2 === 0)
        return "The second variable must not be a zero";

    let result = n1 / n2;
    return result;
}

console.log( division(10, 5) );
console.log( division(-10, 4) );
console.log( division(8, 0) );
console.log( division("abc", 5) );
console.log( division("5", 5) );
console.log( division(NaN, 6) );
console.log( division(-8, false) );
console.log( division(-8, Infinity) );