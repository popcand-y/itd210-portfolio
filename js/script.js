// ================= CHARACTER CAROUSEL =================
const characters = [
{ name: "Star Kitty", image: "gallery/cat.png" },
{ name: "Peach Monkey", image: "gallery/monkey.png" },
{ name: "Honey Bear", image: "gallery/bear.png" }
];

let currentCharacter = 0;

function updateCharacter(){
const img = document.getElementById("characterImage");
const name = document.getElementById("characterName");

// Prevent errors on pages without this feature
if(!img || !name) return;

img.src = characters[currentCharacter].image;
name.textContent = characters[currentCharacter].name;
}

function nextCharacter(){
currentCharacter++;
if(currentCharacter >= characters.length){
currentCharacter = 0;
}
updateCharacter();
}

function prevCharacter(){
currentCharacter--;
if(currentCharacter < 0){
currentCharacter = characters.length - 1;
}
updateCharacter();
}

updateCharacter();


// ================= SCROLL ANIMATION =================
const reveals = document.querySelectorAll(".reveal");

if (reveals.length > 0) {

  function revealOnScroll() {
    for (let i = 0; i < reveals.length; i++) {
      const windowHeight = window.innerHeight;
      const elementTop = reveals[i].getBoundingClientRect().top;
      const revealPoint = 120;

      if (elementTop < windowHeight - revealPoint) {
        reveals[i].classList.add("active");
      }
    }
  }

  window.addEventListener("scroll", revealOnScroll);
  window.addEventListener("load", revealOnScroll);
}


// ================= VIDEO CONTROL =================
const video = document.getElementById("mainVideo");
const toggleBtn = document.getElementById("toggleVideo");

// Safe for all pages
if (video && toggleBtn) {

  toggleBtn.addEventListener("click", () => {

    if (video.paused) {
      video.play();
      toggleBtn.textContent = "Pause 💔";
    } else {
      video.pause();
      toggleBtn.textContent = "Play 💖";
    }

  });

}
