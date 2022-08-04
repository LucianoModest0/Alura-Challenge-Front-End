// Bootstrap method to validation through form's inputs
const forms = document.querySelectorAll(".needs-validation");

Array.prototype.slice.call(forms).forEach(function (form) {
  form.addEventListener(
    "submit",
    function (event) {
      if (!form.checkValidity() || !checkPassword()) {
        event.preventDefault();
        event.stopPropagation();
      }
      form.classList.add("was-validated");
    },
    false
  );
});

// Password verification function

// Regex Basis

const passwordRegex =
  /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[$*&@#])[0-9a-zA-Z$*&@#]{6,}$/;

// function to check the password
function checkPassword() {
  let password = document.querySelector("#floatingPassword");
  let repeatedPassword = document.querySelector("#repeatedPassword");
  let isPasswordValid = true;

  // 1. Checking if password fits in Regex pattern
  if (isValidPasssword(password.value)) {
    setValid(password);
  } else {
    setInvalid(password);
    isPasswordValid = false;
  }
  console.log(password);
  // 2. Checking if the password confirms
  if (
    isValidPasssword(repeatedPassword.value) &&
    password.value === repeatedPassword.value
  ) {
    setValid(repeatedPassword);
  } else {
    setInvalid(repeatedPassword);
    isPasswordValid = false;
  }

  return isPasswordValid;
}

// Method to compare password with regex
function isValidPasssword(password) {
  return password.match(passwordRegex);
}

// Method to valid elements
function setInvalid(element) {
  element.classList.remove("is-valid");
  element.classList.add("is-invalid");
}

// Method to invalid elements
function setValid(element) {
  element.classList.remove("is-invalid");
  element.classList.add("is-valid");
}
