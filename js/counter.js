let counter = 0;
document.getElementById("btn-increment").addEventListener('click', function () {
  // counter = counter + 1;
  // counter += 1;
  counter++;
  document.getElementById("counter").value = counter;
});

document.getElementById("btn-decrement").addEventListener("click", function () {
  // counter = counter - 1;
  // counter -= 1;
  counter--;
  document.getElementById("counter").value = counter;
});

