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

// Get Form inputs
const firstName = document.getElementById("first");
const Name = document.getElementById("last");
const nameReg = new RegExp(/^[A-zÀ-ú-']{2,}$/);
const eMail = document.getElementById("mail");
const emailReg = new RegExp(/^[\w-\.]+@([\w-]+\.)+[\w-]{2,}$/);
const birthDate = document.getElementById("birthDate");
const erreur = document.getElementsByClassName(".errorMsg");


form.addEventListener("submit", (e) => 
{
  if (emptyForm() === true) 
  {
    addValidationMsg();
  }
  e.preventDefault();

  invalidForm()
});

function emptyForm()
{
  let checkEmpty = document.forms["first"]["name"]["mail"].value;
  if (checkEmpty == "")
  {
    console.log("Stop le script");
    alert ("Merci de renseigner les champs vides.");
    return false;
  }
  return true;
}

function addValidationMsg() {
  alert("Ok");
}

function invalidForm() 
{
  const firstNameValue = firstName.value.trim(); // Vérifier les espacements
  const NameValue = Name.value.trim();
  const eMailValue = eMail.value.trim(); 
};

function validateFirstName()
{
  let vname = firstName.value;
  if(vname.length == 0)
  {
    firstNameError.getElementById("first").innerHTML = "Le champs ne doit pas être vide";
    return false;
  }
  if(!firstName.matches(/^[A-zÀ-ú-']{2,}$/))
  {
    firstNameError.getElementById("first").innerHTML = "Veuillez rentrer un prenom valide";
    return false;
  }
  firstNameError.getElementById("first").innerHTML = "Valide"
  return true;
}

function validate()
{
  alert("Inscription validé");
}

//----------------------------------------------------------------

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
