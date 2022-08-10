// Error'1: if password field isn't blank, the checkValidity function consider it as valid even when the function checkPassword consider it as invalid
// ++ from Error'1: the input gets valid's style but error message appears
// Error'2: checkPassword function didn't stop the user to send the form with errors from its verification **FIXED!

// Bootstrap method to validation through form's inputs
const forms = document.querySelectorAll(".needs-validation");

Array.prototype.slice.call(forms).forEach(function (form) {
  form.addEventListener(
    "submit",
    function (event) {
      if (!checkPassword()) {
        event.preventDefault();
        event.stopPropagation();
      } else if (!form.checkValidity()) {
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
    password.valid;
  } else {
    setInvalid(password);
    password.validity === false;
    isPasswordValid = false;
  }

  // 2. Checking if the password confirms
  if (
    isValidPasssword(repeatedPassword.value) &&
    password.value === repeatedPassword.value
  ) {
    setValid(repeatedPassword);
    repeatedPassword.valid;
  } else {
    setInvalid(repeatedPassword);
    repeatedPassword.validity === false;
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
