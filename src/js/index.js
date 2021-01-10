//burger
const btn = document.querySelector('.header__burger');
const menuBur = document.querySelector('.burger-menu')
btn.addEventListener('click', function () {
  btn.classList.toggle('active');
  menuBur.classList.toggle('active');
  document.body.classList.toggle('lock')
})

//modal
let linkModal = document.querySelectorAll("*[data-modal-btn]")
for (let i = 0; i < linkModal.length; i++) {
  linkModal[i].addEventListener('click', function () {
    let name = linkModal[i].getAttribute('data-modal-btn');
    let modal = document.querySelector("[data-modal-window='" + name + "']")
    modal.style.display = "block"
    document.body.classList.add('lock')
    let closeModal = modal.querySelector('.close_modal_window')
    closeModal.addEventListener('click', function () {
      modal.style.display = "none"
      document.body.classList.remove('lock')
    })
  })
}
window.onclick = function (e) {
  if (e.target.hasAttribute('data-modal-window')) {
    let modals = document.querySelectorAll("*[data-modal-window]")
    for (let i = 0; i < modals.length; i++)
      modals[i].style.display = "none";
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
    } else if (e.target.classList.contains('third')) {
      slides.style.transform = 'translatex(-50%)';
      e.target.classList.add('active');
    }
  }
});

//scroll
const menu = document.querySelector('.navigation')

console.log(menu)
menu.addEventListener('click', (event) => {
  menu.querySelectorAll('a').forEach(el => el.classList.remove('active'));
  event.target.classList.add('active');
})

//scrolling
document.addEventListener('scroll', onScroll);
function onScroll(event) {
  const currentPosition = window.scrollY;
  const sect = document.querySelectorAll('section')
  const link = document.querySelectorAll('.navigation a');
  sect.forEach((el) => {
    if (el.offsetTop <= currentPosition && el.offsetTop + el.offsetHeight > currentPosition) {
      link.forEach((a) => {
        a.classList.remove('active');
        if (el.getAttribute('id') === a.getAttribute('href').substr(1)) {
          a.classList.add('active');
        }
      })
    }

  })

}

const animItems=document.querySelectorAll('.activeItemanime')
if (animItems.length > 0){
  window.addEventListener('scroll',animOnScroll);
  function animOnScroll(params){
    for (let index = 0; index < animItems.length; index++) {
      const animItem = animItems[index];
      const animItemHeight = animItem.offsetHeight; //get height of item
      const animItemOffset = offset(animItem).top;
      const animStart = 4;
      //высота окна браузера - высота анимированного обекта / коофициент
let animItemPoint = window.innerHeight - animItemHeight / animStart;
      //иногда аниминированный объект выше высоты браузера => перестроить момент старт
      if (animItemHeight > window.innerHeight){
        animItemPoint = window.innerHeight - window.innerHeight / animStart;
      }
      // если прокрутили больше,чем позиция щбъекта - точка старта, но меньше чем позиция объекта - его высота
      if (pageYOffset > (animItemOffset - animItemPoint) && pageYOffset< (animItemOffset - animItemHeight)){
animItem.classList.add('activeAnime')
      } else {
        //если не нужно анимировать при возврате к началу страницы
      if  (!animItem.classList.contains('anim-no-hide')){
        animItem.classList.remove('activeAnime')}
      }
    }
  }
}

function offset(el){
  const rect=el.getBoundingClientRect(),
  scrollLeft = window.pageXOffset || document.documentElement.scrollLeft,
  scrollTop = window.pageYOffset || document.documentElement.scrollTop;
  return {top: rect.top + scrollTop, left: rect.left + screenLeft}
}