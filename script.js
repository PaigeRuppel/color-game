var colors = generateRandomColors(6);

var squares = document.querySelectorAll(".square");
var pickedColor = pickColor();
var colorDisplay = document.querySelector("#colorDisplay");

var message = document.querySelector("#message");

colorDisplay.textContent = pickedColor;

for (var i = 0; i < squares.length; i++) {
	var square = squares[i];
	square.style.backgroundColor = colors[i];

	square.addEventListener("click", function() {
		var clickedColor = this.style.backgroundColor;
		if (clickedColor === pickedColor) {
			message.textContent = "Correct!";
			changeColors(clickedColor);
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
		var values = [];
		for (var i = 0; i < 3; i++) {
			values[i] = generateRandomSingleValue();
		}
		return "rgb(" + values[0] + ", " + values[1] + ", " + values[2] + ")";
}

function generateRandomSingleValue() {
	return Math.floor((Math.random() * 255 + 1));
}