const btnMobile = document.querySelector('button#btn-mobile');


function toggleMenu(event) {
    if (event.type === 'touchstart') event.preventDefault()
    const nav = document.querySelector('nav#nav');
    nav.classList.toggle('active')
}

btnMobile.addEventListener('click', toggleMenu);
btnMobile.addEventListener('touchstart', toggleMenu); 
