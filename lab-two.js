
function isLeapyear (year) {
    if (year % 4 != 0 ) { 
        return false;
    } else if (year % 100 != 0) {
        return true;
    } else if (year % 400 != 0) {
        return false;
    } else {
        return true;
    }

}

isLeapyear()

function getDayOfTheWeek(year, month, date) {

    // Step 1 Look at the last two digits of the year and determine how many 12's can you fit in 89

    const getLastTwoDigit = parseInt(String(year).slice(2)); // output will give you the last two digit
    const lastDigits = Math.floor(getLastTwoDigit/12); // output # of 12's

    // Step 2 look at the remainder of this division 89 - 7 / 12 = 5

    const remainder = Math.floor(getLastTwoDigit % 12); // output 5 

    // Step 3 how many 4's can you fit into the remainder

    const howManyFours = Math.floor(remainder/ 4); 
    // Step 4: Add the days of the months

    // Step 5: Create an object/ array for months
    const months = {
        "January" : 1,
        "February" : 4 ,
        "March" : 4,
        "April" : 0,
        "May" : 2, 
        "June" : 5,
        "July" : 0, 
        "August" : 3,
        "September" : 6,
        "October" : 1,
        "November" : 4,
        "December" : 6
    };

    let code = months[month];
    

    // Step 6: Add all of the above number, then mod by 7: 

        if(isLeapyear(year) && month === "January" || isLeapyear(year) && month === "February") {
            code = code - 1; 
        } 

        if (String(year).slice(0,2) == 16 && String(year).slice(0,2) == 20) {
            code = code + 6; 
        } else if (String(year).slice(0,2) == 17 && String(year).slice(0,2) == 21) {
            code = code + 4
        } else if (String(year).slice(0,2) == 18) {
            code = code + 2
        } 
    

    const sum = (lastDigits +remainder + howManyFours + date + code);

    let result = sum % 7;
    // create an array for the week 
    const week = ["Saturday", "Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday"];

    return (week[result]); 
}

function makeCalender () {
    // month, date, year 
    // 1-1-2019 is a tuesday.

    const months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];

    const year = 2022

    for (const month of months) {
        let monthOutput = (months.indexOf(month)) +1; 

        if (month === "January" || month === "March" || month === "May" || month === "July" || month === "August" || month === "October" || month === "December") {
            for (let date = 1; date <= 31; date++) {
                let weekDay = getDayOfTheWeek(year, month, date);
                console.log(monthOutput + " - " + date + " - " + year + " is a " + weekDay ); 
    
            }
        } else if (month === "February") {
            for (let date = 1; date <= 28; date++) {
                let weekDay = getDayOfTheWeek(year, month, date);
                console.log(monthOutput + " - " + date + " - " + year + " is a " + weekDay ); 
            }
        } else {
            for (let date = 1; date <= 30; date++) {
                let weekDay = getDayOfTheWeek(year, month, date);
                console.log(monthOutput + " - " + date + " - " + year + " is a " + weekDay ); 
            }
        }
    }
}

makeCalender()

// step 1 export the function (make them available in other files... unlock the functions)
module.exports = { getDayOfTheWeek, makeCalender }
