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
const textControl = document.getElementsByClassName("text-control");
const form = document.querySelector("form");
const errorMsg = document.getElementsByClassName(".errorMsg");

// Get Form inputs
const firstName = document.getElementById("first");
const Name = document.getElementById("last");
const nameReg = new RegExp(/^[A-zÀ-ú-']{2,}$/);
const eMail = document.getElementById("mail");
const emailReg = new RegExp(/^[\w-\.]+@([\w-]+\.)+[\w-]{2,}$/);
const birthDate = document.getElementById("birthDate");

// Form start

function validateForm()
{
  let inputs = form.querySelectorAll("input");
    inputs.forEach((input) => 
      {
        if (input.value === "") {
          alert("Veuillez remplir le formulaire");
          return false;
        }
      })
}

form.addEventListener("submit", (e) => {
  e.preventDefault();
    validateForm()
});

function validateFirstName()
{
  // let vName = firstName.value;
  let vName = document.getElementById("first").textContent;
  if(vName.length == 0)
  {
    // firstNameError.getElementById("first").innerHTML = "Le champs ne doit pas être vide";
    // firstNameError.getElementById("first").value = "Le champs ne doit pas être vide";
    document.getElementById("first").textContent = "Le champs ne doit pas être vide";
  }
  if(!firstName.matches(/^[A-zÀ-ú-']{2,}$/))
  {
    firstNameError.getElementById("first").innerHTML = "Veuillez rentrer un prenom valide";
  }
  firstNameError.getElementById("first").innerHTML = "Valide"
  return true;
}

//----------------------------------------------------------------

// launch modal event
modalBtn.forEach((btn) => btn.addEventListener("click", launchModal));

// launch modal form
function launchModal() {
  modalbg.style.display = "block";
}

// Close modal event
formCloseBtn.forEach((btn) => btn.addEventListener("click", closeModal));

function closeModal() {
  modalbg.style.display = "none";
}
