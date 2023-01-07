// demo concat() method on two strings
function combineStrings() {
    var str1 = "Look, we are using "; // declare str1, assign string
    var str2 = " JavaScript to combine two strings!"; // declare str2, assign string
    var fullSentence = str1.concat(str2); // declare fullSentence, assign concatentation of str1 and str2
    // output result of fullSentence to element where Id="ConcatStr"
    document.getElementById("ConcatStr").innerHTML = fullSentence; 
}

// demo slice() method on a string
function sliceString() {
    var sentence ="We can slice a string with JavaScript"; // declare var sentence and assign string
    var sliceStr = sentence.slice(7,21); // declare var sliceStr and assign sentence slice = 'slice a string'
    // output result of sliceStr to element where Id="SliceStr"
    document.getElementById("SliceStr").innerHTML = sliceStr; 
}

// demo toUpperCase() method on a string
function captitalizeString() {
    var alpha = "a b c d e f g h i j k l m n o p q r s t u v w x y z"; // declare alpha, assign string
    var capAlpha = alpha.toUpperCase(); // capitalize string 'alpha', assign to capAlpha
    // output result of canAlpha to element where Id="CapStr"
    document.getElementById("CapStr").innerHTML = capAlpha;
}

// demo search() method on a string
function searchString() {
    // declare var str, assign string 
    var str = "Not all who wander are lost.";
    // declare position, assign position obtained from search() function
    var position = str.search("w"); 
    // output result of position to element where Id="SearchStr"
    document.getElementById("SearchStr").innerHTML = position;
}

// demo toString() method to return a number as a string
function numToString() {
    var num = 99; // declare num, assign value of 99
    // output num as string where element Id = "NumToStr"
    document.getElementById("NumToStr").innerHTML = num.toString();
}

// demo the toPrecision() method on a string
function stringPrecision(){
    var num = 5467.8489871565487614; // declare num and assign value
    // return value of num where string has 10 places to element where Id="Precision"
    document.getElementById("Precision").innerHTML = num.toPrecision(10);
}

// demo toFixed() method on a string
function truncateString() {
    var PI = 3.141592653589793238462643; // declare PI to 24 decimal places
    // return truncated value of PI to 12 decimal places to element where Id="Fixed"
    document.getElementById("Fixed").innerHTML = PI.toFixed(12);
}

// demo valueOf() method on a string
function valueOfString() {
    var name = 'Serena'; // declare name, assign value 'Serena'
    // return value of name obtained from using valueOf() method to element where Id="Value"
    document.getElementById("Value").innerHTML = name.valueOf();
}