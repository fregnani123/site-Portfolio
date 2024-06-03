const imgFlexa = document.getElementById('img-flexa');
const imgLogo = document.querySelector('.img-logo');

document.addEventListener('scroll', function () {
    const header = document.getElementById('menu');
    if (window.scrollY > 0) {
        header.classList.add('scrolled');
        imgLogo.classList.add('scrolled');
    } else {
        header.classList.remove('scrolled');
        imgLogo.classList.remove('scrolled');
    }
});

imgFlexa.addEventListener('click', function () {
    window.scrollBy({
        top: window.innerHeight,
        behavior: 'smooth'
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

// Definir o idioma padrão (opcional)
window.onload = function () {
    changeLanguage('pt');
};
