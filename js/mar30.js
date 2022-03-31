//1
function numberMorality(n)
{
    if (n > 0)
        return "Good";
    else if (n === 0)
        return "Neutral";
    else
        return "Bad";
}
console.log(numberMorality(-1));
console.log(numberMorality(0));
console.log(numberMorality(1));
console.log("");

//2
function trafficLights(n)
{
    if (n === 1)
        return "Go";
    else if (n === 2)
        return "Wait";
    else if (n === 3)
        return "Stop";
    else
        return "That's not a traffic light colour";
}
console.log(trafficLights(1));
console.log(trafficLights(2));
console.log(trafficLights(3));
console.log(trafficLights(4));
console.log("");


//3
function bookStorage(d, k, n)
{
    if ((d * n) < k)
        return "The books won't fit";
    else
        return "The books will fit";
}
console.log(bookStorage(2, 8, 5));
console.log(bookStorage(3, 18, 5));
console.log("");

//4
function equalise(a, b)
{
    if (a > b)
    {
        a--;
        b++
    }
    if (b > a)
    {
        a++;
        b--;
    }
    const result = "a = " + a + " b = " + b;
    return result;
}
console.log(equalise(5, 6));
console.log("");

//5
function iceCream(c, p)
{
    const k = c / p;
    const m = c % p;
    const result = "Creams of ice: " + Math.floor(k) + "  Leftover money: " + m;
    return result;
}
console.log(iceCream(50, 20));
console.log("");

//6
function matches(n)
{
    if (n % 3)
        return "No triangles are to be found in this forsaken realm";
    else
        return "A triangle!";
}
console.log(matches(4));
console.log(matches(6));
console.log("");

//7
function month(n)
{
    switch (n)
    {
        case 1:
            return 31;
            break;
        case 2:
            return 28;
            break;
        case 3:
            return 31;
            break;
        case 4:
            return 30;
            break;
        case 5:
            return 31;
            break;
        case 6:
            return 30;
            break;
        case 7:
            return 31;
            break;
        case 8:
            return 31;
            break;
        case 9:
            return 30;
            break;
        case 10:
            return 31;
            break;
        case 11:
            return 30;
            break;
        case 12:
            return 31;
            break;
        default:
            return "I'm not aware of that kind of callendar";
            break;
    }
}
console.log(month(5));
console.log(month(2));
console.log("");

//8
function room(k)
{
    if (k < 1 || k > 6)
        return "That's not a 6-sided die result";
    if (k % 2)
        return "Junior";
    else
        return "Senior";
}
console.log(room(1));
console.log(room(6));
console.log("");

//9
function olympics(m)
{
    if (m < 1896)
        return "Olympics hadn't been invented yet. What's a 'Greece'?";
    if (m % 4)
        return "Not an olympic year";
    else
        return (m - 1892) / 4;
}
console.log(olympics(1904));
console.log(olympics(2005));
console.log("");

//10
function isPeterLate(v1, m1, m2, v, m)
{
    m1 += m2;
    while (m1 > 59)
    {
       m1 -= 60;
       v1++;
    }
    if (v1 > v)
        return "LATE!"
    if (v1 < v)
        return "On time!"
    if (v1 === v)
    {
        if (m1 > m)
            return "LATE!"
        else
            return "On time!"
    }
}
console.log(isPeterLate(8, 29, 43, 9, 5));
console.log(isPeterLate(8, 29, 23, 9, 5));