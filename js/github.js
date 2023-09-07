document.getElementById("btn-delete").addEventListener("click", function () {
  const secretInfo = document.getElementById("secret-info");
  secretInfo.style.display = "none";
});

document
  .getElementById("input-field")
  .addEventListener("keyup", function (event) {
    const text = event.target.value;
    // console.log(text);
    const deleteButton = document.getElementById("btn-delete");
    if (text === 'delete') {
      deleteButton.removeAttribute("disabled");
    } else {
      deleteButton.setAttribute("disabled", true);
    }
  });


