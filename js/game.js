var tries = 20;//set tries
var randomNumber = 1 + Math.floor(Math.random() * 100);//set random number for game
$("#attempts").text(tries);//display default tries to game

$("#beginButton").click(function() {//when begin button is prsses, hid that button and show game
    $("#beginButton").hide("fast");
    $("#gameRun").show("fast");
});

$("#guessButton").click(function() {//do if user clicks the guess button
    if ($("#userInput").val() == randomNumber){//win condition
        window.location.href = "won.html";
    } else if(tries>1){//if user is incorrect, but above the threshold, remove a tries, set attempts to new tries, and tell user if they are low or high
        tries--;  
        $("#attempts").text(tries);
        if ($("#userInput").val()>randomNumber){
           $("#updown").text("The answer is less than your input"); 
        }else{
            $("#updown").text("The answer is greater than your input"); 
        }
    } else {//you lose
        window.location.href = "lost.html";
    }
});

//if user presses enter key, act like they clicked the guess button
$("#userInput").keydown(function(e){
    if (e.keyCode == 13) {
        e.preventDefault();
        $("#guessButton").click();
    }
});