// function that changes the font color of a string
function colorfulText() {
    var str = "Jane\'s favorite color is purple"; // declare variable str and assign string value
    var result = str.fontcolor("purple"); // declare variable result, assign string value and alter font color to purple
    document.getElementById("Purple_Text").innerHTML = result; // assign result to element where id = "Purple_Text"
}

// function that concatenates a sentence of purple things
function purpleThings() {
    var sentence ="These are some things that are purple:"; // declare variable sentence, assign string value
    sentence += " plums, grapes, and eggplant."; // concatenate sentence with additional string value
    document.getElementById("Concatenate").innerHTML = sentence; // assign result ot element where id ="Concatenate"
}