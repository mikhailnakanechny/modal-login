const authModal = document.querySelector(".c-auth"),
  loginForm = document.querySelector(".c-auth__login"),
  registerForm = document.querySelector(".c-auth__register"),
  resetForm = document.querySelector(".c-auth__reset"),
  formModalTab = document.querySelector(".c-auth__select"),
  tabLogin = document.querySelector(".c-auth__sel-login"),
  tabRegister = document.querySelector(".c-auth__sel-register"),
  linkToResetForm = document.querySelector(".c-auth__outer-reset"),
  linlToLoginForm = document.querySelector(".c-auth__outer-login"),
  nav = document.querySelector(".c-header__select");

// console.log(loginForm + " " + registerForm + " " + resetForm);

nav.onclick = function(event) {
  let target = event.target;
  if (target.className === "c-header__sel c-header__sel-login") {
    return loginSelected();
  }
  if (target.className === "c-header__sel c-header__sel-register c-header__sel--colored") {
    return registerSelected();
  }
};

authModal.onclick = function(event) {
  let target = event.target;
  if ((target.className === "c-auth__sel-login")||(target.className === "c-auth__outer-login")) {
    return loginSelected();
  }
  if (target.className === "c-auth__sel-register") {
    return registerSelected();
  }
  if (target.className === "c-auth__outer-reset") {
    return resetSelected();
  }
};

function loginSelected() {
  authModal.hidden = false;
  loginForm.hidden = false;
  registerForm.hidden = true;
  resetForm.hidden = true;
  tabLogin.classList.add("selected");
  tabRegister.classList.remove("selected");
}

function registerSelected() {
  authModal.hidden = false;
  loginForm.hidden = true;
  registerForm.hidden = false;
  resetForm.hidden = true;
  tabRegister.classList.add("selected");
  tabLogin.classList.remove("selected");
}

function resetSelected() {
  authModal.hidden = false;
  loginForm.hidden = true;
  registerForm.hidden = true;
  resetForm.hidden = false;
}


