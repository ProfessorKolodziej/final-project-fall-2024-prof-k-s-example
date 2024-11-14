// This is where you should write all JavaScript
// for your project. Remember a few things as you start!
// - Use let or const for all variables
// - Do not use jQuery - use JavaScript instead
// - Do not use onclick - use addEventListener instead
// - Run npm run test regularly to check autograding
// - You'll need to link this file to your HTML :)

const radioButtons = document.querySelector('#answers');

let answer = localStorage.getItem("answer");

if (radioButtons !== null) {
	radioButtons.addEventListener("click", function (event) {
		if (event.target.tagName === "INPUT") {
			localStorage.setItem("answer", event.target.value);
			console.log("It's running, right?")
		}
	});
}

console.log(answer);
localStorage.clear();

