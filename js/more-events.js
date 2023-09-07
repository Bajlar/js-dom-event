// document
//   .getElementById("input-field")
//   .addEventListener("focus", function () {
//     console.log("Event Triggered inside the input field");
//   });

// document
//   .getElementById("input-field")
//   .addEventListener("blur", function () {
//     console.log("Event Triggered inside the input field blur");
//   });

// document
//   .getElementById("input-field")
//   .addEventListener("keydown", function (event) {
//     console.log(event.target.value);
//   });

// document
//   .getElementById("input-field")
//   .addEventListener("keypress", function (event) {
//     console.log(event.target.value);
//   });

document
  .getElementById("input-field")
  .addEventListener("keyup", function (event) {
    console.log(event.target.value);
  });

document.getElementById("btn-events").addEventListener('mousemove', function () {
  console.log('Event Triggered');
});