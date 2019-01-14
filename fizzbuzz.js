//gget the div that will hold the fizzbuzz numbers
const overlay = document.querySelector(".overlay");
//get the paragraph tag for the numbers
const numbers = document.querySelector(".numbers");
//get value from text input
var inputNum = document.querySelector(".inputNum").value;

function run() {
	//get value from text input
	var inputNum = document.querySelector(".inputNum").value;
	
	//test if number is valid
	const period = /\./g;
	var result = period.test(inputNum); 
	
	if (inputNum <= 500 && inputNum >=0 && !result) {
		//show overlay
		overlay.style.display="flex";
		//start at 0 and iterate through inputNum
		for (var i = 1; i <= inputNum; i++) {
			if (i % 15 == 0) {
				//appends i + fizzbuzz to the placeholder p tag
				numbers.innerHTML += i + " - fizzbuzz<br>";
			}
			else if (i % 3 == 0) {
				//appends i + fizz to the placeholder p tag
				numbers.innerHTML += i + " - fizz<br>";
			}
			else if (i % 5 == 0) {
				//appends i + buzz to the placeholder p tag
				numbers.innerHTML += i + " - buzz<br>";
			}
		}//end for
	}
	else {
		console.log(result);
		window.alert("Make sure you choose a number under 500, that isn't a negative, that doesn't have a decimal.");
		return;
	}
}//end run

//function that closes the overlay div
function closeDiv() {
	//set the div's display to none
	overlay.style.display="none";
	numbers.innerHTML = "";
	inputNum = "";
}

