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

const hexRows = 10;
const hexPerRow = [24, 23, 24, 23, 24, 23, 24, 23, 24, 23, 24, 23, 24, 23];

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



