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