const authModal = document.querySelector('.c-auth');
const loginForm = document.querySelector('.c-auth__login');
const registerForm = document.querySelector('.c-auth__register');
const resetForm = document.querySelector('.c-auth__reset');
const tabLogin = document.querySelector('.c-auth__sel-login');
const tabRegister = document.querySelector('.c-auth__sel-register');
const nav = document.querySelector('.c-header__select');
const passHideLogin = document.getElementById('signin-pass');
const passHideRegister = document.getElementById('signup-pass');
const btnPassHideLogin = document.querySelector('.hide-pass-login');
const btnPassHideRegister = document.querySelector('.hide-pass-register');

let indexStart = 0;
let indexEnd = 3;
let indexErr = 0;

function indexSet() {
  if (!loginForm.hidden) {
    indexStart = 0;
    indexEnd = 3;
    indexErr = 0;
  } else if (!registerForm.hidden) {
    indexStart = 4;
    indexEnd = 9;
    indexErr = 1;
  } else if (!resetForm.hidden) {
    indexStart = 10;
    indexEnd = 11;
    indexErr = 2;
  }

  console.log(indexStart);
  console.log(indexEnd);
}

function loginSelected() {
  event.preventDefault();
  authModal.hidden = false;
  loginForm.hidden = false;
  registerForm.hidden = true;
  resetForm.hidden = true;
  tabLogin.classList.add('selected');
  tabRegister.classList.remove('selected');
  indexSet();
}

function registerSelected() {
  event.preventDefault();
  authModal.hidden = false;
  loginForm.hidden = true;
  registerForm.hidden = false;
  resetForm.hidden = true;
  tabRegister.classList.add('selected');
  tabLogin.classList.remove('selected');
  indexSet();
}

function resetSelected() {
  event.preventDefault();
  authModal.hidden = false;
  loginForm.hidden = true;
  registerForm.hidden = true;
  resetForm.hidden = false;
  indexSet();
}

function hideModal() {
  event.preventDefault();
  authModal.hidden = true;
  loginForm.hidden = true;
  registerForm.hidden = true;
  resetForm.hidden = true;
  indexSet();
}

function hidePassword(passInput) {
  if (passInput.type === 'password') {
    passInput.type = 'text';
  } else {
    passInput.type = 'password';
  }
}

btnPassHideLogin.onclick = () => hidePassword(passHideLogin);

btnPassHideRegister.onclick = () => hidePassword(passHideRegister);

nav.onclick = function selectTab(event) {
  const { target } = event;
  if (target.className === 'c-header__sel c-header__sel-login') {
    loginSelected();
  }
  if (target.className === 'c-header__sel c-header__sel-register c-header__sel--colored') {
    registerSelected();
  }
};

authModal.onclick = function selectForms(event) {
  const { target } = event;
  if ((target.className === 'c-auth__sel-login') || (target.className === 'c-auth__outer-login')) {
    loginSelected();
  }
  if (target.className === 'c-auth__sel-register') {
    registerSelected();
  }
  if (target.className === 'c-auth__outer-reset') {
    resetSelected();
  }
  if (target.className === 'c-auth') {
    hideModal();
  }
};

document.onkeydown = function keyPress(e) {
  if (e.key === 'Escape') {
    hideModal();
  }
};

const elements = document.getElementsByTagName('INPUT');
const arrErr = document.querySelectorAll('.c-auth__error');
const patternEmail = /[a-zA-Z0-9]{3,}@[a-zA-Z]{3,}[.]{1}[a-zA-Z]{2,}/;
const patternPassword = /((?=.*\d)(?=.*[a-zA-Z]).{3,})/;
const patternUser = /[a-zA-Z]+[a-zA-Z0-9]{2,}/;

function validate(element, errText, errField, regExp) {
  const resultRegTest = regExp.test(element.value);
  if (!element.value || resultRegTest) {
    element.style.border = '2px solid red';
    errField.innerHtml = errText;
    errField.hidden = false;
  }
}

console.log(elements);

(function validationView() {
  for (let i = indexStart; i <= indexEnd; i += 1) {
    if (elements[i].type.toLowerCase() === 'submit') {
      elements[i].onclick = (e) => {
        e.preventDefault();
        console.log(indexErr);
        arrErr.forEach((elm) => {
          elm.hidden = true;
        });

        for (let j = indexStart; j <= indexEnd; j += 1) {
          const errField = arrErr[indexErr];
          console.log(indexEnd);
          console.log(errField);
          if (elements[j].type.toLowerCase() === 'email') {
            validate(elements[j], 'check entered email', errField, patternEmail);
          }
        }
      };
    }
  }
}());

// placeholder="E-mail"
// pattern="[a-zA-Z0-9]{3,}@[a-zA-Z]{3,}[.]{1}[a-zA-Z]{2,}"
// placeholder="Password"
// pattern="((?=.*\d)(?=.*[a-zA-Z]).{3,})"
// placeholder="Username"
// pattern="[a-zA-Z]{1,}[a-zA-Z0-9]{2,}"
//   for (let i = 0; i < elements.length; i += 1) {
//     if (elements[i].type.toLowerCase() === 'submit') {
//       elements[i].onclick = (e) => {
//         e.preventDefault();
//         arrErr.forEach((elm) => {
//           elm.hidden = true;
//         });
//       };
//     }
//
//     elements[i].oninvalid = () => {
//       if ((i >= 0) && (i <= 3)) {
//         arrErr[0].hidden = false;
//       }
//       if ((i >= 4) && (i <= 9)) {
//         arrErr[1].hidden = false;
//       }
//       if ((i >= 10) && (i <= 11)) {
//         arrErr[2].hidden = false;
//       }
//     };
//   }
