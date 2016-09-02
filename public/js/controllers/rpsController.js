angular
  .module("rpsApp")
  .controller("rpsController", rpsController);

function rpsController() {
  this.choices   = [rock, paper, scissors];
  this.userScore = 0;
  this.botScore  = 0;
  var userChoice;
  var botChoice;

  this.play = function(userPlay) {
    userChoice = userPlay;
    this.botsPlay();
    this.evaluate();
    this.updateScoreboard();
    this.updateStatus();
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
    this.userScore = 0;
    this.botScore  = 0;
    this.updateScoreboard();
    this.removeStatus();
  }

  this.removeStatus = function() {
    document.getElementById('status').innerText = "";
  }
}