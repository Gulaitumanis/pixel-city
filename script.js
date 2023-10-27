const button = document.getElementById('hamburger');

button.addEventListener('click', function(){
    const menu = document.querySelector('.menu');
    menu.classList.toggle('active')
});