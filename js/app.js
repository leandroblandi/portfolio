
const form = document.querySelector(".contact-form__form");


function validateEmail(email) {
  let re = /\S+@\S+\.\S+/;
  return re.test(email);
}


function validateForm() {

  let name = document.querySelector("#senderName");
  let mail = document.querySelector("#senderSubject");
  let message = document.querySelector("#senderMessage");

  // Si los campos estan vacios
  if(name.value === "") {
    window.alert("Oops! Your name is required. Type it :)");
    return;
  }

  if(mail.value === "") {
    window.alert("Oops! What's your E-Mail? Type it :-)");
    return;
  }

  if(!validateEmail(mail.value)) {
    window.alert(`Seems that your e-mail called '${mail.value}' isn't valid. Check another :-(`);
  }

  if(message.value === "") {
    window.alert("Oops! The message is empty. Write something :-)");
    return;
  }

  // De lo contrario que se envie el formulario
  if((name.value != "") && (mail.value != "") && (validateEmail(mail.value)) && (message.value != "")) {
    form.submit();
  }
}


function startTypingDescription() {

  new TypeIt(".autotype",
  {
    strings: ["Trainee Developer", "Software Development Student"],
    speed: 120,
    lifeLike: true,
    cursor: true,
    cursorSpeed:900,
    loop: true,
    waitUntilVisible: true,
    breakLines: false
  }
  ).go();
}


// Cuando cargue el documento
document.addEventListener("DOMContentLoaded", ()=> {

  startTypingDescription();

});


// Cuando se intente realizar un submit del formulario
form.addEventListener("submit", (event)=> {
  
  event.preventDefault();

  validateForm();

});