function compute()
{
    //Store data from the form into variables
    var principal = document.getElementById("principal").value;
    var rate = document.getElementById("rate").value;
    var years = document.getElementById("years").value;
    var interest = principal * years * rate /100;
    var year = new Date().getFullYear()+parseInt(years);

    //Check that the principal amount is positive
    if(principal<=0){
        alert("Enter a positive number");
        document.getElementById("principal").focus();
        return false;
    }

    //if the amount is positive, return the interest amount
    document.getElementById("result").innerHTML="If you deposit "+<mark>principal</mark>+",\<br\>at an interest rate of "+<mark>rate</mark>+"%\<br\>You will receive an amount of "+<mark>interest</mark>+",\<br\>in the year "+<mark>year</mark>+"\<br\>";
    return true;
}


function updateRate() 
{
    //Update the interest rate value as a user moves the slider
    var rateval = document.getElementById("rate").value;
    document.getElementById("rate_val").innerText=rateval;
}
