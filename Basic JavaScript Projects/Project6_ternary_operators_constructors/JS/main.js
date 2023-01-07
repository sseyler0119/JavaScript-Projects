// function to demonstrate ternary operator
function eligibleToVote() {
    var age, canVote;
    age = document.getElementById("Age").value; // assign value where id="Age" to variable "age"
    // if age < 18, canVote="You are not eligible", else canVote="You are eligible"
    canVote = (age < 18) ? "You are not eligible":"You are eligible "; 
    // return value of canVote + string to element where id="Vote"
    document.getElementById("Vote").innerHTML = canVote + " to vote."; 
}

// write constructor for author using this
function author(title, genre, pages, yearPublished) {
    this.authorTitle = title;
    this.authorGenre = genre;
    this.authorPages = pages;
    this.authorYearPublished = yearPublished;
}

// create new parameterized author object "StephenKing" using constructor
var StephenKing = new author("It", "horror", 1138, 1986);

//output author object to HTML element with matching Id
function getBook() {
     document.getElementById("New_and_This").innerHTML = "Stepeh King wrote a book by the name of " 
     + StephenKing.authorTitle + ", released in the year " + StephenKing.authorYearPublished + ".";
}

// nested function that counts down days until Christmas
function adventCalendar() {
    // return results from remainingDays() to HTML element with matching Id
    document.getElementById("Nested_Function").innerHTML = remainingDays();
    // function that counts down one day at a time, returns # of days remaining
    function remainingDays() {
        var startDay = 24; // default set to 24
        // function that modifies startDay variable by decrementing by 1
        function oneDown() {
            startDay -= 1; // decrement by 1
        }
        oneDown(); // call oneDown function
        return startDay; // return modified value to HTML element with matching Id
    }
}