$(document).ready(function() {

	// VARIABLES
	var randomNumber = 0;
	var wins = 0;
	var losses = 0;
	var scoreSum = 0
	var crystalValues = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];
	var crystals = [
		{
			name: "redCrystal",
			value: crystalValues[Math.floor(Math.random() * crystalValues.length)]
		},
		{
			name: "blueCrystal",
			value: crystalValues[Math.floor(Math.random() * crystalValues.length)]
		},
		{
			name: "greenCrystal",
			value: crystalValues[Math.floor(Math.random() * crystalValues.length)]
		},
		{
			name: "purpleCrystal",
			value: crystalValues[Math.floor(Math.random() * crystalValues.length)]
		}
	];
	var messages = {
		win: "You won!",
		lose: "You lost!"
	};
		
	//var clickSound = document.createElement("audio");
	//	clickSound.setAttribute("src", "assets/sounds/click.wav");
		
	for (var i = 0; i < crystals.length; i++) {
		console.log(crystals[i]);
	}
	
	resetGame();
	
	// ON CLICK EVENTS
	$("#redCrystal").on("click", function () {
		scoreSum += crystals[0].value;
		winCheck();
	});
	
	$("#blueCrystal").on("click", function () {
		scoreSum += crystals[1].value;
		winCheck();
	});
	
	$("#greenCrystal").on("click", function () {
		scoreSum += crystals[2].value;
		winCheck();
	});
	
	$("#purpleCrystal").on("click", function () {
		scoreSum += crystals[3].value;
		winCheck();
	});
	
	function winCheck() {
		if (scoreSum == randomNumber) {
			$("#scoreSum").text(scoreSum);
			wins++;
			$("#message").text(messages.win);
			$("#wins").text(wins);
			resetGame();
		} else if (scoreSum > randomNumber) {
			$("#scoreSum").text(scoreSum);
			losses++;
			$("#message").text(messages.lose);
			$("#losses").text(losses);
			resetGame();
		} else {
			$("#scoreSum").text(scoreSum);
		};
	};

	function resetGame () {
		scoreSum = 0;
		$("#scoreSum").text(scoreSum);
		generateRandomNumber();
	};
	
	function generateRandomNumber() {
		randomNumber = Math.floor(Math.random() * 120) + 19;
		$("#randomNumber").text(randomNumber);
	};

});