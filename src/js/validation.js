const patternEmail = /[a-zA-Z0-9]{3,}@[a-zA-Z]{3,}[.]{1}[a-zA-Z]{2,}/;
const patternPassword = /((?=.*\d)(?=.*[a-zA-Z]).{3,})/;
const patternUser = /[a-zA-Z]+[a-zA-Z0-9]{2,}/;

function validate(element, errText, errField, regExp, err) {
  const resultRegTest = regExp.test(element.value);
  if (!resultRegTest) {
    element.style.border = '2px solid red';
    errField.innerHTML += `<p>${errText}</p>`;
    errField.hidden = false;
    err = true;
  } else {
    element.style.border = null;
    errField.innerHTML = '';
    errField.hidden = true;
    err = false;
  }
  console.log(err);
}

function validateInputs(element, errField, err) {
  if (element.type.toLowerCase() === 'text') {
    validate(element, 'check entered username', errField, patternUser, err);
  }
  if (element.type.toLowerCase() === 'email') {
    validate(element, 'check entered email', errField, patternEmail, err);
  }
  if (element.type.toLowerCase() === 'password') {
    validate(element, 'check entered password', errField, patternPassword, err);
  }
}

export function validateForm(form) {
  event.preventDefault();
  const errField = form.querySelector('.c-auth__error');
  errField.innerHTML = '';
  let err = false;
  const elmntArr = form.getElementsByTagName('input');
  [].forEach.call(elmntArr, (element) => {
    return validateInputs(element, errField, err);
  });
  if (err) {
    return false;
  }
  return true;
}

// (function validationView() {
//   for (let i = indexStart; i <= indexEnd; i += 1) {
//     if (elements[i].type.toLowerCase() === 'submit') {
//       elements[i].onclick = (e) => {
//         e.preventDefault();
//         console.log(indexErr);
//         arrErr.forEach((elm) => {
//           elm.hidden = true;
//         });
//
//         for (let j = indexStart; j <= indexEnd; j += 1) {
//           const errField = arrErr[indexErr];
//           console.log(indexEnd);
//           console.log(errField);
//           if (elements[j].type.toLowerCase() === 'email') {
//             validate(elements[j], 'check entered email', errField, patternEmail);
//           }
//         }
//       };
//     }
//   }
// }());

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
