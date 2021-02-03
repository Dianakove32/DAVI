const arrayDidYouKnow = ["Before using Grid try Flexbox", "you can make animation with property @keyframes",
"you can use custom fonts. Just import Robato.", "Remember: mobile first", "use rem or em insted of px"].sort((a,b) => 0.5 - Math.random());
const randomPhrase = document.querySelector('.didYouKnow-phrase');
const didYouKnowArrows = document.querySelectorAll(".didYouKnow-button");
let randomPhraseIndex = 1;
randomPhrase.innerHTML = arrayDidYouKnow[randomPhraseIndex];
for(let i of didYouKnowArrows){
    i.addEventListener('click', (e)=>{
        if(e.target.textContent === '»'){
            randomPhraseIndex = (randomPhraseIndex + 1) % arrayDidYouKnow.length;
            randomPhrase.innerHTML = arrayDidYouKnow[randomPhraseIndex];
        }
        else{ 
            randomPhraseIndex = randomPhraseIndex - 1;
            randomPhraseIndex = randomPhraseIndex <=  0 ? (arrayDidYouKnow.length-1) : randomPhraseIndex;
            randomPhrase.innerHTML = arrayDidYouKnow[randomPhraseIndex];
        }
    })
}