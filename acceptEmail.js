// Selecting the input element
const inputEmail = document.getElementById("email-field");
const inputElement = document.querySelector(".container .input-group > input");
const btn = document.getElementById("btn");
const error = document.getElementById("email-error");
const form = document.getElementById("form");
const formSuccess = document.getElementById("form-success");
const emailDetails = document.getElementById("email-details");
const btnDismiss = document.getElementById("dismiss-btn");

console.log(inputElement);
function addRedInput() {
  return inputEmail.classList.add("red");
}

function removeRedInput() {
  return inputEmail.classList.remove("red");
}
// Validate it is a valid email address
function validateEmail() {
  if (!inputEmail.value.match(/^[A-Za-z\._\-0-9]*[@][A-Za-z]*[\.][a-z]{2,4}$/)) {
    error.innerHTML = "Valid email required";// this allows to change the markup
    addRedInput();
    // inputElement
    return false;
  }
  error.innerHTML = "";
  removeRedInput();
  return true;
}

// If mail filled is valid and user clicks btn, then success screen is shown
btn.addEventListener("click", (e) => {
  e.preventDefault(); //prevent default action from happening
  if (validateEmail()) {//running a function on validate email
    form.classList.add("hidden");
    formSuccess.classList.remove("hidden");
    emailDetails.innerText = inputEmail.value;
    inputEmail.value = "";
  } else {
    addRedInput();
    alert("Valid email required");
  }
});

btnDismiss.addEventListener("click", (e) => {
  e.preventDefault();
  formSuccess.classList.add("hidden");
  form.classList.remove("hidden");
});