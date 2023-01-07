// function to demo JavaScript comparisons 
function comparisonTests() {
    var x = 12;
    var y = 102;
    var z = "12";
    var name = "serena";

    // output data type using 'typeof()'
    document.write("Datatype of \"serena\": " + typeof(name) + "<br>");
    // combine a string and number
    document.write("    Combine string and number: \"12\" + 102: " + (z + y) + "<br><br>");

    // test NaN
    document.write("        ***************** Demo NaN *****************       " + "<br>");
    document.write("    \'747\' is not a number: " + isNaN('747') + "<br>"); // returns true
    document.write("    This string is not a number: " + isNaN("This string is not a number") + "<br>"); // returns true
    document.write("    0/0 is NaN: " + (0/0) + "<br><br>"); // returns NaN

    // output +infinity and -infinity
    document.write("        ***************** Infinity *****************       " + "<br>");
    document.write("    Output 3E415 to screen: " + 3E415 + "<br>"); // +infinity
    document.write("    Output -3E310 to screen: " + (-3E310) + "<br><br>"); // -infinity

    // DEMO '==, >, <'  expressions
    document.write("        ***************** Demo ==, >, < *****************       " + "<br>");
    document.write("    12 == 12: " + (x == x) + "<br>"); // true
    document.write("    102 == 12: " + (y == x) + "<br>"); // false
    document.write("    12 < 102: " + (x < y) + "<br>"); // true
    document.write("    12 > 102: " + (y > x) + "<br><br>"); // false


    // DEMO '===' expressions
    document.write("        ***************** Demo === *****************       " + "<br>");
    //      a. return true, match data type and value
    document.write("    a. 12 === 12: " + (x === x) + "<br>");
    //      b. return false, different data type and different value 
    document.write("    b. 12 === \"serena\": " + (x === name) + "<br>");
    //      c. return false, different data type but same values
    document.write("    c. 12 === \"12\": " + (x === z) + "<br>");
    //      d. return false, same data type but different values
    document.write("    d. 12 === 102: " + (x === y) + "<br><br>");

    document.write("        ***************** Demo AND, OR, NOT *****************       " + "<br>");
    // AND statements &&
    document.write("    10 > 2 && 7 < 10: " + (10 > 2 && 7 < 10) + "<br>"); // true
    document.write("    5 > 0 && 9 > 15: " + (5 < 0 && 9 > 15) + "<br>"); // false
    // OR statements ||
    document.write("    10 == 10 || 15 < 3: " + (10 == 10 || 15 < 3) + "<br>"); // true
    document.write("    4 > 5 || 20 < 3: " + (4 > 5 || 20 < 3) + "<br>"); // false
    // NOT statements !
    document.write("    !(10 > 4): " + !(10 > 4) + "<br>"); // false
    document.write("    !(0 > 45): " + !(0 > 45) + "<br>"); // true
}
