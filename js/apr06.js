function getRandomInt(max)
{
    return Math.floor(Math.random() * max);
}

//1
function under100()
{
    let sum = 0;
    while (sum < 100)
    {
        sum += getRandomInt(10);
        console.log(sum);
    }
}
under100();
console.log('');


//2
function div7()
{
    let sum = 0;
    
    do
    {
        sum += getRandomInt(10);
        console.log(sum);
    }
    while (sum % 7)
}
div7();
console.log('');

//3
function book(pages)
{
    let pagesRead = 0;
    let days = 0;
    while (pagesRead < pages)
    {
        days++;
        pagesRead += days;
    }
    console.log("Days: ", days);
    console.log("Avg. pages read /day: ", (pages / days).toFixed(2));
}
book(8);
book(17);
console.log('');

//4
function randTill5 ()
{
    let n;
    while (n != 5)
    {
        n = getRandomInt(10);
        console.log(n);
    }
}
randTill5();
console.log('');

//5
function randTill5or7 ()
{
    let n;
    let cycles = 0;
    while (n != 5 && n != 7)
    {
        n = getRandomInt(10);
        console.log(n);
        cycles++;
    }
    console.log("Total cycles: ", cycles);
}
randTill5or7();