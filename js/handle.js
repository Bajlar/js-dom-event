function handleOnclick() {
  const handlerStatus = document.getElementById("handler-status");
  handlerStatus.innerText = 'Bajlar';
}

document
  .getElementById("event-listener")
  .addEventListener("click", function () {
    document.getElementById("handler-status").innerText = 'Web Developer 2023'
  });

document.getElementById("btn-update").addEventListener('click', function () {
  const inputField = document.getElementById("input-field");
  const inputText = inputField.value;
  // console.log(inputText);

  const inputTextDisplay = document.getElementById("input-text-display");
  inputTextDisplay.innerText = inputText;
  inputField.value = '';
});