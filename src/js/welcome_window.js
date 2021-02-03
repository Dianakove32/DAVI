const modalHeader = document.querySelector('.modal-header');
const modalContent = document.querySelector('.modal-content');
const modalFooter = document.querySelector('.modal-footer');

const pagesNames = ["Welcome page", "HTML", "CSS", "JavaScript", "Git"];

function createEl(type, identifier = '', classes = [], innerText = '') {
    const resultElement = document.createElement(type);
    if (identifier !== '') resultElement.id = identifier;

    if (classes.length > 0) {
        for (let cl of classes) {
            resultElement.classList.add(cl);
        }
    }
    if (innerText !== undefined) resultElement.innerHTML = innerText;

    return resultElement;
}

export default function welcome() {
    let welcomePopup;
    let inputPopup;
    let welcomeButton;
    let nameUser;
    let welcomeUser;


    welcomeScreen();

    function welcomeScreen() {
        modalHeader.innerHTML = "Welcome Traveller!";
        modalContent.insertAdjacentHTML('afterbegin', '<div class="welcome"><h3>Enter your Nickname:</h3><input class="welcome-input" type="text" placeholder="name"/></div>');
        createUser();
    }

    function createUser() {
        welcomeButton = createEl("button", "welcome-button", ["button", "success"], "Continue");
        welcomeButton.disabled = true;
        modalFooter.append(welcomeButton);
        inputPopup = document.querySelector('.welcome-input');
        welcomePopup = document.querySelector('.welcome');
        inputPopup.addEventListener('keyup', (e) => {
            if (inputPopup.value !== "") {
                welcomeButton.disabled = false;
            } else {
                welcomeButton.disabled = true;
            }
        })
        welcomeButton.addEventListener('click', () => {
            nameUser = inputPopup.value;
            welcomePopup.innerHTML = "";
            modalFooter.innerHTML = "";
            enterThePage();
        })

    }

    function enterThePage(level) {
        document.getElementById("avatar").style.display = "block";
        document.getElementById("sign-in").style.display = "none";

        //  modalHeader.innerHTML = `Well, ${nameUser} your level is: ${level} `;
        localStorage.setItem('userName', `${nameUser} `);
        checkUser();
        // нужно очищать окно при нажатии на кнопку
    }
}

// Switch avatars
function swapAvatar(isLogged) {
    document.getElementById("avatar").style.display = "block";
    document.getElementById("sign-in").style.display = "none";
}

//check if user already exists 

document.addEventListener("DOMcontentLoaded", checkUser());
function checkUser() {
    let userName = localStorage.getItem('userName');
    //   console.log(userName)
    if (userName != null) {
        document.getElementById("avatar").style.display = "inline";
        document.getElementById("sign-in").style.display = "none";
        modalHeader.innerHTML = `Welcome, <span>${localStorage.getItem('userName')}</span>`;
        modalContent.innerHTML = "";
        modalContent.insertAdjacentHTML('afterbegin', `<h3>Check this quote: <i class="welcome-api"></i></h3><h3 class="welcome-user-level"> let's see your <span>statistics:</span></h3>
        <div class="welcome-statistic"></div>
        <p class="disclaimer">We do not collect or use the information you provided here. All your personal data is stored in the browser's local storage on your computer.</p>
            `);
        getQuote();
        getUserStatistic();

        const paranojaButton = createEl("label", "", ["button", "beware", "welcome-reset-button"], "Delete my data and log me out");
        paranojaButton.for = "modal-css";
        modalFooter.append(paranojaButton);
        // reset the user statistic
        paranojaButton.addEventListener('click', () => {
            //  setTimeout(() => {
            localStorage.clear();
            window.location.reload();
            //   }, 1000);

        });
    }
    else {
        welcome();
    }
}

// add statistic in modal Window
function getUserStatistic() {
    const welcomeStatictic = document.querySelector('.welcome-statistic');
    for (let i of pagesNames) {
        let date = localStorage[i + "Date"];
        let visitPage = localStorage[i + "Page"];
        let scoreQuiz = localStorage[i + "Quiz"];
        scoreQuiz = scoreQuiz == undefined ? "0" : scoreQuiz;
        date = date == undefined ? "-" : date.slice(0, 24);
        visitPage = visitPage == undefined ? "0" : visitPage;
        welcomeStatictic.insertAdjacentHTML('beforeend', `<div><p><b>${i}</b> visits: <span>${visitPage}<span></p>
        <p><b>last</b> visit: <span style="font-size: 10px; color: #000; margin-right: 10px">${date}</span></p>
        <p><b>Quiz</b> records: ${scoreQuiz} points</p></div>`)
    }
}
// get the Api quote
async function getQuote() {
    const url = "https://api.adviceslip.com/advice"
    const data = await fetch(url);
    const result = await data.json();
    document.querySelector('.welcome-api').textContent = result.slip.advice;
}