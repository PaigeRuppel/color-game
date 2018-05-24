var level = 6; //default starting level
var colors = generateRandomColors(level);

var header = document.querySelector(".header");

var reset = document.querySelector("#reset");
var squares = document.querySelectorAll(".square");
var colorDisplay = document.querySelector("#colorDisplay");
var message = document.querySelector("#message");

var difficultyLevels = document.querySelectorAll(".difficulty");

var colorToGuess = pickColor();

setTextContent(colorDisplay, colorToGuess);

for (var i = 0; i < difficultyLevels.length; i++) {
	var difficulty = difficultyLevels[i];

	difficulty.addEventListener("click", function() {
		removeSelectedClass();
		this.classList.add("selected");
		level = this.value;
		console.log(level);
		resetForm(level);
	});
}

function removeSelectedClass() {
	for (var i = 0; i < difficultyLevels.length; i++) {
		removeClass(difficultyLevels[i], "selected");
	}
}


reset.addEventListener("click", function() {
	resetForm(level);
	setBackground(header, "steelblue");
});


function resetForm(number) {
	colors = generateRandomColors(number);
	colorToGuess = pickColor();
	setTextContent(colorDisplay, colorToGuess);	
	for (var i = 0; i < squares.length; i++) {
		var square = squares[i];
		if (colors[i]) {
			setBackground(square, colors[i]);
			removeClass(square, "hidden");
		} else {
			square.classList.add("hidden");
		}
	}
	setTextContent(reset, "New Colors");
	setTextContent(message, "");
}


for (var i = 0; i < squares.length; i++) {
	var square = squares[i];
	square.style.backgroundColor = colors[i];
	square.addEventListener("click", function() {
		var clickedColor = this.style.backgroundColor;
		if (clickedColor === colorToGuess) {
			setTextContent(message, "Correct");
			changeColors(clickedColor);
			setBackground(header, clickedColor);
			setTextContent(reset, "Play Again?");
		} else {
		  setBackground(this, "#232323");
		  setTextContent(message, "Please try again!");
		}
	});
}

function changeColors(color) {
	for (var i = 0; i < squares.length; i++) {
		var square = squares[i];
		setBackground(square, color);
	}
}

function setTextContent(element, text) {
	element.textContent = text;
}

function removeClass(element, classToRemove) {
	element.classList.remove(classToRemove);
}
var setBackground = function(element, color) {
	element.style.backgroundColor = color;
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
	return Math.floor((Math.random() * 256));
}