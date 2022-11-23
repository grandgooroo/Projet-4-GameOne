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
const formCloseBtn = document.querySelectorAll(".close");
const form = document.querySelector("form");

// Get Form inputs
const firstName = document.getElementById("firstName");
const first = document.getElementById("first");
const Name = document.getElementById("name");
const nameReg = new RegExp(/^[A-zÀ-ú-']{2,}$/);
const eMail = document.getElementById("mail");
const emailReg = new RegExp(/^([\w-]+(?:\.[\w-]+)*)@((?:[\w-]+\.)*\w[\w-]{0,66})\.([a-z]{2,6}(?:\.[a-z]{2})?)$/);
const birthDate = document.getElementById("birthDate");
// const birthDateReg = new RegExp(/^[0-9]{2}-[0-9]{2}-[0-9]{4}$/);
// const quantityReg = new RegExp(/^[0-9]{1,2}$/);
const quantity = document.getElementById("quantity");
const quantityReg = (/^\d+$/);
const city = document.querySelectorAll("input[type=radio]");
const generalCondition = document.getElementById("checkbox1");
const newsletter = document.getElementById("checkbox2");
const msgError = document.getElementsByClassName("msgerror");

// Form start

function hideForm() {
  let modalForm = document.querySelector(".content");
  modalForm.classList.add("hidden");
  modalForm.setAttribute("dialog", "dialog");

  let contentValid = document.createElement("div"); // Create div for show valid content msg
  let divValide = document.querySelector(".bground");
  divValide.appendChild(contentValid);
  contentValid.className = "content2";

  let contentValidP = document.createElement("p");
  contentValid.appendChild(contentValidP);

  contentValidP.className = "valid-txt";
  contentValidP.textContent = "Merci pour vôtre inscription";

  // Continue button creation
  let btnValid = document.createElement("button");
      
  btnValid.type = "submit";
  btnValid.value = "reset";
  btnValid.className = "btn-submit-valid";
  btnValid.textContent = "Fermer";

  contentValid.appendChild(btnValid);

  // onclick = closeModal();

  btnValid.addEventListener("click", () =>
  {
    let modalForm = document.querySelector(".content");
    closeModal()
    form.reset()
    contentValid.remove(); // Remove the div content valid
    modalForm.classList.remove("hidden"); // Restore the div content empty form
    btnValid.remove();
  })

  }

form.addEventListener("submit", (e) => {
  e.preventDefault();
  
// Variables
let firstNameInput = document.querySelector("#firstName input");
let lastNameInput = document.querySelector("#name input");
let emailInput = document.querySelector("#mail input");
let birthDateInput = document.querySelector("#birthDate input");
let quantityInput = document.querySelector("#quantity");
let cityMsgInput = document.querySelector("#location");
let cguMsgInput = document.querySelector("#checkbox");
let inputsErrorMsg = document.querySelectorAll("input");
let formIsValid = true;

  // clear CSS error messages
  function clearMsg()
  {
    let clear = document.querySelectorAll(".msgerror");
    if (clear != null)
      {
        clear.forEach(msgerror => {
          msgerror.remove();
          console.log("masquer les messages");

        });
      }
  }
  clearMsg()

  //  CSS Red border reset
  for (const input of inputsErrorMsg){
  input.parentNode.dataset.errorVisible = false;
  }

function createMsgError(inputX, errorMsgX) {
  let p = document.createElement("p")
  p.className = "msgerror";
  p.textContent = errorMsgX;
  inputX.after(p);
  inputX.parentNode.dataset.errorVisible = true; // Select CSS class Red border On
}

    // First name input
    if (firstNameInput.value === "") // Test if first name is empty
    {
      createMsgError(firstNameInput, "Le champ Prenom est obligatoire.");
      formIsValid = false;
      console.log(formIsValid);
    } else {

      if (!nameReg.test(firstNameInput.value)) // Test if first name match with Regex
      {
        createMsgError(firstNameInput, "Le Prenom doit avoir deux characters minimum.");
        formIsValid = false;  
      } else {}
    }

    // Last name input
    if (lastNameInput.value === "") // Test if last Name is empty
    {
      createMsgError(lastNameInput, "Le champ Nom est obligatoire.")
      formIsValid = false;
    } else {

      if (!nameReg.test(lastNameInput.value)) // Test if last name match with Regex
      {
        createMsgError(lastNameInput, "Le Nom doit avoir deux characters minimum.");
        formIsValid = false;
      }
    }

    // Email  input
    if (emailInput.value === "") // Test if e-mail is empty
    {
      createMsgError(emailInput, "Le champ E-mail est obligatoire.");
      formIsValid = false; 
    }
    
    else if (!emailReg.test(emailInput.value)) // Test if e-mail match with Regex
    {
      createMsgError(emailInput, "Veuillez renseigner une E-mail valide.");
      formIsValid = false;    
    }

    // Check birthDate
  
  let date = new Date(document.getElementById("birthdate").value);
  let today = new Date();

  if (!birthDateInput.value) 
  {
    createMsgError(birthDateInput, "Veuillez renseigner une date valide.");
    formIsValid = false; 
  }

  if (date > today)
  {
    console.log("Date incorrecte"); 
    formIsValid = false;
  }
  // if (!birthDateReg.test(birthDateInput.value)) // Ajouter contrainte 4 chiffres Regex.
  // {
  //   console.log("Année incorrecte");
  // } 

    // Check Tournament
let quantityMax = document.getElementById("quantity").max = 99; 

 if (quantity.value.length !== "") // Test if Tournament is empty
    {
      console.log("Tournament OK");
    } 
    
if (!quantityReg.test(quantityInput.value)) // Test if first name match with Regex
    {
      createMsgError(quantityInput, "Renseigner un chiffre uniquement.");
      formIsValid = false; 
    }
    // Check City

let count = 0;

  for (let i = 0; i < city.length; i++)
  {
    if (city[i].checked) 
    {
      count++;
    }
  }
    if (!count)
  {
    createMsgError(cityMsgInput, "Veuillez cocher une ville.");
    formIsValid = false; 
  }

      // Check CGU
  if (generalCondition.checked)
  {}  else {
    createMsgError(cguMsgInput, "Veuillez cocher les CGU.");
    formIsValid = false; 
  }

    // Check Newsletter
  if (newsletter.checked)
  {}  else {
    console.log("Newsletter Non coché");
  }

// Send form
  
  // Validation

    if (formIsValid == true) { // If all fields are valid then hide form
    console.log(formIsValid);
      hideForm()
    }
  
});



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
