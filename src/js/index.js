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
  } else {
    passInput.type = 'password';
  }
}

btnPassHideLogin.onclick = () => hidePassword(passHideLogin);

btnPassHideRegister.onclick = () => hidePassword(passHideRegister);

nav.onclick = function selectTab(event) {
  const target = event.target;
  if (target.className === 'c-header__sel c-header__sel-login') {
    loginSelected();
  }
  if (target.className === 'c-header__sel c-header__sel-register c-header__sel--colored') {
    registerSelected();
  }
};

authModal.onclick = function selectForms(event) {
  const target = event.target;
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
