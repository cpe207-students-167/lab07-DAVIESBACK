
const firstNameInput = document.querySelector("#first-name-input");
const lastNameInput = document.querySelector("#last-name-input");
const emailInput = document.querySelector("#email-input");
const passwordInput = document.querySelector("#password-input");
const confirmPasswordInput = document.querySelector("#password-confirm-input");

const submitBtn = document.querySelector("#submit-btn");
const resetBtn = document.querySelector("#reset-btn");

function validateEmail(email) {
  var atPos = email.indexOf("@");
  var dotPos = email.lastIndexOf(".");
  return atPos > 0 && dotPos > atPos + 1 && dotPos < email.length - 1;
}

function toggleError(input, isValid) {
  if (isValid) {
    input.classList.remove('is-invalid');
  } else {
    input.classList.add('is-invalid');
  }
}

function validateFirstName() {
  const value = firstNameInput.value.trim();
  const isValid = /^[A-Za-z]+$/.test(value);
  toggleError(firstNameInput, isValid);
  return isValid;
}

function validateLastName() {
  const value = lastNameInput.value.trim();
  const isValid = /^[A-Za-z]+$/.test(value);
  toggleError(lastNameInput, isValid);
  return isValid;
}

function validateEmailInput() {
  const value = emailInput.value.trim();
  const isValid = validateEmail(value);
  toggleError(emailInput, isValid);
  return isValid;
}

function validatePassword() {
  const value = passwordInput.value.trim();
  const isValid = value.length >= 6;
  toggleError(passwordInput, isValid);
  return isValid;
}

function validateConfirmPassword() {
  const passwordValue = passwordInput.value.trim();
  const confirmPasswordValue = confirmPasswordInput.value.trim();
  const isValid = confirmPasswordValue === passwordValue;
  toggleError(confirmPasswordInput, isValid);
  return isValid;
}

firstNameInput.addEventListener('input', validateFirstName);
lastNameInput.addEventListener('input', validateLastName);
emailInput.addEventListener('input', validateEmailInput);
passwordInput.addEventListener('input', validatePassword);
confirmPasswordInput.addEventListener('input', validateConfirmPassword);

submitBtn.addEventListener('click', function(event) {
  event.preventDefault(); 

  const isFirstNameValid = validateFirstName();
  const isLastNameValid = validateLastName();
  const isEmailValid = validateEmailInput();
  const isPasswordValid = validatePassword();
  const isConfirmPasswordValid = validateConfirmPassword();

  if (isFirstNameValid && isLastNameValid && isEmailValid && isPasswordValid && isConfirmPasswordValid) {
    alert('Registered successfully');
  } else {
    alert('Please fix the errors in the form');
  }
});

resetBtn.addEventListener('click', function() {
  firstNameInput.value = '';
  lastNameInput.value = '';
  emailInput.value = '';
  passwordInput.value = '';
  confirmPasswordInput.value = '';

  firstNameInput.classList.remove('is-invalid');
  lastNameInput.classList.remove('is-invalid');
  emailInput.classList.remove('is-invalid');
  passwordInput.classList.remove('is-invalid');
  confirmPasswordInput.classList.remove('is-invalid');
});
