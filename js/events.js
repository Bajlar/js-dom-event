// option 1: directly set on the HTML element
console.log('This is separate JS File');
// <button onclick="console.log(7);">Click Me</button>;

// option 2: add onclick function
function makeRed() {
  document.body.style.backgroundColor = 'red';
}

// option 3: add onclick function
const makeBlueButton = document.getElementById("make-blue");
makeBlueButton.onclick = makeBlue;

function makeBlue() {
  document.body.style.backgroundColor = "blue";
}

// option 3: another add onclick function
const makePurpleButton = document.getElementById("make-purple");
makePurpleButton.onclick = function makePurple() {
  document.body.style.backgroundColor = "purple";
}

// option 4: add onclick function
const makePinkButton = document.getElementById("make-pink");
makePinkButton.addEventListener("click", makePink);

function makePink() {
  document.body.style.backgroundColor = "pink";
}

// option 4: another add onclick function
const makeGreenButton = document.getElementById("make-green");
makeGreenButton.addEventListener("click", function () {
  document.body.style.backgroundColor = "green";
});

// option 4: final
document.getElementById("make-orange").addEventListener('click', function () {
  document.body.style.backgroundColor = "orange";
})