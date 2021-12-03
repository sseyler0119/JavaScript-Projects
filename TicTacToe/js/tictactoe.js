// This variable keeps track of whose turn it is
let activePlayer = 'X';
// This array stores an array of moves. We use this to determine win conditions.
let selectedSquares = [];

// This function is for placing an x or o in a square
function placeXOrO(squareNumber) 
{
    // this condition ensures a square hasn't been selected already
    // the .some() method is used to check each element of selectedSquare array 
    //      to see if it contains the square number clicked on
    if(!selectedSquares.some(element => element.includes(squareNumber)))
    {
        // this var retrieves the html element id that was clicked
        let select = document.getElementById(squareNumber);

        // this condition checks whose turn it is.
        if(activePlayer === 'X')
        {
            // if activePlaer is equal to 'X', the x.png is placed in HTML
            select.style.backgroundImage = 'url("images/x.jpg")';
        }
        // else activePlayer must be 'O'
        else 
        {
            // if activePlayer is equal to 'O', the o.png is place in HTML
            select.style.backgroundImage = 'url("images/o.jpg")';
        }

        // squareNumber and activePlayer are concatenated together and added to array
        selectedSquares.push(squareNumber + activePlayer);
        
        // this calls a function to check for any win conditions
        checkWinConditions();
        
        // condition to change the active player
        if(activePlayer === 'X')
        {
            // change to 'O'
            activePlayer = 'O';
        } 
        // else change to 'X'
        else
        {
            activePlayer = 'X';
        }

        // this function plays placement sound
        audio('./media/place1.mp3');
        // this conditions checks to see if it is computer's turn
        if(activePlayer === 'O')
        {
            // disable clicking for computer choice
            disableClick();
            // wait 1 second before computer places image and enables click
            setTimeout(function () {computersTurn();}, 1000)
        }
        // returning true is needed for computersTurn() function to work
        return true;
    }

    // select random square
    function computersTurn() 
    {
        // this boolean is needed for while loop
        let success = false;
        // store random number 0-8
        let pickASquare;

        // condition allows our while loop to keep trying if a square is selected already
        while(!success) 
        {
            // select random # between 0-8
            pickASquare = String(Math.floor(Math.random() *9));

            // if the random number evaluated returns true, the square has not been selected yet
            if(placeXOrO(pickASquare))
            {
                // call function
                placeXOrO(pickASquare);
                // change condition and exit
                success = true;
            };
        }
    }
}

// This function parses the selectedSquares array to search for win conditions. 
// drawWinLine function is called to draw line if condition is met
function checkWinConditions() 
{
    // X 0,1,2 condition
    if (arrayIncludes('0X', '1X', '2X'))
    {
        drawWinLine(50,100, 558, 100)
    }
    else if (arrayIncludes('3X', '4X', '5X')) // X 3 ,4, 5 condition
    {
        drawWinLine(50, 304, 558, 304)
    }
    else if (arrayIncludes('6X', '7X', '8X')) // X 6 ,7, 8 condition
    {
        drawWinLine(50, 508, 558, 508)
    }
    else if (arrayIncludes('0X', '3X', '6X')) // X 0 , 3, 6 condition
    {
        drawWinLine(100, 50, 100, 558)
    }
    else if (arrayIncludes('1X', '4X', '7X')) // X 1 ,4, 7 condition
    {
        drawWinLine(304,50, 304, 558)
    }
    else if (arrayIncludes('2X', '5X', '8X')) // X 2,5,8 condition
    {
        drawWinLine(508,50,508,558)
    }
    else if (arrayIncludes('6X', '4X', '2X')) // X 6,4,2 condition
    {
        drawWinLine(100,508,510,90)
    }
    else if (arrayIncludes('0X', '4X', '8X')) // X 0,4,8 condition
    {
        drawWinLine(100,100,520,520)
    }
    else if (arrayIncludes('0O', '1O', '2O')) // O 0,1,2 condition
    {
        drawWinLine(50,100, 558, 100)
    }
    else if (arrayIncludes('3O', '4O', '5O')) // O 3 ,4, 5 condition
    {
        drawWinLine(50, 304, 558, 304)
    }
    else if (arrayIncludes('6O', '7O', '8O')) // O 6 ,7, 8 condition
    {
        drawWinLine(50, 508, 558, 508)
    }
    else if (arrayIncludes('0O', '3O', '6O')) // O 0 , 3, 6 condition
    {
        drawWinLine(100, 50, 100, 558)
    }
    else if (arrayIncludes('1O', '4O', '7O')) // O 1 ,4, 7 condition
    {
        drawWinLine(304,50, 304, 558)
    }
    else if (arrayIncludes('2O', '5O', '8O')) // O 2,5,8 condition
    {
        drawWinLine(508,50,508,558)
    }
    else if (arrayIncludes('6O', '4O', '2O')) // O 6,4,2 condition
    {
        drawWinLine(100,508,510,90)
    }
    else if (arrayIncludes('0O', '4O', '8O')) // O 0,4,8 condition
    {
        drawWinLine(100,100,520,520)
    }
    // This condition checks for a tie. If none of the above conditions register and 9 
    //      squares are selected, the code executes
    else if(selectedSquares.length >= 9)
    {
        audio('./media/tie1.mp3');
        // This function sets a 0.3 second timer before the resetGame is called
        setTimeout(function() {resetGame();}, 1000);
    }
}

// This function checks if an array includes 3 strings. It checks for each win condition
function arrayIncludes(squareA, squareB, squareC)
{
    // these 3 variables will be used to check for 3 in a row
    const a = selectedSquares.includes(squareA)
    const b = selectedSquares.includes(squareB)
    const c = selectedSquares.includes(squareC)

    // if the 3 variables we pass are all included in our array true 
    //      is returned and our else if condition executes the drawLine function
    if(a === true && b === true && c === true)
    {
        return true
    }
}

// This function makes the body element temporarily unclickable
function disableClick()
{
    // target body element
    body.style.pointerEvents = 'none';
    // reactivate after 1 second
    setTimeout(function() {body.style.pointerEvents = 'auto';}, 1000);
}

// This function plays audio with passed in file-path parameter
function audio(audioURL)
{
    // create new audio object with passed in URL parameter
    let audio = new Audio(audioURL);
    // play sound
    audio.play();
}

// This function utilizes html canvas to draw win lines
function drawWinLine(coordX1, coordY1, coordX2, coordY2)
{
    // this line accesses our html canvas element
    const canvas = document.getElementById('win-lines')

    // this line gives us access to methods and properties to use on canvas
    const c = canvas.getContext('2d');

    let x1 = coordX1, // start of x-axis on a line
        y1 = coordY1, // start of y-axis on a line
        x2 = coordX2, // end of x-axis on a line
        y2 = coordY2, // end of y-axis on a line
        x = x1, // stores temp x-axis data received from animation loop
        y = y1; // stores temp y-axis data received from animation loop

    // this function interacts with the canvas
    function animateLineDrawing() 
    {
        // create a loop
        const animationLoop = requestAnimationFrame(animateLineDrawing);
        // clear content from last loop iteration
        c.clearRect(0,0,608,608)
        // this method starts a new path
        c.beginPath();
        // move to starting point for line
        c.moveTo(x1,y1)
        // indicates end point of line
        c.lineTo(x,y)
        // sets width of line
        c.lineWidth = 10;
        // sets color of line
        c.strokeStyle = 'rgba(70,255,33, 0.8)';
        // draws everything previously laid out above
        c.stroke();
        // check to see if at endpoint
        if(x1 <= x2 && y1 <= y2)
        {
            // adds 10 to previous x-endpoint
            if(x < x2) {x += 10;}
            // add 10 to previous y=endpoint
            if(y < y2) {y += 10;}
            // cancels animation loop if end points are reached
            if(x >= x2 && y >= y2) {cancelAnimationFrame(animationLoop); }
        }
        // same as above for 6,4,2 win condition (diagonal)
        if(x1 <= x2 && y1 >= y2)
        {
            if(x < x2) {x += 10;}
            if(y >y2) {y -= 10;}
            if(x >= x2 && y <= y2) { cancelAnimationFrame(animationLoop); }
        }
    } // end animationLineDrawing()

    // clears canvas after win line is drawn
    function clear() 
    {
        // starts animation loop
        const animationLoop = requestAnimationFrame(clear);
        // clear canvas
        c.clearRect(0,0,608,608);
        // stop animation loop
        cancelAnimationFrame(animationLoop);
    }

    // disable clicking while sound is playing
    disableClick();
    audio('./media/win.mp3'); // play win sound
    animateLineDrawing(); // call animation loop
    // wait 1 second, then clear canvas, reset game, allow clicking again
    setTimeout(function() {clear(); resetGame(); }, 1000);
}

// reset the game in the event of a tie or a win
function resetGame() 
{
    // iterte through each HTML square element
    for (let i = 0; i < 9; i++)
    {
        // get html element
        let square = document.getElementById(String(i))
        // remove element background image
        square.style.backgroundImage = ''
    }
    // reset array to empty
    selectedSquares = [];
}