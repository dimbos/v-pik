let menuToggle = document.querySelector('#menu-toggle');
let menu = document.querySelector('.sidebar');

menuToggle.addEventListener('click', function(e){
    e.preventDefault();
    menu.classList.toggle('visible');
})