function countdown() {
    // assign value obtained from element where id="seconds" to varible "seconds"
    var seconds = document.getElementById("seconds").value;

    // function to decrement seconds until time is up
    function tick() {
        seconds = seconds - 1; // decrement seconds by 1
        timer.innerHTML = seconds; // assign value of seconds to element where id="timer"
        var time = setTimeout(tick, 1000); // pause for 1000 ms (1 second)

        // out of time
        if(seconds == -1){
            alert("Time's up!"); // alert user with popup
            clearTimeout(time); // reset time
            timer.innerHTML ="";
        }
    }
    tick(); // call tick function
}

var slideIndex = 1; // declare slideIndex, initialize index to 1
showSlides(slideIndex); // call showSlides function with passed in value

// next and previous controls
function plusSlides(n) {
    showSlides(slideIndex += n);
}

// thumbnail image controls
function currentSlide(n) {
    showSlides(slideIndex = n);
}

function showSlides(n) {
    var i; // index variable
    var slides = document.getElementsByClassName("mySlides");
    var dots = document.getElementsByClassName("dot");
    if(n > slides.length) {
        slideIndex = 1
    }
    if(n < 1) {
        slideIndex = slides.length
    }

    for(i = 0; i < slides.length; i++)
    {
        slides[i].style.display = "none";
    }

    for(i = 0; i < dots.length; i++){
        dots[i].className = dots[i].className.replace(" active", "");

    }

    slides[slideIndex-1].style.display = "block";
    dots[slideIndex-1].className += " active";
}