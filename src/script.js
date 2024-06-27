const imgFlexa = document.getElementById('btn-arrow');
const btnMobile = document.querySelector('button#btn-mobile');


function toggleMenu(event) {
    if (event.type === 'touchstart') event.preventDefault()
    const nav = document.querySelector('nav#nav');
    nav.classList.toggle('active')
}

btnMobile.addEventListener('click', toggleMenu);
btnMobile.addEventListener('touchstart', toggleMenu);


const btn = document.getElementById('btn-mobile')

btn.addEventListener('click', (e) => {
    e.preventDefault()
    const nav = document.querySelector('.nav');
    const ulMobile = document.querySelector('ul-header');
    nav.classList.toggle('active')
    ulMobile.classList.toggle('active')
})

document.addEventListener('scroll', function () {
    const header = document.querySelector('.header');

    if (window.innerWidth > 700) { 
        if (window.scrollY > 0) {
            header.classList.add('scrolled');
        } else {
            header.classList.remove('scrolled');
        }
    } else {
        header.classList.remove('scrolled');
      
    }
});



imgFlexa.addEventListener('click', function () {
    window.scrollBy({
        top: window.innerHeight + 100,  // Descer a altura da janela mais 100 pixels
        behavior: 'smooth'
    });
});

document.addEventListener("DOMContentLoaded", function () {
    function scrollToSection(event, targetId) {
        event.preventDefault();
        const targetElement = document.getElementById(targetId);
        if (targetElement) {
            window.scrollTo({
                top: targetElement.offsetTop,
                behavior: 'smooth'
            });
            toggleMenu(event); 
        }
    }

    const inicioLink = document.querySelectorAll('a[href="#inicio"]');
    inicioLink.forEach(link => {
        link.addEventListener('click', function (event) {
            scrollToSection(event, 'inicio');
        });
        
    });

    const sobreLink = document.querySelectorAll('a[href="#sobre"]');
    sobreLink.forEach(link => {
        link.addEventListener('click', function (event) {
            scrollToSection(event, 'about');
        });
    });
    
    sobreLink.forEach(link => {
        link.addEventListener('click', function (event) {
            scrollToSection(event, 'about');
        });
    });

    const portfolioLink = document.querySelectorAll('a[href="#portfolio"]');
    portfolioLink.forEach(link => {
        link.addEventListener('click', function (event) {
            scrollToSection(event, 'portfolio');
        });
    });
    const serviceLink = document.querySelectorAll('a[href="#service"]');
    serviceLink.forEach(link => {
        link.addEventListener('click', function (event) {
            scrollToSection(event, 'servico');
        });
    });
   
    const contatoLink = document.querySelectorAll('a[href="#contato"]');
    contatoLink.forEach(link => {
        link.addEventListener('click', function (event) {
            scrollToSection(event, 'contacto');
        });
    });

});


function changeLanguage(lang) {
    const ptElements = document.querySelectorAll('.lang.pt');
    const enElements = document.querySelectorAll('.lang.en');

    if (lang === 'pt') {
        ptElements.forEach(element => {
            element.classList.add('active');
            element.style.display = 'block';
        });
        enElements.forEach(element => {
            element.classList.remove('active');
            element.style.display = 'none';
        });
    } else if (lang === 'en') {
        ptElements.forEach(element => {
            element.classList.remove('active');
            element.style.display = 'none';
        });
        enElements.forEach(element => {
            element.classList.add('active');
            element.style.display = 'block';
        });
    }
}

window.onload = function () {
    changeLanguage('pt');
};

