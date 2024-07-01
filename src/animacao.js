let sections = document.querySelectorAll('.section');

window.onscroll = () => {
    sections.forEach(sec => {
        let top = window.scrollY;
        let offset = sec.offsetTop;
        let height = sec.offsetHeight;

      
        if (top >= offset - height * 0.5 && top < offset + height * 0.5) {
           sec.classList.add('show-animate');
        }
    });
};

const hexContainer = document.getElementById('hex-container');

const hexRows = 11;
const hexPerRow = [24, 23, 24, 23, 24, 23, 24, 23, 24, 23,24];

for (let i = 0; i < hexRows; i++) {
    const hexRow = document.createElement('div');
    hexRow.classList.add('hex-row');

    for (let j = 0; j < hexPerRow[i]; j++) {
        const hex = document.createElement('div');
        hex.classList.add('hex');
        hexRow.appendChild(hex);
    }

    hexContainer.appendChild(hexRow);
}
const btnArrow = document.querySelector('#btn-arrow');

setTimeout(() => {
    btnArrow.style.display = 'block';
    btnArrow.style.opacity = '1';
}, 5000);


document.addEventListener('scroll', function () {
    const section1 = document.getElementById('section1');
    const section2 = document.getElementById('section2');
    const section3 = document.getElementById('section3');
    const section4 = document.getElementById('section4');
    const section5 = document.getElementById('section5');

    const linkHome = document.getElementById('link-home');
    const linkSobre = document.getElementById('link-sobre');
    const linkPortfolio = document.getElementById('link-portfolio');
    const linkService = document.getElementById('link-service');
    const linkContacto = document.getElementById('link-contacto');

    const sections = [section1, section2, section3, section4, section5];
    const links = [linkHome, linkSobre, linkPortfolio, linkService, linkContacto];

    sections.forEach((section, index) => {
        const rect = section.getBoundingClientRect();
        if (rect.top <= window.innerHeight / 2 && rect.bottom >= window.innerHeight / 2) {
            links[index].classList.add('active-link');
        } else {
            links[index].classList.remove('active-link');
        }
    });
});
document.addEventListener('DOMContentLoaded', (event) => {
    const video = document.getElementById('meuVideo');

    video.addEventListener('ended', () => {
        video.currentTime = 0;
    });
});