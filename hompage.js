/* GET DOM ELEMENTS */

// GET BUTTONS
const buttons = document.querySelectorAll(".btn");
const newGameBtn = buttons[0];
const howToPlayBtn = buttons[1];
const backBtn = buttons[2];

// GET PAGE ELEMENTS
const header = document.querySelector("header");
const intro = document.querySelector(".intro");
const footer = document.querySelector("footer");
const game = document.querySelector("#game");
const controls = document.querySelector(".controls");

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

  // GO BACK TO THE MAIN MENU
  backBtn.addEventListener("click", () => {
    intro.style.display = "flex";
    controls.style.display = "none";
  });
});
