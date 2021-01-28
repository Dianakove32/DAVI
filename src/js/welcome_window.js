const modalHeader = document.querySelector('.modal-header');
const modalContent = document.querySelector('.modal-content');
const modalFooter = document.querySelector('.modal-footer');

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
            welcomePopup.innerHTML = `<h3>Choose your level ${nameUser}:</h3><div class="smash"><div class="welcome-smash1">
            </div><div class="welcome-smash2"></div></div>`;
            const noobButton = document.querySelector(".welcome-smash1");
            const proButton = document.querySelector(".welcome-smash2");
            noobButton.addEventListener('click', () => {
                enterThePage("newbie");
            })
            proButton.addEventListener('click', () => {
                enterThePage("intermidiate");
            })
        })

    }

    function enterThePage(level) {
        document.getElementById("avatar").style.display = "block";
        document.getElementById("sign-in").style.display = "none";

        //  modalHeader.innerHTML = `Well, ${nameUser} your level is: ${level} `;
        localStorage.setItem('userName', `${nameUser} `);
        localStorage.setItem('levelOfUser', `${level} `);
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
        modalContent.insertAdjacentHTML('afterbegin', `<h3 class="welcome-user-level"> Your level is <span>${localStorage.getItem('levelOfUser')}</span></h3><h3>Check this quote: <i class="welcome-api"></i></h3>
        <p>We do not collect or use the information you provided here.</p>
        <p>All your personal data is stored in the Local Storage of your browser of your local computer.</p>
            `);
        const paranojaButton = createEl("label", "", ["button", "beware", "welcome-reset-button"], "Delete my data and log me out");
        paranojaButton.for = "modal-css";
        modalFooter.append(paranojaButton);
        // reset the user statistic
        paranojaButton.addEventListener('click', () => {
            setTimeout(() => {
                localStorage.removeItem('userName');
                localStorage.removeItem('levelofUser');
                window.location.reload();
            }, 1000);

        });
    }
    else {
        welcome();
    }
}


// get the Api quote
async function getQuote() {
    const url = "https://api.adviceslip.com/advice"
    const data = await fetch(url);
    const result = await data.json();
    document.querySelector('.welcome-api').textContent = result.slip.advice;
}
getQuote(); 