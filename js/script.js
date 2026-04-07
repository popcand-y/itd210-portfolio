const characters = [

{
name: "Star Kitty",
image: "gallery/cat.png"
},

{
name: "Peach Monkey",
image: "gallery/monkey.png"
},

{
name: "Honey Bear",
image: "gallery/bear.png"
}

];

let currentCharacter = 0;

function updateCharacter(){

const img = document.getElementById("characterImage");
const name = document.getElementById("characterName");

/* safety so other pages don’t break */
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
function revealOnScroll() {
  const reveals = document.querySelectorAll(".reveal");

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
