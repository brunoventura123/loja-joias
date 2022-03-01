
const menu = document.querySelector('.menu')
const menuUl = document.querySelector('ul')

menu.addEventListener('click', function(){
    menuUl.classList.toggle('open')
})