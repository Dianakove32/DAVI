export default function welcome() {
    const welcomeTitle = document.querySelector('.welcom-img');
    const welcomeBody = document.querySelector('body');
    let welcomePopup;
    let inputPopup;
    let welcomeButton;
    let nameUser;
    let welcomeWindow;
    let all
    let welcomeUser;


    welcomeScreen();

    function welcomeScreen() {
        welcomeWindow = document.createElement('div');
        welcomeWindow.className = 'welcome-popup-background';
        welcomeWindow.insertAdjacentHTML('afterbegin', '<div class="welcome-popup"><h2>Welcome Traveler!</br>What is your Nickname:</h2><input  class="welcome-input" type="text" placeholder="name"/><div id="welcome-button"><h2>I am ready</h2></div></div>');
        welcomeBody.appendChild(welcomeWindow);
        welcomeButton = document.getElementById('welcome-button');
        welcomePopup = document.querySelector('.welcome-popup');
        all = document.querySelectorAll(".wrapper, footer, .welcom-img, .header");
        for (let i = 0; i < all.length; i++) {
            all[i].style.display = "none";
        }

        createUser();
    }

    function createUser() {
        inputPopup = document.querySelector('.welcome-input');
        inputPopup.addEventListener('keydown', (e) => {
            welcomeButton.className = 'welcome-button';
        })
        welcomeButton.addEventListener('click', ()=>{
            nameUser = inputPopup.value;
            welcomePopup.innerHTML ="";
            welcomePopup.insertAdjacentHTML('afterbegin',`<h2>Choose your level ${nameUser}:</h2><div class="smash"><div class="welcome-smash1">
            </div><div class="welcome-smash2"></div></div>`)
            const noobButton = document.querySelector(".welcome-smash1");
            const proButton = document.querySelector(".welcome-smash2");
            noobButton.addEventListener('click', () =>{
                enterThePage("newbie")})
            proButton.addEventListener('click', () => {
                enterThePage("intermidiate")})
        })
       
    }

    function enterThePage(level) {
        for (let i of all){
            i.style.display = 'flex';
        }
        welcomeUser = document.querySelector('.welcome-user');
        welcomeUser.innerHTML = `Well ${nameUser} \n your level is: ${level}`;
        welcomeBody.removeChild(welcomeWindow);
        localStorage.setItem('userName', `${nameUser}`);
        localStorage.setItem('levelOfUser', `${level}`)
    }
}