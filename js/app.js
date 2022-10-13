

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




