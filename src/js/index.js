//burger
const btn = document.querySelector('.header__burger');
const menuBur = document.querySelector('.burger-menu')
btn.addEventListener('click', function () {
  btn.classList.toggle('active');
  menuBur.classList.toggle('active');
  document.body.classList.toggle('lock')
})

//modal
let linkModal=document.querySelectorAll("*[data-modal-btn]")
for(let i=0;i<linkModal.length;i++){
    linkModal[i].addEventListener('click', function(){
        let name=linkModal[i].getAttribute('data-modal-btn');
        let modal=document.querySelector("[data-modal-window='"+name+"']")
        modal.style.display="block"
        document.body.classList.add('lock')
        let closeModal=modal.querySelector('.close_modal_window')
        closeModal.addEventListener('click', function(){
            modal.style.display="none"
            document.body.classList.remove('lock')
        })
    })
}
window.onclick=function(e){
    if(e.target.hasAttribute('data-modal-window')){
        let modals=document.querySelectorAll("*[data-modal-window]")
        for(let i=0;i<modals.length;i++)
       modals[i].style.display="none";
       document.body.classList.remove('lock')
    }
}

//slider
const buttonsWrapper = document.querySelector(".map");
const slides = document.querySelector(".slider-track");

buttonsWrapper.addEventListener("click", e => {
  if (e.target.nodeName === "BUTTON") {
    Array.from(buttonsWrapper.children).forEach(item =>
      item.classList.remove("active")
    );
    if (e.target.classList.contains("first")) {
      slides.style.transform = "translateX(-0%)";
      e.target.classList.add("active");
    } else if (e.target.classList.contains("second")) {
      slides.style.transform = "translateX(-33%)";
      e.target.classList.add("active");
    } else if (e.target.classList.contains('third')){
      slides.style.transform = 'translatex(-50%)';
      e.target.classList.add('active');
    }
  }
});

//scroll
const menu=document.querySelector('.navigation')

console.log(menu)
menu.addEventListener('click', (event)=>{
menu.querySelectorAll('a').forEach(el => el.classList.remove('active'));
  event.target.classList.add('active');
})