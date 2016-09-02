angular
  .module("rpsApp")
  .controller("rpsController", rpsController);

function rpsController() {
  this.choices      = [rock, paper, scissors];
  this.userScore    = 0;
  this.botScore     = 0;
  this.roundsPlayed = 0;
  var userChoice;
  var botChoice;

  this.play = function(userPlay) {
    this.roundsPlayed++;
    if (this.roundsPlayed < 3) {
      userChoice = userPlay;
      this.botsPlay();
      this.evaluate();
      this.updateScoreboard();
      this.updateStatus();
    } else if (this.roundsPlayed === 3) {
      userChoice = userPlay;
      this.botsPlay();
      this.evaluate();
      this.updateScoreboard();
      this.updateStatus();
      this.result();
    }
}

  this.botsPlay = function() {
    var index = Math.floor(Math.random() * this.choices.length);
    botChoice = this.choices[index].id;
  }

  this.updateScoreboard = function() {
    document.getElementById('humanScore').innerText = this.userScore;
    document.getElementById('computerScore').innerText = this.botScore;
  }

  this.updateStatus = function() {
    document.getElementById('status').innerText = 'You played ' + userChoice + ', bot played ' + botChoice;
  }

  this.evaluate = function() {
    switch (userChoice) {
      case "rock":
        if (botChoice == "paper") { this.botScore++; } 
        if (botChoice == "scissors") { this.userScore++; }
        break;

      case "paper":
        if (botChoice == "rock") { this.userScore++; } 
        if (botChoice == "scissors") { this.botScore++; }
        break;

      case "scissors":
        if (botChoice == "paper") { this.userScore++; } 
        if (botChoice == "rock") { this.botScore++; }
        break;
    }
  }

  this.restart = function() {
    this.userScore    = 0;
    this.botScore     = 0;
    this.roundsPlayed = 0;
    this.updateScoreboard();
    this.removeStatus();
  }

  this.removeStatus = function() {
    document.getElementById('status').innerText = "";
    document.getElementById('result').innerText = "";
  }

  this.result = function() {
    if (this.userScore > this.botScore) {
      document.getElementById('result').innerText = "You Win! Hit Restart to play again.";
    } else if (this.botScore > this.userScore) {
      document.getElementById('result').innerText = "You Lose, hit restart to try to beat the bot again";
    } else {
      document.getElementById('result').innerText = "It's a tie!"
    }
  }
}