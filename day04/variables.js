//alert("Testing");

var num1 = 10;
var num2 = 30;

var result = num1+num2;

console.log(result);
console.log(typeof(result));

result = "Milena";

console.log(typeof(result));

result = true;
console.log(typeof(result));

//Automatic
num3 = num1;

console.log(num3);


//Var can be declared again;
var carName = "Volvo";
var carName;


//Let
let person = "John Doe",
carName2 = "Volvo",
price = 200;


console.log(`${person} is driving ${carName2} and its price is ${price} biweekly.`);

//You cannot re-declare a variable declared with let or const.
let carName3 = "Volvo";
//let carName3;  //Not allowed


let firstName = "Sadeed";
let lastName = "Ashraf";

fullName  = firstName +  ' ' + lastName;

console.log(`My name is : ${fullName}`);


//Defining a scope
{
    let carName = "BMW";
    console.log(carName);

    carName = "Toyota";
    //let carName ; 
    {
        let carName = "Honda";
        console.log(" Im Driving : "+ carName);
    }


    console.log(" Outside the scope Im Driving : "+ carName);
    
}


//Const

const cars = ["Saab", "Volvo", "BMW"];

console.log(cars);

console.log('First Car in the array is'+ cars[0]);

// Change an element:
cars[0] = "Toyota";

console.log('After updating the first Car in the array is'+ cars[0]);

// Add an element:
cars.push("Audi");

console.log(cars);



//JavaScript Assignment Operators

result = 20;

//result = result + 90;
result += 90;

console.log(result);


result -= 50;

console.log(result);

//JavaScript Comparison Operators
if (result == 60)
    {
console.log("Passed")
    }
    else
    {

        console.log("Failed")
    }




//int result = 50;
//string fullName = "Bob Alan";
//Boolean result = true;



