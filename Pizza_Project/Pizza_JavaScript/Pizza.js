function getReceipt() 
{
    // this initializes our string so it can get passed from
    //      function to function, growing line by line into a full receipt
    var text1 = "<h3>You Ordered:</h3>";
    var runningTotal = 0;
    var sizeTotal = 0;
    var sizeArray = document.getElementsByClassName("size");
    
    // loop through sizeArray and add selected size to running total 
    for(var i = 0; i < sizeArray.length; i++)
    {
        if(sizeArray[i].checked)
        {
            var selectedSize = sizeArray[i].value;
            text1 = text1 + selectedSize + "<br>";
        }
    }

    // apply correct price based on selectedSize
    if(selectedSize === "Personal Pizza")
    {
        sizeTotal = 6;
    }
    else if (selectedSize === "Small Pizza")
    {
        sizeTotal = 8;
    }
    else if (selectedSize === "Medium Pizza")
    {
        sizeTotal = 10;
    }
    else if (selectedSize === "Large Pizza")
    {
        sizeTotal = 14;
    }
    else if (selectedSize === "Extra Large Pizza")
    {
        sizeTotal = 16;
    }

    // add size price to running total
    runningTotal = sizeTotal;
    console.log(selectedSize + " = $" + sizeTotal + ".00");
    console.log("size text1: " + text1);
    console.log("subtotal: $" + runningTotal + ".00");
    // these variables will get passed to each function
    getTopping(runningTotal, text1);
};

// add price for each selected topping to running total
function getTopping(runningTotal, text1)
{
    var toppingTotal = 0;
    var selectedTopping = [];
    var toppingArray = document.getElementsByClassName("toppings");

    // loop through array, add each selected topping to running total
    for(var j = 0; j < toppingArray.length; j++)
    {
        if(toppingArray[j].checked)
        {
            selectedTopping.push(toppingArray[j].value);
            console.log("selected topping item: (" + toppingArray[j].value +")");
            text1 = text1 + toppingArray[j].value + "<br>";
        }
    }

    var toppingCount = selectedTopping.length;
    if(toppingCount > 1)
    {
        // first topping is free
        toppingTotal = (toppingCount - 1);
    }
    else
    {
        toppingTotal = 0;
    }
    
    //update running total
    runningTotal = (runningTotal +  toppingTotal);
    console.log("total selected topping items: " + toppingCount);
    console.log(toppingCount + " topping - 1 free topping = " + "$" + toppingCount + ".00");
    console.log("topping text1: " + text1);
    console.log("Purchase Total: " + "$" + runningTotal + ".00");
    // output order details and running total to elements with matching id
    document.getElementById("showText").innerHTML = text1;
    document.getElementById("totalPrice").innerHTML = "<h3>Total: <strong>$" +
        runningTotal + ".00" + "</strong></h3>";
};