// JavaScript Document
var start = '{"favColor":"Purple", "favSeason":"Fall"}';

var myObject = JSON.parse(start);
console.log(myObject);

var myString = JSON.stringify(myObject);
console.log(myString);

myObject = JSON.parse(myString);
console.log(myObject);

var theData1 = '{"first":"Paul", "last":"Cheney","city":"Salem"}';
var myObj = JSON.parse(theData1);
console.log(myObj);
//document.getElementById("message").innerHTML = myObj.last;

var theData2 = '{"Jane":{"age":"29", "degree":{"AA":"DVC", "BA":"PSU"}}, "Jim":{"age":"49", "degree":"MA"}}';
var myObj2 = JSON.parse(theData2);
console.log(myObj2);
document.getElementById("message").innerHTML = myObj2.Jane.degree.BA;



var xhr = new XMLHttpRequest(); 
// open sets the parameters
xhr.open('GET', 'data.json', true);
xhr.send(); // send actually initates the open request

xhr.onreadystatechange = function () {
    console.log(xhr.readyState);
    console.log(xhr.status);
} // end function
