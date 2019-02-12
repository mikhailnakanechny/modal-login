const patternEmail = /[a-zA-Z0-9]{3,}@[a-zA-Z]{3,}[.][a-zA-Z]{2,}/;
const patternPassword = /((?=.*\d)(?=.*[a-zA-Z]).{3,})/;
const patternUser = /[a-zA-Z]+[a-zA-Z0-9]{2,}/;
let passCount;
let errCount;
let err;

function errMsgContol(ok, element, errText, errField) {
  if (!ok) {
    element.style.border = '2px solid red';
    errField.innerHTML += `<p>${errText}</p>`;
    errField.hidden = false;
    err = true;
  } else {
    element.style.border = null;
    // // errField.innerHTML = '';
    // // errField.hidden = true;
    // err = false;
  }
}

function validate(element, errText, errField, regExp) {
  const resultRegTest = regExp.test(element.value);
  errMsgContol(resultRegTest, element, errText, errField);
}

function validateInputs(element, errField) {
  if (element.type.toLowerCase() === 'text') {
    validate(element, 'Check username: latin letters & numbers, start with latin letter, min length 3', errField, patternUser);
  }
  if (element.type.toLowerCase() === 'email') {
    validate(element, 'Check email: latin letters & numbers, format: xxx@xxx.xx ', errField, patternEmail);
  }
  if (element.type.toLowerCase() === 'password') {
    validate(element, `Check password ${passCount}: need 1 latin letter & 1 number, min length 3`, errField, patternPassword);
    passCount += 1;
  }
  if (element.type.toLowerCase() === 'password') {
    const password1 = document.getElementById('signup-pass1');
    const password2 = document.getElementById('signup-pass2');
    if ((password1.value !== password2.value) && (errCount === 1)) {
      element.style.border = '2px solid red';
      errField.innerHTML += '<p>Check passwords: passwords not match</p>';
      errField.hidden = false;
      err = false;
      errCount += 1;
    }
  }
  if (element.id === 'agree') {
    let testCheckbox = false;
    if (element.checked === true) {
      testCheckbox = true;
    }
    errMsgContol(testCheckbox, element, 'For registration You need to accept the Terms', errField);
  }
}

export function validateForm(form) {
  event.preventDefault();
  const errField = form.querySelector('.c-auth__error');
  errField.innerHTML = '';
  err = false;
  errCount = 1;
  passCount = 1;
  const elmntArr = form.getElementsByTagName('input');
  [].forEach.call(elmntArr, element => validateInputs(element, errField, err, errCount, passCount));
  return !err;
}
