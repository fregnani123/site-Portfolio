const imgFlexa = document.getElementById('img-flexa');
const imgLogo = document.querySelector('.img-logo');


setTimeout(() => {
    const imgWhatsap = document.querySelector('.span-whatsap');
    imgWhatsap.style.display = 'block'
}, 8000)

setTimeout(() => {
    const loadingPage = document.querySelector('.loading');
    const body = document.querySelector('body');

    if (loadingPage) {
        loadingPage.style.display = 'none';
    }

    if (body) {
        body.style.overflowY = 'scroll';
    }
}, 5000);


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

window.onload = function () {
    changeLanguage('pt');
};

document.addEventListener('DOMContentLoaded', function () {
    const items = document.querySelectorAll('.carousel-item');
    const prevButton = document.querySelector('.carousel-prev');
    const nextButton = document.querySelector('.carousel-next');
    let currentIndex = 0;

    function showItem(index) {
        items.forEach((item, i) => {
            item.classList.toggle('active', i === index);
        });
    }

    prevButton.addEventListener('click', function () {
        currentIndex = (currentIndex > 0) ? currentIndex - 1 : items.length - 1;
        showItem(currentIndex);
    });

    nextButton.addEventListener('click', function () {
        currentIndex = (currentIndex + 1) % items.length;
        showItem(currentIndex);
    });

    showItem(currentIndex);

    setInterval(() => {
        nextButton.click();
    }, 6000);
});
