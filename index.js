// var listOfTemperatures = ["13c", "23c", "12c", "57f", "69f", "30c"];


// // SRP (Single Responsibility Principle)

// function celsiusToFahrenheit(temp) {  
//   var cToF = Math.round((temp * 9) / 5 + 32);
//   return (`${cToF} degrees fahrenheit`);
// }

// function fahrenheitToCelsius(temp) {
//   var fToC = Math.round((temp - 32) * 5 / 9);
//   console.log(`${fToC} degrees celsius`);
// }

// for (var temp of listOfTemperatures) {
//   var tempAsNum = parseInt(temp);
//   if (temp.endsWith("c")) {
//     var cToFResult = celsiusToFahrenheit(tempAsNum);
//     console.log(cToFResult)
//   } else {
//     var fToCResult = fahrenheitToCelsius(tempAsNum);
//     console.log(fToCResult)
//   }
// }



// 3 ways in Javascript to represent the absense of a value 
// 1) null --> temperaily empty
// 2) undefinded is already set i
// 3) not defined there is no variable
// variable hoisting : it scans all the variable, and brings the variable to the top
    // var firstName = undefinded;
    // console.log(firstName);
    // firstName = "Armaan"
    // terminal --> undefinded
    // hoisting occurs in function as well, as it also pull to the top but it does not get undefind

    // var --> let or var --> const 

// NO Hoisting Happen
// console.log(firstName)
// let firstName = "Jerry"

// No hoisting on const, const if where you can not change the value. 
// always use const and the only time when you shouldnt use const is when you are modifiy the program than you can use the let 


//anonymous function is when there is function



// var hello; // undefinded // null 


// 3rd syntax 



// const abc = function () {
//     return "abc"; 
// };

// const value = abc();

// console.log(value + "efg")



// Arrow function 
    // NO HOISTING 


// const abc = (val) =>  {
//     return "abc"; 
// };

// const value = abc();

// console.log(value + "efg")



// Multidiemsional Array 




// const people = 
// [
// ["Jerry", "James", "Armaan"]

// ["teacher", "student", "Translator"]

// ]

// const firstList = people[0];
// const firstPersonInFirstList = [0];
// console.log(firstPersonInFirstList) // or 

// console.log(people[0][0])



// alrernative arrays  use in the LAB OBJECT alternative to an Array


// const people = {
//     "Armaan" : "Teacher",
//     "James" : "Student",
//     "Michael" : "Translator"
// };



// objects inside of objects 

// const people = {
//     Armaan: {
//         favouriteTvShow: ["The Office", "community"],
//         favouriteProgrammingLanguage: "Javascript",
//         country: "Canada",
//     },
// }

// const countryOfOrigin = people["Armaan"]["country"];

// console.log(countryOfOrigin)

// const newDate = new Date(2022,0,1)

// let newerDate = new Date(2022,0,newDate.getDate()+1);

