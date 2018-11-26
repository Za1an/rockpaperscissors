let computerChoice = "";
let playerChoice = "";

$("#shoot").click(function() {
    playerChoice = $("#input").val()
    playerChoice = playerChoice.toLowerCase().trim()
    console.log(playerChoice)
    gameLogic();
});

$("body").keydown(function (e) {
  if (e.keyCode == 13) {
     playerChoice = $("#input").val()
    playerChoice = playerChoice.toLowerCase().trim()
    console.log(playerChoice)
    gameLogic();
  }
});

var commands = {
    'rock': function() {
        playerChoice = "rock";
        console.log(playerChoice)
        speak("you have chosen rock. Say shoot to confirm your choice.")
    },
    'paper': function() {
        playerChoice = "paper"
        console.log(playerChoice)
        speak("you have chosen paper. Say shoot to confirm your choice.")
    },
    'scissors': function() {
        playerChoice = "scissors"
        console.log(playerChoice)
        speak("you have chosen scissors. Say shoot to confirm your choice.")
    },
    'shoot': function() {
        gameLogic()
    }
}
annyang.addCommands(commands);
annyang.start();


function gameLogic() {
    computerChoice = Math.floor(Math.random()*3);
    console.log(computerChoice);
    if(computerChoice == 0) {
        computerChoice = "rock"
    } else if(computerChoice == 1) {
        computerChoice = "paper"
    } else if(computerChoice == 2) {
        computerChoice = "scissors"
    } else {
        console.log("error");
    }
    if(playerChoice == "rock" && computerChoice == "rock") {
        $("#userChoice").text("Rock");
        $("#computerChoice").text("Rock");
        $("#result").text("It's a tie!");
        speak("It's a tie!")
    } else if(playerChoice == "rock" && computerChoice == "paper") {
        $("#userChoice").text("Rock");
        $("#computerChoice").text("Paper");
        $("#result").text("The computer wins!");
        speak("Paper beats rock. The computer wins!")
    } else if(playerChoice == "rock" && computerChoice == "scissors") {
        $("#userChoice").text("Rock");
        $("#computerChoice").text("Scissors");
        $("#result").text("You win!");
        speak("Rock beats scissors. You win!")
    } else if(playerChoice == "paper" && computerChoice == "rock") {
        $("#userChoice").text("Paper");
        $("#computerChoice").text("Rock");
        $("#result").text("You win!");
        speak("Paper beats rock. You win!")
    } else if(playerChoice == "paper" && computerChoice == "paper") {
        $("#userChoice").text("Paper");
        $("#computerChoice").text("Paper");
        $("#result").text("It's a tie!");
        speak("It's a tie!")
    } else if(playerChoice == "paper" && computerChoice == "scissors") {
        $("#userChoice").text("Paper");
        $("#computerChoice").text("Scissors");
        $("#result").text("The computer wins!");
        speak("Scissors beats paper. The computer wins!")
    } else if(playerChoice == "scissors" && computerChoice == "rock") {
        $("#userChoice").text("Scissors");
        $("#computerChoice").text("Rock");
        $("#result").text("The computer wins!");
        speak("Rock beats scissors. The computer wins!")
    } else if(playerChoice == "scissors" && computerChoice == "paper") {
        $("#userChoice").text("Scissors");
        $("#computerChoice").text("Paper");
        $("#result").text("You win!");
        speak("Scissors beats paper. You win!")
    } else if(playerChoice == "scissors" && computerChoice == "scissors") {
        $("#userChoice").text("Scissors");
        $("#computerChoice").text("Scissors");
        $("#result").text("It's a tie!");
        speak("It's a tie!")
    }
}

function speak(text) {
	var msg = new SpeechSynthesisUtterance();
	msg.text = text;
	msg.volume = parseFloat(1);
	msg.rate = parseFloat(0.8);
	msg.pitch = parseFloat(1);
	window.speechSynthesis.speak(msg);
}