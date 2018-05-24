var colors = generateRandomColors(6);

var header = document.querySelector(".header");

var reset = document.querySelector("#reset");
var squares = document.querySelectorAll(".square");
var colorDisplay = document.querySelector("#colorDisplay");
var message = document.querySelector("#message");


var difficultyLevels = document.querySelectorAll(".difficulty");
var level = 6; //default starting level

var colorToGuess = pickColor();

colorDisplay.textContent = colorToGuess;

for (var i = 0; i < difficultyLevels.length; i++) {
	var level = difficultyLevels[i];

	level.addEventListener("click", function() {
		removeSelectedClass();
		this.classList.add("selected");
		level = this.value;
		resetForm(level);
	});
}

function removeSelectedClass() {
	for (var i = 0; i < difficultyLevels.length; i++) {
		difficultyLevels[i].classList.remove("selected");
	}
}

reset.addEventListener("click", function() {
	resetForm(level);
});

function resetForm(number) {
	colors = generateRandomColors(number);
	colorToGuess = pickColor();
	colorDisplay.textContent = colorToGuess;	

	for (var i = 0; i < squares.length; i++) {
	var square = squares[i];
	square.classList.add("hidden");
		if (colors[i]) {
			square.style.backgroundColor = colors[i];
			square.classList.remove("hidden");
		} 
	}
	header.style.backgroundColor = "#232323";
	reset.textContent = "New Colors";
}

for (var i = 0; i < squares.length; i++) {
	var square = squares[i];
	square.style.backgroundColor = colors[i];

	square.addEventListener("click", function() {
		var clickedColor = this.style.backgroundColor;
		if (clickedColor === colorToGuess) {
			message.textContent = "Correct!";
			changeColors(clickedColor);
			header.style.backgroundColor = clickedColor;
			reset.textContent = "Play Again?";
		} else {
		  this.style.backgroundColor = "#232323";
		  message.textContent = "Please try again!";
		}
	});
}

function changeColors(color) {
	for (var i = 0; i < squares.length; i++) {
		var square = squares[i];
		square.style.backgroundColor = color;
	}
}

function pickColor() {
	var random = Math.floor(Math.random() * colors.length);
	return colors[random];
}

function generateRandomColors(length) {
	var arr = [];
	for (var i = 0; i < length; i++) {
		arr[i] = generateRandomRgbValue();
	}
	return arr;
}

function generateRandomRgbValue() {
	return "rgb(" + generateRandomSingleValue() + ", " + generateRandomSingleValue() + ", " + generateRandomSingleValue() + ")";
}

function generateRandomSingleValue() {
	return Math.floor((Math.random() * 266));
}