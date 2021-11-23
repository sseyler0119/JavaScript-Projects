// add two numbers, return result to element with matching ID
function add () {
    var sum = 2 + 2;
    document.getElementById("Add").innerHTML = "2 + 2 = " + sum;
}

// subtract two numbers, return result to element with matching ID
function subtraction () {
    var result = 5 - 2;
    document.getElementById("Subtract").innerHTML = "5 - 2 = " + result;
}

// multiply two numbers, return result to element with matching ID
function multiply () {
    var result = 5 * 2;
    document.getElementById("Multiply").innerHTML = "5 * 2 = " + result;
}

// divide two numbers, return result to element with matching ID
function divide () {
    var result = 4 / 2;
    document.getElementById("Divide").innerHTML = "4 / 2 = " + result;
}

// calculate result of multiple operations, return result to element with matching ID
function calculate () {
    var result = (3 + 2) * 10 / 3 - 6;
    document.getElementById("Math").innerHTML = " (3 + 2) * 10 / 3 - 6 = " + result;
}

// divide two numbers, return only the remainder to element with matching ID
function modulus () {
    var result = 30 % 8;
    document.getElementById("Mod").innerHTML = " The remainder of 30 / 8 = " + result;
}

// return number with opposite sign to element with matching ID
function negationOp () {
    var x = 9;
    document.getElementById("Negation").innerHTML = "The opposite of 9 is " + (-x);
}

// increment number, return result to element with matching ID
function increment () {
    var x = 9;
    x++;
    document.getElementById("Increment").innerHTML = "Increment 9 by 1: " + x;
}

// decrement number, return result to element with matching ID
function decrement() {
    var x = 9;
    x--;
    document.getElementById("Decrement").innerHTML = "Decrement 9 by 1: " + x;
}

// generate random number between 0 and 100, return result to element with matching ID
function randomNum() {
    var x = (Math.random() * 100); // get random number
    document.getElementById("Random").innerHTML = x;

}

// generate random integer between 0 and 100, return result to element with matching ID
function getInteger () {
    var x =Math.trunc((Math.random() * 100)); // get random number, truncate result
    document.getElementById("Integer").innerHTML = x;
}