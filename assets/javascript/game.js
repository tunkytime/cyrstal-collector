$(document).ready(function () {

	// VARIABLES
	var randomNumber = 0;
	var wins = 0;
	var losses = 0;
	var scoreSum = 0
	var crystals = [{
			name: "redCrystal",
			value: 0,
		},
		{
			name: "blueCrystal",
			value: 0,
		},
		{
			name: "greenCrystal",
			value: 0,
		},
		{
			name: "purpleCrystal",
			value: 0,
		}
	];
	var messages = {
		win: "You won!",
		lose: "You lost!"
	};

	var clickSound = document.createElement("audio");
	clickSound.setAttribute("src", "assets/sounds/click.wav");

	var clickSound1 = document.createElement("audio");
	clickSound1.setAttribute("src", "assets/sounds/click.wav");

	var clickSound2 = document.createElement("audio");
	clickSound2.setAttribute("src", "assets/sounds/click.wav");

	var clickSound3 = document.createElement("audio");
	clickSound3.setAttribute("src", "assets/sounds/click.wav");

	function generateRandomNumber() {
		randomNumber = Math.floor(Math.random() * 120) + 19;
		$("#randomNumber").text(randomNumber);
		for (var i = 0; i < crystals.length; i++) {
			crystals[i].value = Math.floor(Math.random() * 12) + 1;
		};
	};

	function resetGame() {
		scoreSum = 0;
		console.log(crystals);
		$("#scoreSum").text(scoreSum);
		generateRandomNumber();
	};

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

	// ON CLICK EVENTS
	$("#redCrystal").on("click", function () {
		scoreSum += crystals[0].value;
		clickSound.play();
		winCheck();
	});

	$("#blueCrystal").on("click", function () {
		scoreSum += crystals[1].value;
		clickSound1.play();
		winCheck();
	});

	$("#greenCrystal").on("click", function () {
		scoreSum += crystals[2].value;
		clickSound2.play();
		winCheck();
	});

	$("#purpleCrystal").on("click", function () {
		scoreSum += crystals[3].value;
		clickSound3.play();
		winCheck();
	});

	resetGame();

});