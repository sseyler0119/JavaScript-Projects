document.write("Hello, World! "); // print "Hello, World!"" to screen
var A ="This is a string "; // declare var A and assign string value

document.write(A); // print var A to screen

var B ="Wow, a string!! "; // declare var B and assign string value
window.alert(B); // print var B in pop up alert

var sentence ="Sally said, \"Good morning, class, it\'s Monday today. \""; // declare var sentence and assign string value
window.alert(sentence); // print var sentence in pop up alert

// print string to window
document.write("\"I have not failed." + "I\'ve just found 10,000 ways that won\'t work.\"" +"-Thomas Edison "); 

var name = "Serena" + " Seyler "; // declare var name and assign concatenated string as value
document.write(name); // print var name to screen

// declare and assign multiple string variables to a group of colors
var colors = "rainbow", r ="red", o ="orange", y ="yellow", g = "green", b ="blue", p = "purple"; 
// assign specific font colors to each color string variable 
colors = colors.fontcolor("grey"); 
r = r.fontcolor("red");
o = o.fontcolor("orange");
y = y.fontcolor("yellow");
g = g.fontcolor("green");
b = b.fontcolor("blue");
p = p.fontcolor("purple");
document.write("Colored strings: " + colors + r + o + y + g + b + p + " "); // print color variables to screen

document.write(9*4); // print expression 9*4 to screen