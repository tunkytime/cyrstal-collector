$(document).ready(function() {

// VARIABLES


// display pictures of all the characters in HTML
	// <img src="" id="1">
	// <img src="" id="2">
	// <img src="" id="3">
	// <img src="" id="4">

// user clicks which characters they want to fight with 
	// $("#1").on("click", function () {
		
	})
	
		// attach an onclick event to each character
			// if one character is clicked, move the rest to a different section
	// user clicks an opponent, and the clicked opponent is moved to the defender section
	
var characters = [{
		name: "obi-Wan Kenobi",
		img: 'assets/images/obiwan.jpg',
		hp: 100,
		attackPow: 50,
		cAttackPow: 25,
	},
	{
		name: "Luke Skywalker",
		img: "",
		hp: 100,
		attackPow: 50,
		cAttackPow: 25,
	},
	{
		name: "Darth Sidious",
		img: "",
		hp: 100,
		attackPow: 50,
		cAttackPow: 25,
	},
	{
		name: "Darth Maul",
		img: "",
		hp: 100,
		attackPow: 50,
		cAttackPow: 25,
	}
];

console.log(characters);

$("#character1").attr("src", characters[0].img);

$("#character1").on("click", function() {
	console.log(`You selected ${characters[0].name}`);
});

