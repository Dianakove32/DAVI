function user () {
    const userPageProgress = document.getElementsByTagName("title")[0].innerHTML;
    const userPageDate = new Date();

    function pageProgress(){
        if(localStorage.getItem(`${userPageProgress}Page`) === null){
            localStorage.setItem(`${userPageProgress}Page`, 1);
        }
        else{
            localStorage[`${userPageProgress}Page`] = parseInt(localStorage[`${userPageProgress}Page`]) + 1;
            localStorage.setItem(`${userPageProgress}Date`, userPageDate);
        }
    }

    if(userPageProgress !== "Welcome page" || userPageProgress !== "JavaScript"){
        userSessionLoad();
    }else{

    }
    
    pageProgress();

}

function userSessionLoad(){
    const links = document.querySelectorAll('.introduction-item');
    for (let i of links){
        if(sessionStorage[i.innerHTML]){
            i.style.color = "orange";
        }
    }
}



export default user;