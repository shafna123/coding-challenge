
var input = require('readline-sync');

passenger={
    name : ' ',
    total_miles : 0,
    flyer_points : 0
}

passenger.name = (readline.question("enter the name: "));
passenger.total_miles = parseFloat(readline.question("enter the total miles travelled: "));
console.log(passenger.name);

if( passenger.total_miles >= 10000 && passenger.total_miles < 20000)
{
    passenger.flyer_points = 10;
}

else if ( passenger.total_miles >= 20000 && passenger.total_miles < 50000)
{
    passenger.flyer_points = 20;
}

else if( passenger.total_miles >= 50000 && passenger.total_miles < 100000)
{
    passenger.flyer_points = 30;
}

else if( passenger.total_miles > 100000)
{
    passenger.flyer_points = 50;
}

console.log(flyer_points);
console.log(passenger);



