const input = require('readline-sync');

// var data = [];

// var names;







// for(let i = 0 ;i <= 4; i++)

// {

//     names = input.question("Enter the firstname ")

//     data.push(names)



// }


//ascending

// var temp="" ;

   

 
// for(let i=0;i<data.length;i++)

// {

//     for(let j=0;j<data.length-i-1;j++)

//     {

//             if(data[j]>data[j+1])

//             {

//                 temp=data[j];

//                 data[j]=data[j+1];

//                 data[j+1]=temp;

//             }

//     }



// }

// console.log(data)





// Descending

// for(let i=0;i<data.length;i++)

// {

//     for(let j=0;j<data.length-i-1;j++)

//     {

//             if(data[j]<data[j+1])

//             {

//                 temp=data[j];

//                 data[j]=data[j+1];

//                 data[j+1]=temp;

//             }

//     }



// }

// console.log(data)




//lenghth

// console.log("Printing names length: ")

// data.forEach((item)=>{

//     process.stdout.write(`${item.length} `)

//     console.log()

// })



// split the name for each element



// console.log("Splitting names")

// data.forEach((i)=> {

//     var new_data = i.split(' ')

//     new_data.forEach((item)=> {

//         process.stdout.write(`${item}, `)

//     })



// })














// duplicate elements

var data = [];
for(let i=0;i<=2;i++)
{
    namedata = input.question("enter name : ");
    data.push(namedata);
}
console.log(data);

let flag = 1;
var dupelements=[];

for (let i = 0; i < data.length; i++) 
{
     for (let j = i+1; j < data.length; j++) 
    {
        
            if(data[i] == data[j])
            {
                
                flag=1;
                dupelements.forEach(e=>{
                    if(e == data[i])
                    {
                        flag = 0;
                    }
                    
                })
                if(flag){
                    dupelements.push(data[i]);
                }
            }
    }
}  
console.log(dupelements);

      

             









