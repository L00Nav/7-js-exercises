/////////////////////////////////////////////////////////////////////////////////
///Loops
/////////////////////////////////////////////////////////////////////////////////

console.log("=========Loops=========");

//1
for (let i = 0; i < 5; i++)
{
    console.log("Hello");
}
console.log("");

//2
for (let i = 0; i < 5; i++)
{
    console.log(i);
}
console.log("");

//3
for (let i = 0; i < 50; i+=10)
{
    console.log(i);
}
console.log("");

//4
for (let i = 49; i < 54; i++)
{
    console.log(i);
}
console.log("");

//5
for (let i = 0; i < 5; i++)
{
    console.log(Math.floor(Math.random() * 10));
}
console.log("");

//6
for (let i = 1; i < 21; i++)
{
    if (i % 3)
        console.log(i);
}
console.log("");

//7
function multiTable(n)
{
    for (let i = 1; i < 11; i++)
        console.log(n + " x " + i + " = " + (n * i));
    return 0;
}
multiTable(0);
console.log("===");
multiTable(2);
console.log("===");
multiTable(13);
console.log("");

//8
function inToCm(n)
{
    for (let i = 1; i <= n; i++)
        console.log(i + "inch = " + (i*2.54) + "cm");
}
inToCm(8);
console.log("");

//9
function investment(n)
{
    let inv = 100;
    for (let i = 1; i <= n; i++)
    {
        console.log("Year " + i + " Interes: +" + (inv * 0.02).toFixed(2) + " Total: " + (inv * 1.02).toFixed(2));
        inv *= 1.02;
    }
}
investment(20);
console.log("");

//10
for (let i = 1399; i < 2023; i++)
{
    if (i % 100)
    {
        if (!(i % 4))
        {
            console.log(i);
        }
    }
    else
    {
        if (!(i % 400))
        {
            console.log(i);
        }
    }
}
console.log("");
console.log("");



/////////////////////////////////////////////////////////////////////////////////
///Functions
/////////////////////////////////////////////////////////////////////////////////

console.log("=========Functions=========");

//1
function add(a, b)
{
    return a + b;
}
console.log(add(1, 2));
console.log(add(5, 8));
console.log("");

//2
function compare(a, b)
{
    if (a > b)
        return "a is greater";
    else if (a ===b)
        return "they're both equal";
    else
        return "b is greater";
}
console.log(compare(1, 2));
console.log(compare(8, 8));
console.log(compare(8, 5));
console.log("");

//3
function leapYear(y)
{
    if (y % 100)
    {
        if (!(y % 4))
        {
            return "leap";
        }
    }
    else
    {
        if (!(y % 400))
        {
            return "leap";
        }
    }
    return "regular";
}
console.log(leapYear(0));
console.log(leapYear(1940));
console.log(leapYear(1666));
console.log("");

//4
function square(n)
{
    return n*n;
}
console.log(square(1));
console.log(square(4));
console.log(square(5));
console.log("");

//5
function incrementSum(n)
{
    let sum = 0;
    if (n < 2)
        return "That's not an integer that's higher than 1";
    for (let i = 1; i <= n; i++)
    {
        sum += i;
    }
    return sum;
}
console.log(incrementSum(-1));
console.log(incrementSum(4));
console.log(incrementSum(5));
console.log("");

//6
function division(n)
{
    let sum = 0;
    for (let i = 2; i < n; i++)
    {
        if (!(n % i))
            sum++;
    }
    return sum;
}
console.log(division(1));
console.log(division(4));
console.log(division(30));
console.log("");

//7
function textLength(t)
{
    return t + "  " + t.length;
}
console.log(textLength("word"));
console.log(textLength("another word"));
console.log(textLength("yet another word. Amazing"));
console.log("");

//8
function phoneNumber(n)
{
    let number = '"(';
    for (let i = 0; i < 3; i++)
        number += n[i];
    number += ') ';
    for (let i = 3; i < 6; i++)
        number += n[i];
    number += '-';
    for (let i = 6; i < 10; i++)
        number += n[i];
    number += '"';
    return number;
}
console.log(phoneNumber([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]));
console.log("");

//9
function textComparison(a, b)
{
    if (a.length > b.length)
        return "a is longer";
    if (b.length > a.length)
        return "b is longer";
    if (b.length === a.length)
        return "They're equally as long";
    return "Something went wrong";
}
console.log(textComparison("word", "another word"));
console.log(textComparison("another word", "word"));
console.log(textComparison("another word", "another word"));
console.log(textComparison(2, "word"));
console.log("");

//10
function as(t)
{
    let sum = 0;
    for (let i = 0; i < t.length; i++)
    {
        if (t[i] === "a")
            sum++;
    }
    return sum;
}
console.log(as("Can you make a sentence without using the letter a?"));
console.log(as("You thought you just did something here didn't you? Well sorry to burst your bubble but numerous sentences could be constructed without employing the first letter of the English lexicon."));
console.log(as("Heck off"));
console.log("");