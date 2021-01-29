const quizWrapper = document.querySelector('.game-quiz');
const quizStart = document.querySelector('.quiz-start');
const quizStartButton = document.querySelector('.quiz-start-button')
const quiz = document.querySelector('.quiz');
const quizQuestion = document.querySelector('.quiz-question');
const quizChoises = document.querySelector('.quiz-choices');
const quizAnswers = document.querySelectorAll(".answer");
const quizScore = document.querySelector('.quiz-start-score');
const quizTimer = document.querySelector('.quiz-timer-counter');
const quizTimerCounter = document.querySelector('.quiz-timer-progress');
const quizProgress = document.querySelector('.quiz-timer-currentProgress')
const page = document.getElementsByTagName("title")[0].innerHTML;
const audio = document.createElement('audio');
audio.src = './src/assets/tink.wav';
let question;
let progress = 0;
let goodquestion = 0;
const questionTime = 10;
let TIMER;
let countQuiz = 0;
let quizPoints = 0;


if(localStorage[`${page}Quiz`] != null){
    quizScore.textContent = `Your record is ${localStorage[`${page}Quiz`]} points.`;
}else{
    localStorage.setItem(`${page}Quiz`, 0);
}

quizStartButton.addEventListener("click", startQuiz);
for(let i of quizAnswers){
    i.addEventListener('click', (e) => {checkAnswer(e.target.textContent)
    })
   
}

function startQuiz(){
    quizStart.style.display = "none";
    quiz.style.display = "block";
    renderQuiz();
    renderCounter();
    TIMER = setInterval(renderCounter, 1000);
}


async function renderQuiz(){
    const url = `./src/js/json/${page}.json`
    const data = await fetch(url);
    const result = await data.json();
    question = result.sort((a,b) => 0.5 - Math.random());
    updateQuiz();
}

function renderCounter(){
    if(countQuiz <= questionTime){
        quizTimer.innerHTML = countQuiz;
        countQuiz++
    }else{
       checkAnswer('timesUp');
    }
}

function updateQuiz(){
    quizQuestion.innerHTML = `<h2>${question[progress].question}</h2>`;
    question[progress].answers.sort((a,b) => 0.5 - Math.random())
    for (let i=0; i< quizAnswers.length; i++){
        quizAnswers[i].innerHTML = `${question[progress].answers[i]}`;
    }
}

function endQuiz(){
    quizStart.style.display = "block";
    quiz.style.display = "none";
    progress = 0;
    quizScore.textContent = `You answered right ${goodquestion} questions out of ${question.length}. Your Points is ${quizPoints}`;
    quizStartButton.textContent = `Start quiz again?`;
    if(quizPoints > parseInt(localStorage[`${page}Quiz`])){
        localStorage.setItem(`${page}Quiz`, quizPoints);
    }
    quizPoints = 0;
    goodquestion = 0;
    quizProgress.style.width = `0px`;
    clearInterval(TIMER);
}

function checkAnswer(answer){
    countQuiz= 0;
    audio.currentTime = 0;
    audio.play();
    if(answer == question[progress].correctAnswer){
        progress++;
        goodquestion++;
        quizPoints += (10 - countQuiz) * 10;
    }
    else{
        progress++;
        
    }
    quizProgress.style.width = (progress * 146) / (question.length -1) + "px";
    progress == question.length ? endQuiz() : updateQuiz();
}