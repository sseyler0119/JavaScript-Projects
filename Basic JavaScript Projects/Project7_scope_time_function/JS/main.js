var PI = 3.14159; // global var

// function that calculates circumference of a circle using local var and global var
function circumference() {
    var circum, r = 2; // declare vars 
    circum = 2*PI*r; // assign value of 2*PI*radius
    // output result to the element whose Id = "Circle"
    document.getElementById("Circle").innerHTML = "The circumference = " + circum; 
}


// function using if statement dependent on time
function getDate() {
    if (new Date().getHours() < 12) // if it is before noon, output reminder to order lunch
    {
        // output result to element whose Id ="Greeting"
        document.getElementById("Greeting").innerHTML = "Remember to order lunch!";
    }
    else // else it is after noon, output reminder to go to gym
    {
        // output result to element whose Id ="Greeting"
        document.getElementById("Greeting").innerHTML = "Now it's time to go to the gym.";
    }
}

// function that returns pass or fail based on score
function grade() {
    var score = 85; // declare var of score, assign value of 85
    if(score > 70) // passing score
    {
        // output result to element whose Id ="Grade"
        document.getElementById("Grade").innerHTML = "You passed.";
    }
    else // failing score
    {
        // output result to element whose Id ="Grade"
        document.getElementById("Grade").innerHTML = "Sorry, you failed.";
    }
}

// function that gets #of remaining cans from user, depending on input, result will 
//      either say to restock or you do not need to restock
function restock() {
    var cans, needMore; // declare vars
    cans = document.getElementById("Beer").value; // assign value to cans where Id matches "Beer"
    if (cans < 6) // value is below 6, time to restock
    {
        needMore = "Time to restock soon"; // assign to var needMore
    }
    else // value is above 6, no need to restock
    {
        needMore = "You do not need to restock."; // assign var to needMore
    }
    // output value of needMore to element where Id = "Stock"
    document.getElementById("Stock").innerHTML = needMore;
}

// function that uses Date().getHours() function to get current time and output
//      a string response based on time of day
function timeFunction() {
    var time = new Date().getHours(); // declar var time, assign value from Date.getHours() function
    var reply; // declar var for string reply
    if(time < 12 == time > 0) // time is less than noon, but greater than midnight
    {
        reply = "It is morning time!";
    }
    else if(time >= 12 == time < 18) // time is between noon and 5:59pm
    {
        reply = "It is afternoon.";
    }
    else // after 6pm
    {
        reply = "It is evenign time.";
    }
    // output result to element whose Id ="TimeOfDay"
    document.getElementById("TimeOfDay").innerHTML = reply;
}

// broken function
function notWorking() {
    var r;//radius, undefined;
    var circum = 2*PI*r; // will return NaN since radius is undefined
    document.getElementById("Broken").innerHTML = circum;
    console.log(circum);
}