
//declare variables that are needed for program

var Randnum = 0;
var gemRand = 0;
var userNum = 0;
var wins = 0;
var loss = 0;
$("#wins").text("wins: " + wins);
$("#losses").text("losses: " + loss);
$("#TotalScore").text(0);



game();

function game() {
    //declare an array to hold what values the gems will use
    var gemArr = [];

    //get a random number for the user to try to guess to
    Randnum = Math.floor(Math.random() * 120) + 19;
    $("#computerScore").text(Randnum);

    //asign random number to each gem for each start of the game
    //store the random numbers in an array that can then be reset

    do {
        gemRand = Math.floor(Math.random() * 12) + 1;

        //create an if statement to make sure none of the gems will be assigned the same random value
        if (!gemArr.includes(gemRand)) {
            gemArr.push(gemRand);
        }

        //exit the do while loop when the array has 4 items 
    } while (gemArr.length !== 4)


    //assign a value to each of the crystals
    $("#crystal1").attr("data-crystalValue", gemArr[0]);
    $("#crystal2").attr("data-crystalValue", gemArr[1]);
    $("#crystal3").attr("data-crystalValue", gemArr[2]);
    $("#crystal4").attr("data-crystalValue", gemArr[3]);

  
}
    //when a player will click one of the gems it will add that score to the players score

  

    function winLoss(user) {

        if (Randnum === user) {
            alert("congrats you have won the game");
            zero();
            wins++
            $("#wins").text("wins: " + wins);
    
            game();
            

        }
        else if (Randnum < user) {
            alert("I am sorry but you have lost the game");
            zero();
            loss++;
            $("#losses").text("losses: " + loss);
            game();
            
        }


    }

    function zero() {
        Randnum = 0;
        gemRand = 0;
        userNum = 0;
        gemArr = [];
        $("#TotalScore").text(0);
    }

$("#crystal1").on("click", function () {
    var crystalNum = ($("#crystal1").attr("data-crystalValue"));
    crystalNum = parseInt(crystalNum);
    //increment the score depending on what value is clicked
    userNum += crystalNum;
    console.log(userNum);
    $("#TotalScore").text(userNum);
    winLoss(userNum);


});

//repeat the proces
$("#crystal2").on("click", function () {
    var crystalNum = ($("#crystal2").attr("data-crystalValue"));
    crystalNum = parseInt(crystalNum);
    //increment the score depending on what value is clicked
    userNum += crystalNum;
    console.log(userNum);
    $("#TotalScore").text(userNum);
    winLoss(userNum);
});

$("#crystal3").on("click", function () {
    var crystalNum = ($("#crystal3").attr("data-crystalValue"));
    crystalNum = parseInt(crystalNum);
    //increment the score depending on what value is clicked
    userNum += crystalNum;
    console.log(userNum);
    $("#TotalScore").text(userNum);
    winLoss(userNum);
});

$("#crystal4").on("click", function () {
    var crystalNum = ($("#crystal4").attr("data-crystalValue"));
    crystalNum = parseInt(crystalNum);
    //increment the score depending on what value is clicked
    userNum += crystalNum;
    console.log(userNum);
    $("#TotalScore").text(userNum);
    winLoss(userNum);


});


//if user = rand num then the user will win

//if user goes above the score then the user will lose

