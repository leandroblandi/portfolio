
const form = document.querySelector(".contact-form__form");

// Cuando cargue el documento
document.addEventListener("DOMContentLoaded", ()=> {
  
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
});

// Cuando se intente realizar un submit del formulario
form.addEventListener("submit", (event)=> {
  
  event.preventDefault();

  let name = document.querySelector("#senderName");
  let subject = document.querySelector("#senderSubject");
  let message = document.querySelector("#senderMessage");

  // Si los campos estan vacios
  if(name.value === "") {
    window.alert("Oops! Your name is required. Type it :)");
    return;
  }

  if(subject.value === "") {
    window.alert("Oops! What's the subject of your message? Type it :-)");
    return;
  }

  if(message.value === "") {
    window.alert("Oops! The message is empty. Write something :-)");
    return;
  }

  // De lo contrario que se envie el formulario
  if((name.value != "") && (subject.value != "") && (message.value != "")) {
    form.submit();
  }
});