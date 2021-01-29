import user from './user.js';
const arrayDidYouKnow = ["The most fast for loop is default one : for(let i=0; i<array.length; i++)", "Try sometimes this : console.log(console)",
"if you tired of if|else statement try ternary operator (?)"].sort((a,b) => 0.5 - Math.random());
const randomPhrase = document.querySelector('.didYouKnow-phrase');
const didYouKnowArrows = document.querySelectorAll(".didYouKnow-button");
let randomPhraseIndex = Math.floor(Math.random() * arrayDidYouKnow.length);
randomPhrase.innerHTML = arrayDidYouKnow[randomPhraseIndex];
for(let i of didYouKnowArrows){
    i.addEventListener('click', (e)=>{
        if(e.target.value === '&laquo'){
            randomPhraseIndex = (randomPhraseIndex - 1) % arrayDidYouKnow.length;
            randomPhrase.innerHTML = arrayDidYouKnow[randomPhraseIndex-1];
        }
        else{ 
            randomPhraseIndex = (randomPhraseIndex + 1) % arrayDidYouKnow.length;
            randomPhrase.innerHTML = arrayDidYouKnow[randomPhraseIndex];
        }
    })
}



const contLinks = document.querySelector('.introduction-links');
const links = document.querySelectorAll('.introduction-item');
const outPutLinks = document.querySelectorAll('.outPut-html__info');
const otputInfo = document.getElementById('otPutInfo');
const outputTitle = document.getElementById('output-title');
let arrLink = [];
let arrOutPutLinks = [];

user();

links.forEach(element => {

    element.addEventListener('click', (e) => {
        let target = 'outPut-html__info ' + e.target.textContent.toLowerCase();
        for (let i = 0; i < outPutLinks.length; i++) {
            let name = outPutLinks[i].className

            if (name == target) {
                sessionStorage.setItem(e.target.innerHTML, true);
                otputInfo.innerHTML = outPutLinks[i].outerHTML
                outputTitle.innerText = e.target.innerText
                break;
            } else {
                otputInfo.innerHTML = "nothing"
            }
        }
    })
})