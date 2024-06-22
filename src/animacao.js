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

const cursor = document.querySelector('.cursor');

document.addEventListener('mousemove', function (e) {
    const mouseHole = document.querySelector('.cursor');
    mouseHole.style.left = `${e.clientX - 50}px`;
    mouseHole.style.top = `${e.clientY - 50}px`;

});


