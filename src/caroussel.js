const itens = document.querySelectorAll(".carousel-item");
const buttons = document.querySelectorAll("[id^='item-']");
let currentIndex = 0;
let interval;


function updateCarousel(index) {
    buttons.forEach(btn => btn.classList.remove('active'));
    itens.forEach(item => item.classList.remove('active'));
    buttons[index].classList.add('active');
    itens[index].classList.add('active');
}

// Função para iniciar o auto-deslizamento
// function startAutoSlide() {
//     interval = setInterval(() => {
//         currentIndex = (currentIndex + 1) % itens.length;
//         updateCarousel(currentIndex);
//     }, 5000); 
// }

buttons.forEach((btn, index) => {
    btn.addEventListener('click', (e) => {
        e.preventDefault();
        clearInterval(interval); // Interrompe o auto-deslizamento
        updateCarousel(index); // Atualiza o carrossel
        currentIndex = index; // Atualiza o índice atual
        startAutoSlide(); // Reinicia o auto-deslizamento
    });
});

startAutoSlide();
