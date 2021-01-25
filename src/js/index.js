import welcome from './welcome_window.js'
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
if (buttonsWrapper !== null) {
  /*checking if the buttonsWrapper is not null, i.e. the node with class .map exists in the dom tree.*/
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
  })
}

//Scroll
const headerWrapperHeight = document.querySelector('.header-wrapper').offsetHeight;
const anchors = document.querySelectorAll('.navigation a');
//smoothScroll.onClick
anchors.forEach(anchor => {
  anchor.addEventListener('click', (event) => {
    event.preventDefault();
    anchors.forEach(el => el.classList.remove('active')); // очистим все классы элементов меню от active
    anchor.classList.add('active'); // добавим active к тому, по которому кликнули
    const blockID = anchor.getAttribute('href').substr(1); // получим id блока, к которому будем скроллить
    const block = document.getElementById(blockID); // найдем узел нужного блока в DOM
    window.scrollTo({
      top: block.offsetTop - headerWrapperHeight,
      behavior: 'smooth',
    })
  })
})
//Changing the active point in menu while scrolling

document.addEventListener('scroll', onScroll);
function onScroll(event) {
  const currentPosition = window.scrollY + headerWrapperHeight; // + высота фиксированного меню (можно указать offsetHeight меню в шапке)
  /* if (currentPosition > 80) {
     document.querySelector('.header').classList.add('op');
   } else {
     document.querySelector('.header').classList.remove('op');
   } */
  const sect = document.querySelectorAll('section');
  // const link = document.querySelectorAll('.navigation a');
  sect.forEach((el) => {
    // console.log(el.offsetTop);
    if (el.offsetTop <= currentPosition && el.offsetTop + el.offsetHeight > currentPosition) {
      anchors.forEach((a) => {
        a.classList.remove('active');
        if (el.getAttribute('id') === a.getAttribute('href').substr(1)) {
          a.classList.add('active');
        }
      })
    }
  })
}

const animItems = document.querySelectorAll('.activeItemanime')
if (animItems.length > 0) {
  window.addEventListener('scroll', animOnScroll);
  function animOnScroll() {
    for (let index = 0; index < animItems.length; index++) {
      const animItem = animItems[index];
      const animItemHeight = animItem.offsetHeight; //get height of item
      const animItemOffset = offset(animItem).top;
      const animStart = 4;
      //высота окна браузера - высота анимированного обекта / коофициент
      let animItemPoint = window.innerHeight - animItemHeight / animStart;
      //иногда аниминированный объект выше высоты браузера => перестроить момент старт
      if (animItemHeight > window.innerHeight) {
        animItemPoint = window.innerHeight - window.innerHeight / animStart;
      }
      // если прокрутили больше,чем позиция щбъекта - точка старта, но меньше чем позиция объекта - его высота
      if (pageYOffset > (animItemOffset - animItemPoint) && pageYOffset < (animItemOffset - animItemHeight)) {
        animItem.classList.add('activeAnime')
      } else {
        //если не нужно анимировать при возврате к началу страницы
        if (!animItem.classList.contains('anim-no-hide')) {
          animItem.classList.remove('activeAnime')
        }
      }
    }
  }
}

function offset(el) {
  const rect = el.getBoundingClientRect(),
    scrollLeft = window.pageXOffset || document.documentElement.scrollLeft,
    scrollTop = window.pageYOffset || document.documentElement.scrollTop;
  return { top: rect.top + scrollTop, left: rect.left + screenLeft }
}

document.addEventListener('DOMContentLoaded', () => {

  let navline = document.querySelector('.nav_line');
  let navItem = document.querySelectorAll('.navigation__link');
  navline.style.width = `${navItem[0].offsetWidth}px`;
  // navItem.forEach(el => {
  for (let i = 0; i < navItem.length; i++) {

    navItem[i].addEventListener('mouseenter', (e) => {
      navline.style.display = `inline`;
      navline.style.width = `${e.currentTarget.offsetWidth}px`;
      navline.style.left = `${e.currentTarget.offsetLeft}px`;
      if (i === 0) {
        navline.style.backgroundColor = `red`;
      } else if (i === 1) {
        navline.style.backgroundColor = `green`;
      } else if (i === 2) {
        navline.style.backgroundColor = `orange`;
      } else {
        navline.style.backgroundColor = `blue`;
      }
    });
    //еще неплоход добавить событие на mouseleave, чтобы подчеркивание возвращалось к активному элементу
  }

  // })
})


 ("particles-js", {"particles":{"number":{"value":80,"density":{"enable":true,"value_area":800}},"color":{"value":"#ffffff"},"shape":{"type":"circle","stroke":{"width":0,"color":"#000000"},"polygon":{"nb_sides":5},"image":{"src":"img/github.svg","width":100,"height":100}},"opacity":{"value":0.5,"random":false,"anim":{"enable":false,"speed":1,"opacity_min":0.1,"sync":false}},"size":{"value":3,"random":true,"anim":{"enable":false,"speed":40,"size_min":0.1,"sync":false}},"line_linked":{"enable":true,"distance":150,"color":"#ffffff","opacity":0.4,"width":1},"move":{"enable":true,"speed":6,"direction":"none","random":false,"straight":false,"out_mode":"out","bounce":false,"attract":{"enable":false,"rotateX":600,"rotateY":1200}}},"interactivity":{"detect_on":"canvas","events":{"onhover":{"enable":true,"mode":"repulse"},"onclick":{"enable":true,"mode":"push"},"resize":true},"modes":{"grab":{"distance":400,"line_linked":{"opacity":1}},"bubble":{"distance":400,"size":40,"duration":2,"opacity":8,"speed":3},"repulse":{"distance":200,"duration":0.4},"push":{"particles_nb":4},"remove":{"particles_nb":2}}},"retina_detect":true});var count_particles, stats, update; stats = new Stats; stats.setMode(0); stats.domElement.style.position = 'absolute'; stats.domElement.style.left = '0px'; stats.domElement.style.top = '0px'; document.body.appendChild(stats.domElement); count_particles = document.querySelector('.js-count-particles'); update = function() { stats.begin(); stats.end(); if (window.pJSDom[0].pJS.particles && window.pJSDom[0].pJS.particles.array) { count_particles.innerText = window.pJSDom[0].pJS.particles.array.length; } requestAnimationFrame(update); }; requestAnimationFrame(update);;