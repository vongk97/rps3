
  function playRound(playerSelection, computerSelection) {
    if (playerSelection == "Rock")
    {
      if (computerSelection == "Scissors")
      {
        win++;
        return ("You win! " + "Rock  beats " + computerSelection);
      }
      else if (computerSelection == "Paper")
      {
        lose++;
        return ("CPU wins! " + computerSelection + " beats Rock");
      }
      else if (computerSelection == "Rock")
      {
        tie++;
        return ("Tied!");
      }
    }
    // Repeat for all three player choices
    else if (playerSelection == "Scissors")
    {
      if (computerSelection == "Scissors")
      {
        tie++;
        return ("Tied!");
      }
      else if (computerSelection == "Paper")
      {
        win++;
        return ("You win!" + " Scissors beats " + computerSelection);
      }
      else if (computerSelection == "Rock")
      {
        lose++;
        return ("CPU wins! " + computerSelection + " beats Scissors");
      }
    }
    else if (playerSelection == "Paper")
    {
      if (computerSelection == "Scissors")
      {
        lose++;
        return ("CPU wins! " + computerSelection + " beats Paper");
      }
      else if (computerSelection == "Paper")
      {
        tie++;
        return ("Tied!");
      }
      else if (computerSelection == "Rock")
      {
        win++;
        return ("You win! " + "Paper beats " + computerSelection);
      }
    }
  }

/*
  let win = 0;
  let lose = 0;
  let tie = 0;
  const computerSelection = computerPlay();
  console.log("You chose " + playerSelection);
  console.log(playRound(playerSelection, computerSelection));

  console.log("Your score: " + win);
  console.log("Computer score: " + lose);
  if (win > lose)
    console.log("You won the match!");
  else if (lose > win)
    console.log("CPU won the match!");
  else {
    console.log("That match is a tie!");
  }
    */
  const buttons = document.querySelectorAll('button');
  let win = 0;
  let lose = 0;
  let tie = 0;

  buttons.forEach((button) => {
    button.addEventListener('click', (e) => {
      playerSelection=button.id; // your choice
      computerSelection=computerPlay(); // cpu choice
      game(); // start the game after choices are locked in
    })
  });
  /*
  function rockBtn() {
    document.getElementById('playerChoice').innerHTML="You Chose: Rock";
  }
  function paperBtn() {
    document.getElementById('playerChoice').innerHTML="You Chose: Paper";
  }
  function scissorsBtn() {
    document.getElementById('playerChoice').innerHTML="You Chose: Scissors";
  }
  */
  function game() {
    document.getElementById('playerChoice').innerHTML="You Chose: " + playerSelection;
    document.getElementById('cpuChoice').innerHTML="CPU Chose: " + computerSelection;
    document.getElementById('result').innerHTML="Result: " + playRound(playerSelection, computerSelection);
    document.getElementById('playerScore').innerHTML="You: " + win;
    document.getElementById('cpuScore').innerHTML="CPU: " + lose;
    if(win == 2) {
      document.getElementById('winner').innerHTML="Game Over! You won the match.";
      document.getElementById('restartBtn').innerHTML='<button onclick="reset()">Restart</button';
    }
    if(lose==2) {
      document.getElementById('winner').innerHTML="Game Over! CPU won the match.";
      document.getElementById('restartBtn').innerHTML='<button onclick="reset()">Restart</button>';
    }
  }
  function reset() {
    win = 0;
    lose = 0;
    tie = 0;
    playerSelection = "";
    computerSelection="";
    document.getElementById('playerChoice').innerHTML="You Chose: " + playerSelection;
    document.getElementById('cpuChoice').innerHTML="CPU Chose: " + computerSelection;
    document.getElementById('result').innerHTML="Result: ";
    document.getElementById('playerScore').innerHTML="You: " + win;
    document.getElementById('cpuScore').innerHTML="CPU: " + lose;
    document.getElementById('winner').innerHTML="";
    document.getElementById('restartBtn').innerHTML="";
  }
  function computerPlay() {
    let options = ["Rock", "Paper", "Scissors"];
    let choice = options[Math.floor(Math.random() * options.length)];
    return choice;
  }
