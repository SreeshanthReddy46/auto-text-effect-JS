const containerEl = document.querySelector(`.container`);

const carrers = ["Youtuber", "Freelancer", "Contentcreator", "Rider"];

let carrerIndex = 0;
let characterIndex = 0;

updateText();

function updateText(){
    characterIndex++;
    containerEl.innerHTML = `
<h1> I am a ${carrers[carrerIndex].slice(0, characterIndex)} </h1>
`;
   if (characterIndex === carrers[carrerIndex].length){
       carrerIndex++;
       characterIndex = 0; 
   }
    setTimeout(updateText, 200);
}
