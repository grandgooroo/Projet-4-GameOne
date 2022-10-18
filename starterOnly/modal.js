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
const input = document.querySelector("input");

// Get Form inputs
const firstName = document.getElementById("firstName");
const first = document.getElementById("first");
const Name = document.getElementById("name");
const nameReg = new RegExp(/^[A-zÀ-ú-']{2,}$/);
const eMail = document.getElementById("mail");
const emailReg = new RegExp(/^[\w-\.]+@([\w-]+\.)+[\w-]{2,}$/);
const birthDate = document.getElementById("birthDate");
const msgError = document.getElementsByClassName("msgerror");

const toto = document.getElementsByClassName("toto");

const isRequired = value => value === '' ? false : true;
const isBetween = (length, min, max) => length < min || length > max ? false : true;

// Form start





// form.addEventListener("focus", (e) => {
//   e.target.style.background = "red";
// }, true);

// form.addEventListener("blur", (e) => {
//   e.target.style.background = "";
// }, true);

form.addEventListener("submit", (e) => {
  e.preventDefault();
    
  // let checkIsEmpty = formData.forEach((input) => 
  // {
  //   if (input.value === "") {
  //     alert("Veuillez remplir le formulaire");
  //     console.log("Veuillez remplir le formulaire");
  //     return false;
  //   }
  // })
  while (input.value === "") {
    alert("Veuillez remplir le formulaire");
    return false;
  }
  
    let firstNameInput = document.querySelector("#firstName input");
    let lastNameInput = document.querySelector("#name input");
    let emailInput = document.querySelector("#mail input");
    let birthDate = document.querySelector("#birthDate input");
    
    if (firstNameInput.value === "") // Test if first name is empty
    {
      let p = document.createElement("p");
      p.className = "msgerror";
      p.textContent = "Le champ Prenom est obligatoire";
      firstNameInput.after(p); 
      console.log("test first name");
      return false;
    } 
    // else if (!firstNameInput.value(nameReg))
    // {
    //   let p = document.createElement("p");
    //   p.className = "msgerror";
    //   p.textContent = "Veuillez renseigner un Prenom valide (2 characters minimum)";
    //   firstNameInput.after(p); 
    // }
    if (lastNameInput.value === "") // Test if last Name is empty
    {
      let p = document.createElement("p");
      p.className = "msgerror";
      p.textContent = "Le champ Nom est obligatoire";
      lastNameInput.after(p); 
      console.log("test last name");
      return false;
    }

    if (emailInput.value === "") // Test if E-mail is empty
    {
      let p = document.createElement("p");
      p.className = "msgerror";
      p.textContent = "Le champ E-mail est obligatoire";
      emailInput.after(p); 
      console.log("test e-mail");
      return false;
    }

    if (birthDate.value === "") // Test if Birth Date is empty
    {
      let p = document.createElement("p");
      p.className = "msgerror";
      p.textContent = "Le Date de naissance est obligatoire";
      birthDate.after(p); 
      console.log("test date");
      return false;
    }
    
    
  // if (location1.checked) {// Fonction de validation de coches
  //   // msgError.innerHTML = "ta maman";
  // } else {
  //   alert("Veuillez cocher une ville")
  // }
    // validate the form
});

// // Check if form is not empty
// function checkInputs()
// {
//   const firstNamevalue = first.value.trim();
//   const Namevalue = Name.value.trim();

//   if(firstValue === "") {
//     // show error message
    

//     // add error className
//     setErrorFor(first, "Veuillez rensigner un prénom")
//   } else
//     {
// // add success className
//       setSuccessFor(first);
//     }
// }

// function setErrorFor(input, message)
// {
//   const formControl = input.parentElement; // .form-control
//   const showErrorMsg = formControl.querySelector("formData");
//   //add error message inside input
//   formData.innerText = message;
//   //add error className
//   formControl.className = "data-error-visible";
// }

// Set validation input message
// function setValidationMessage(element, message)
// {
//   element.setAttribute("data-error-visible", true);
//   element.setAttribute("data-error", message);
// }
// // Clear validation input message
// function clearValidationMessage(element) 
// {
//   element.setAttribute("data-error-visible", false);
//   element.setAttribute("data-error", "");
// }


// form.addEventListener("input", function (e) {
//   switch (e.target.id) {
//       case "first":
//           checkfirstName();
//           break;
//       case "last":
//           checkLast();
//           break;
//       case "mail":
//           checkEmail();
//           break;
//   }
// });

// firstName.addEventListener("input", checkfirstName);

// function checkfirstName () {

//   if(firstName.length == 0)
//     {
//     alert("Veuillez renseigner votre prenom");
//     firstName.innerHTML = "ta maman";
//     return true;
//     }
// };
// function validateFirstName = (firstName) =>
// {
//   let vName = firstName.value;
//   let vName = document.getElementById("first").innerHTML;
//   if(vName.length == 0)
//     {
//     alert("Veuillez renseigner votre prenom");
//     // document.firstName.style.background = "Yellow";
//     // firstName.setAttribute("data-error-visible", "true");
//     // firstName.setAttribute("data-error", "toto");
//     return false;
//     }
//   // {
//   //   firstNameError.getElementById("first").innerHTML = "Le champs ne doit pas être vide";
//   //   firstNameError.getElementById("first").value = "Le champs ne doit pas être vide";
//   //   document.getElementById("first").textContent = "Le champs ne doit pas être vide";
//   //   setValidationMessage(firstName, "toto")
//   // }
//   if(!firstName.matches(/^[A-zÀ-ú-']{2,}$/))
//   {
//     firstNameError.getElementById("first").innerHTML = "Veuillez rentrer un prenom valide";
//   }
//   return true;
// }

// function validateEmail()
// {
//   // if(!eMail.matches(emailReg))
//   if (emailReg.test(eMail) === false)
//   alert("Veuiller entrer une adresse e-mail valide");
//   return true;
//   // {
//   //   emailError.getElementById("email").innerHTML = "Veuillez rentrer une adresse e-mail valide";
//   // }
//   // returne true;
// }

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
