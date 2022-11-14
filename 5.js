const readline = require('readline-sync');
var array1 = [];
for(let i=0;i<10;i++)
{
    if(i%2 != 0)
    {
        var flightFare = parseFloat(readline.question("enter flight fares : "))
        array1.push(flightFare);
    }
    else
    {
        array1.push("");
    }
}
console.log(array1);