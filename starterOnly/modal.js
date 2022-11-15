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
const input = document.querySelectorAll("input");

// Get Form inputs
const firstName = document.getElementById("firstName");
const first = document.getElementById("first");
const Name = document.getElementById("name");
const nameReg = new RegExp(/^[A-zÀ-ú-']{2,}$/);
const eMail = document.getElementById("mail");
const emailReg = new RegExp(/^([\w-]+(?:\.[\w-]+)*)@((?:[\w-]+\.)*\w[\w-]{0,66})\.([a-z]{2,6}(?:\.[a-z]{2})?)$/);
const birthDate = document.getElementById("birthDate");
const birthDateReg = new RegExp(/^[0-9]{2}-[0-9]{2}-[0-9]{4}$/);
const quantityReg = new RegExp(/^[0-9]{1,2}$/);
const quantity = document.getElementById("quantity");
const city = document.querySelectorAll("input[type=radio]");
const cityN = document.querySelectorAll("input[name=location]"); //
const generalCondition = document.getElementById("checkbox1");
const newsletter = document.getElementById("checkbox2");

const msgError = document.getElementsByClassName("msgerror");

const isRequired = value => value === '' ? false : true;
const isBetween = (length, min, max) => length < min || length > max ? false : true;

// Form start

form.addEventListener("submit", (e) => {
  e.preventDefault();
  
// Variables
let firstNameInput = document.querySelector("#firstName input");
let lastNameInput = document.querySelector("#name input");
let emailInput = document.querySelector("#mail input");
let birthDateInput = document.querySelector("#birthDate input");
let cityMsgInput = document.querySelector("#location");
let cguMsgInput = document.querySelector("#checkbox");
let inputsErrorMsg = document.querySelectorAll("input");
let formIsValid = true;

  // clear error messages
  let clear = document.querySelectorAll(".msgerror"); // Clear
  if (clear != null)
  {
  clear.forEach(msgerror => {
    msgerror.remove();
    console.log("masquer les messages");
  });
  }

  //  Red border reset
  for (const input of inputsErrorMsg){
  input.dataset.errorVisible = false;
  }

function createMsgError(inputX, errorMsgX) {
  let p = document.createElement("p")
  p.className = "msgerror";
  p.textContent = errorMsgX;
  inputX.after(p);
  inputX.dataset.errorVisible = true; // Red border On
}

    // Firts name input
    if (firstNameInput.value === "") // Test if first name is empty
    {
      createMsgError(firstNameInput, "Le champ Prenom est obligatoire.")
      formsIsvalid = false;
    } else {

      if (!nameReg.test(firstNameInput.value))
      {
        let p = document.createElement("p");
        
        p.className = "msgerror";
        p.textContent = "Le Prenom doit avoir deux characters minimum.";
        firstNameInput.after(p);
        
        firstName.dataset.errorVisible = true; // Red border On
        console.log("Prenom non valide"); // Test if first name match with Regex
      } else {
        firstName.dataset.errorVisible = false; // Red border Off // desactiver Border rouge !!!
      }
    }

    // Last name input
    if (lastNameInput.value === "") // Test if last Name is empty
    {
      let p = document.createElement("p");

      p.className = "msgerror";
      p.textContent = "Le champ Nom est obligatoire.";
      lastNameInput.after(p); 
      console.log("test last name");
    } else {

      if (!nameReg.test(lastNameInput.value))
      {
        let p = document.createElement("p");

        p.className = "msgerror";
        p.textContent = "Le Nom doit avoir deux characters minimum.";
        lastNameInput.after(p);
        console.log("Nom non valide"); // Test if last name match with Regex
      }
    }
    // Email  input
    if (emailInput.value === "") // Test if E-mail is empty
    {
      let p = document.createElement("p");

      p.className = "msgerror";
      p.textContent = "Le champ E-mail est obligatoire.";
      emailInput.after(p); 
      console.log("test e-mail vide");
    }
    
    // if(!eMail.match(emailReg))
    if (!emailReg.test(emailInput.value))
    {
    console.log("test e-mail valide");
    }

    // Check birthDate
  
  let date = new Date(document.getElementById("birthdate").value);
  let today = new Date();

  if (!birthDateInput.value) 
  {
    let p = document.createElement("p");

    p.className = "msgerror";
    p.textContent = "Veuiller renseigner une date valide.";
    birthDateInput.after(p); 
  }

  if (date > today)
  {
    console.log("Date incorrecte"); 
  }
  // if (!birthDateReg.test(birthDateInput.value)) // Ajouter contrainte 4 chiffres Regex.
  // {
  //   console.log("Année incorrecte");
  // } 
  else {
  }
  
    // Check Tournament
let quantityMax = document.getElementById("quantity").max = 9;

 if (quantity.value.length !== "") // Test if Tournament is empty
    {
      console.log("Tournament OK");
    } 

    // Check  City

let count = 0;

  for (let i = 0; i < city.length; i++)
  {
    if (city[i].checked) 
    {
      count++;
    console.log("Ville OK");
    }
  }
  if (!count)
  {
    let p = document.createElement("p");

    p.className = "msgerror";
    p.textContent = "Veuiller cocher une ville";
    cityMsgInput.after(p);

    console.log("Veuiller cocher une ville");
  }

      // Check CGU
  if (generalCondition.checked)
  {}  else {
    console.log("Veuillez cocher les CGU");

    let p = document.createElement("p");

    p.className = "msgerror";
    p.textContent = "Veuillez cocher les CGU";
    cguMsgInput.after(p);
  }

    // Check Newletter
  if (newsletter.checked)
  {}  else {
    console.log("Newsletter Non coché");
  }

// Send form Si tous les champs sont valides alors fermer la modal

// Hide form Inputs
// for (let formData of form) {
//   console.log(input)
//   formData.classList.add("hidden");
// }

function hideForm() {
  let modalForm = document.querySelector("content");
  modalForm.classList.add("hidden");
}

// hideForm()

// Show validation message

// let contentValid = document.createElement("div");
// contentValid.classList.add = "contentValide";

function showValid() {

  let content = document.createElement("div");
  
  content.style = "content";

  let valideP = document.createElement("p");

  valideP.style.margin = "380px 40px 380px 40px";
  valideP.textContent = "Merci pour votre inscription";

  // Continue button creation
  let btnValide = document.createElement("button");
  
  btnValide.type = "submit";
  btnValide.className = "btn-submit";
  btnValide.textContent = "Fermer";

  let divValide = document.querySelector(".modal-body");
  divValide.appendChild(content);
  divValide.appendChild(btnValide);
  content.appendChild(valideP);

  // onclick = closeModal();
  
  // btnValide.addEventListener("click", () => {
  //   closeModal() 
  //   window.location.reload();
  // })
}

// showValid()

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
