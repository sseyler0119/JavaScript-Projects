// KVP dictionary function
function dictionary() {
    // declare variable Car as dictionary with assigned KVP 
    var Car = {
        Make: "Toyota",
        Model: "Corolla",
        Year: 2009,
        Color: "Silver"
    };
    delete Car.Color; // delete Color key from Car dictionary
    // display Color key from Car dictionary using Id
    document.getElementById("Dictionary").innerHTML = Car.Color; // attempt to access deleted Key
}