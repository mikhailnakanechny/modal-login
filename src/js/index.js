import { validateForm } from './validation';

const authModal = document.querySelector('.c-auth');
const loginForm = document.querySelector('.c-auth__login');
const registerForm = document.querySelector('.c-auth__register');
const resetForm = document.querySelector('.c-auth__reset');
const tabLogin = document.querySelector('.c-auth__sel-login');
const tabRegister = document.querySelector('.c-auth__sel-register');
const nav = document.querySelector('.c-header__select');
const passHideLogin = document.getElementById('signin-pass');
const passHideRegister1 = document.getElementById('signup-pass1');
const passHideRegister2 = document.getElementById('signup-pass2');
const btnPassHideLogin = document.querySelector('.hide-pass-login');
const btnPassHideRegister1 = document.querySelector('.hide-pass-register1');
const btnPassHideRegister2 = document.querySelector('.hide-pass-register2');

function loginSelected() {
  event.preventDefault();
  authModal.hidden = false;
  loginForm.hidden = false;
  registerForm.hidden = true;
  resetForm.hidden = true;
  tabLogin.classList.add('selected');
  tabRegister.classList.remove('selected');
}

function registerSelected() {
  event.preventDefault();
  authModal.hidden = false;
  loginForm.hidden = true;
  registerForm.hidden = false;
  resetForm.hidden = true;
  tabRegister.classList.add('selected');
  tabLogin.classList.remove('selected');
}

function resetSelected() {
  event.preventDefault();
  authModal.hidden = false;
  loginForm.hidden = true;
  registerForm.hidden = true;
  resetForm.hidden = false;
}

function hideModal() {
  event.preventDefault();
  authModal.hidden = true;
  loginForm.hidden = true;
  registerForm.hidden = true;
  resetForm.hidden = true;
}

function hidePassword(passInput) {
  if (passInput.type === 'password') {
    passInput.type = 'text';
    setTimeout(() => {
      passInput.type = 'password';
    }, 2000);
  } else {
    passInput.type = 'password';
  }
}

btnPassHideLogin.onclick = () => hidePassword(passHideLogin);

btnPassHideRegister1.onclick = () => hidePassword(passHideRegister1);
btnPassHideRegister2.onclick = () => hidePassword(passHideRegister2);

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

document.querySelector('.c-auth__login-btn').onclick = validateForm(loginForm);
document.querySelector('.c-auth__reg-btn').onclick = validateForm(registerForm);
document.querySelector('.c-auth__reset-btn').onclick = validateForm(resetForm);

// const elements = document.getElementsByTagName('input');
//
// for (let i = 0; i < elements.length; i += 1) {
//   elements[3].onsubmit = (e) => {
//     e.preventDefault();
//     validateForm(loginForm);
//   };
//   elements[9].onsubmit = (e) => {
//     e.preventDefault();
//     validateForm(registerForm);
//   };
//   elements[11].onsubmit = (e) => {
//     e.preventDefault();
//     validateForm(resetForm);
//   };
// }


// const btnSignIn = document.querySelector('.btn-SignIn');

// loginForm.addEventListener('submit', validateForm);
// loginForm.onsubmit = validateForm(loginForm);
// registerForm.onsubmit = validateForm(registerForm);
// resetForm.onsubmit = validateForm(resetForm);
