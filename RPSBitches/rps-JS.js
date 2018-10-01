var wins = 0;
var losses = 0;
var ties = 0;

const wDisplay = document.querySelector('#w');
const lDisplay = document.querySelector('#l');
const dDisplay = document.querySelector('#d');

const pDisplay = document.querySelector('#pc');
const cDisplay = document.querySelector('#cc');

var btns = document.querySelectorAll('.button');
btns.forEach((btn) => {
	btn.addEventListener('click', (e) => {
		console.log(e);
		var playerSelection = '';
		if(e.target.id == 'pRock'){
			playerSelection = 'ROCK';
		}
		if(e.target.id == 'pPaper'){
			playerSelection = 'PAPER';
		}
		if(e.target.id == 'pScissors'){
			playerSelection = 'SCISSORS';
		}
		playRound(playerSelection);
	});
});


function game(){
	
	
	console.log("The player chooses: " + playerSelection);
	console.log("The computer chooses: " + computerSelection);
	console.log("Result: " + playRound(playerSelection, computerSelection));
	console.log("");
	

	console.log("THE PLAYERS FINAL RECORD");
	console.log("Wins: " + wins + "    Losses: " + losses + "    Ties: " + ties);
	console.log(score());
	
}

function score(){
	
	if (wins > losses){
		alert("The player wins!!!! The game begins again");
	} else if (losses > wins){
		alert("The player loses!!!! The game begins again");
	}

	wins = 0;
	losses = 0;
	ties = 0;

	wDisplay.textContent = '0';
	lDisplay.textContent = '0';
	dDisplay.textContent = '0';
}


function computerPlay(){
	var plays = ["ROCK", "PAPER", "SCISSORS"];
	var randNum = Math.floor(Math.random() * 3);
	return plays[randNum];
}

function playRound(playerSelection){

	
	pDisplay.textContent = playerSelection;

	var computerSelection = computerPlay();
	cDisplay.textContent = computerSelection;

	


	if (playerSelection == computerSelection){
		ties = ties + 1;
		dDisplay.textContent = ties;
	}else if(playerSelection == "ROCK" && computerSelection == "SCISSORS"){
		wins = wins + 1;
		wDisplay.textContent = wins;
	}else if(playerSelection == "PAPER" && computerSelection == "ROCK") {
		wins = wins + 1;
		wDisplay.textContent = wins;
	} else if (playerSelection == "SCISSORS" && computerSelection == "PAPER") {
		wins = wins + 1;
		wDisplay.textContent = wins;
	} else {
		losses = losses + 1;
		lDisplay.textContent = losses;
	}

	if (wins == 5 || losses == 5){
		score();
	}


}