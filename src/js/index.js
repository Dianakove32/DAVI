const btn=document.querySelector('.header__burger');
const menu=document.querySelector('.burger-menu')
btn.addEventListener('click',function(){
  btn.classList.toggle('active');
 menu.classList.toggle('active');
 document.body.classList.toggle('lock')
})