function editNav() {
  var x = document.getElementById("myTopnav");
  if (x.className === "topnav") {
    x.className += " responsive";
  } else {
    x.className = "topnav";
  }
}

// DOM Elements
const modalbg = document.querySelector(".bground");
const modalBtn = document.querySelectorAll(".modal-btn");
const formData = document.querySelectorAll(".formData");
const formCloseBtn = document.querySelectorAll(".close");

// Get Form inputs
let firstName = document.getElementById("firstName");
    Name = document.getElementById("name");
    eMail = document.getElementById("mail");
    birthDate = document.getElementById("birthDate");
    erreur = document.getElementsByClassName(".errorMsg");

// form.addEventListener("submit", (e) => {
//   e.preventDefault();
//   checkInputs();
// });

// function checkInputs(); {
//   // get the values from the inputs
//   const firstNameValue = firstName.value.trim();
//   const nameValue = Name.value.trim();
//   const emailValue = eMail.value.trim();
//   const birthValue = birthDate.value.trim();

//   if(firstNameValue === '') {
//     // show error message
//     //add error class
//     setErrorFor(firstNameValue, "Le champ ne peux être vide")
  
//   } else {
//     //add succes class
//   }
// // Mail checkInputs
//   if(emailValue === '') {
//     setErrorFor(email, "Email cannot be blank");
//   } else if(!isEmail(emailValue)) {
//     setErrorFor(email, "Email is not valid");
//   } else {
//     setSuccessFor(email)
//   }
// }


function setErrorFor(input, message) {
  const formData = input.parentElement; // .form-control
  const small = formData.querySelector("small");

  // add error message inside small
  small.innerText = message;

  // add error class
  formData.className = "form-control error";
}

function setSuccessFor(input) {
  const formData = input.parentElement; // .form-control
  formData.className = "form-copntrol sucess";

function isEmail(email) {
  return /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(email);
}
}
//  --- 
// launch modal event
modalBtn.forEach((btn) => btn.addEventListener("click", launchModal));

// launch modal form
function launchModal() {
  modalbg.style.display = "block";
}

// Close modal event
// formCloseBtn.addEventListener("click", closeModal);
formCloseBtn.forEach((btn) => btn.addEventListener("click", closeModal));

function closeModal() {
  modalbg.style.display = "none";
}
