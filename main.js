// step 2 import the fucntion (bring those file into this file))

const getDayOfTheWeek = require("./lab-two").getDayOfTheWeek;
const  makeCalender = require("./lab-two").makeCalender;
const readline = require("readline-sync");


makeCalender();

const year = readline.question("Enter a Year: ");
const month = readline.question("Enter a Month: ");
const date = readline.questionInt("Enter a Date: ");


const getDayOfTheWeekForUserDate = (year,month,date) => {
    console.log(getDayOfTheWeek(year,month,date));
}


getDayOfTheWeekForUserDate(year, month, date);


