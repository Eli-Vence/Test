const burger = document.querySelector('.burger');
const menu = document.querySelector('.menu');
const menuLink = document.querySelectorAll('ul a');

// realization burger menu
burger.addEventListener('click', () => {
  burger.classList.toggle('burger--active');
  menu.classList.toggle('menu--visible');
});

// close burger menu when clicking on link
menuLink.forEach(link => {
  link.addEventListener('click', () =>{
    burger.classList.remove('burger--active');
    menu.classList.remove('menu--visible');
  })
})