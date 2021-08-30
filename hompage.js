/* GET DOM ELEMENTS */

// GET BUTTONS
const buttons = document.querySelectorAll(".btn");
const newGameBtn = buttons[0];
const howToPlayBtn = buttons[1];
const aboutBtn = buttons[2];
const backBtn1 = buttons[3];
const backBtn2 = buttons[4];

// GET PAGE ELEMENTS
const header = document.querySelector("header");
const intro = document.querySelector(".intro");
const footer = document.querySelector("footer");
const game = document.querySelector("#game");
const controls = document.querySelector(".controls");
const about = document.querySelector(".about");

/* ADD EVENT LISTENERS */
window.addEventListener("load", () => {
  // REVEAL GAME WHEN USER CLICKS NEW GAME
  newGameBtn.addEventListener("click", () => {
    game.style.display = "block";
    header.style.display = "none";
    intro.style.display = "none";
    controls.style.display = "none";
    footer.style.display = "none";
  });

  // SHOW INSTRUCTIONS WHEN USER CLICKS HOW TO PLAY
  howToPlayBtn.addEventListener("click", () => {
    intro.style.display = "none";
    controls.style.display = "flex";
  });

  aboutBtn.addEventListener("click", () => {
    intro.style.display = "none";
    about.style.display = "flex";
  });

  // GO BACK TO THE MAIN MENU
  backBtn1.addEventListener("click", () => {
    intro.style.display = "flex";
    controls.style.display = "none";
    about.style.display = "none";
  });

  backBtn2.addEventListener("click", () => {
    intro.style.display = "flex";
    controls.style.display = "none";
    about.style.display = "none";
  });
});
