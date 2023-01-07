// demo a while loop to output list of numbers
function Call_Loop()
{
    // declare vars
    var i = 0; 
    var num = "";

    // loop to output list of numbers while i < 10
    while(i < 10)
    {
        i++; // increment i
        num += "<br>" + i; // add a new line and i to num
    }
    // output result to element with matching id
    document.getElementById("Loop").innerHTML = num;
}

// function to determine how many characters are in a string
function stringLength() 
{
    var statement = "Layla is my dog."; // string
    var strLength = statement.length; // length of string
    // output result to element with matching id
    document.getElementById("Length").innerHTML = "The string, " + statement + " is " 
        + strLength + " characters long."; 
}

// demo for loop to iterate through an array
function for_Loop() 
{
    // declare variables
    var instruments = ["Guitar", "Drums", "Piano", "Bass", "Violin", "Trumpet", "Flute"]; // array
    var content = ""; // output variable
    var i; // index

    // iterate through an array of instruments
    for(i = 0; i < instruments.length; i++) 
    {
        // assign instrument at current index to content
        content += instruments[i] + "<br>"; 
    }
    // output content to element with matching id
    document.getElementById("List_of_Instruments").innerHTML = content;
}

// demo iterating through an array
function array_Function() 
{
    var i; // index
    var dwarves = []; // object array
    var content = ""; // output variable
    // populate array with data
    dwarves[0] = "Sleepy";
    dwarves[1] = "Happy";
    dwarves[2] = "Dopey";
    dwarves[3] = "Sneezy";
    dwarves[4] = "Bashful";
    dwarves[5] = "Grumpy";
    dwarves[6] = "Doc";

    // iterate through array
    for(i = 0; i < dwarves.length; i++)
    {
        // assign dwarves at index to content
        content += dwarves[i] + "<br>";
    }
    //output content to element with matching id
    document.getElementById("Array").innerHTML = content; 
}


 // declare constant object and assign values
 const Pet = {type: "dog", name: "Lucy", color: "black"};

// demo a function that uses a constant
function constant_Function() 
{
    Pet.color = "brown"; // change the color property's value
    Pet.age = 4; // add a new property

    // output string to element with matching id
    document.getElementById("Constant").innerHTML = Pet.name + " is a " + Pet.age + " year old " + Pet.color + " " + Pet.type;
}

// demo var vs let
function testLet() 
{
    var name = "Serena"; // declare variable 'name' and assign value 'Serena'
    var content = name + "<br>"; // declare content and add name to value
    {
        let name = "Jeff"; // name will only be 'Jeff' in this block
        content += name + "<br>"; // add name to content
    }
    content += name + "<br>"; // name will now be 'Serena' since we are outside the block
    // output content to element with matching id
    document.getElementById("Let").innerHTML = content;
}

// demo a function with a return type
function calcArea() 
{
    var width = 10;
    var length = 17;

    // return result to calling function
    return width * length;
}

// function to output area obtained from calcArea()
function getArea()
{
    // call calcArea() function and return result to element with matching id
    document.getElementById("Return").innerHTML = "The area of 10 * 17 is: " + calcArea();
}


// create object 'dog', assign values
let dog = {
    name: "Slowpoke",
    breed: "greyhound",
    color: "brindle",
    age: 3,
    sex: 'm',
    // declare and implement describeDog function
    describeDog: function() {
        // return object data 
        return dog.name + " is a " + dog.age + " year old " + dog.sex + ", " + dog.color + " colored " + dog.breed + ".";
    }
};

// output data obtained from dog object function describeDog() to element with matching id
document.getElementById("DogObject").innerHTML = dog.describeDog();

// demo break and continue statements using a nested loop
function breakContinue() 
{
    var i, j; // index variables
    var result = "";
    // outer loop using continue statement
    for(i = 0; i < 6; i++)
    {
        if(i === 4) // when i === 4, continue
        {
            // insert "continue" into output 
            result += "... continue " + "<br>";
            continue;
        }

        result += "i = " + i + "<br>";
        // nested inner loop using break statement
        for(j = 0; j < 3; j++)
        {
            if(j === 2) // when j === 2, break from loop
            {
                // insert "break" into output
                result += "...break " + "<br>";
                break;
            }
            result += "********* j = " + j + "<br>";
        }
    }
    // output result to element with matching id
    document.getElementById("Break_Continue").innerHTML = result;
}