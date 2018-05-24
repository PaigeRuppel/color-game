var colors = generateRandomColors(6);

var header = document.querySelector(".header");

var reset = document.querySelector("#reset");
var squares = document.querySelectorAll(".square");
var colorDisplay = document.querySelector("#colorDisplay");
var message = document.querySelector("#message");


var easyButton = document.querySelector("#easyBtn");
var hardButton = document.querySelector("#hardBtn");

var isHardMode = true;

var colorToGuess = pickColor();



easyButton.addEventListener("click", function() {
	easyButton.classList.toggle("selected");
	hardButton.classList.toggle("selected");
	isHardMode = false;
	resetForm(3);
});

hardButton.addEventListener("click", function() {
	hardButton.classList.toggle("selected");
	easyButton.classList.toggle("selected");
	isHardMode = true;
	resetForm(6);
});

colorDisplay.textContent = colorToGuess;

reset.addEventListener("click", function() {
	if (isHardMode) {
	resetForm(6);
	} else {
	resetForm(3);
	}
});

function resetForm(number) {
	colors = generateRandomColors(number);
	colorToGuess = pickColor();
	colorDisplay.textContent = colorToGuess;	

	for (var i = 0; i < squares.length; i++) {
	var square = squares[i];
		if (i < number) {
			square.style.backgroundColor = colors[i];
			square.classList.remove("hidden");
		} else {
			square.classList.add("hidden");
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