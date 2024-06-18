
const itens = document.querySelectorAll(".carousel-item")
const buttons = document.querySelectorAll("[id^='item-']")


buttons.forEach((btn, index) => {
    btn.addEventListener('click', (e) => {
        e.preventDefault()
        
        buttons.forEach(otherButton => otherButton.style.color = 'white'); // Reset to default color

        itens.forEach((item, itemIndex) => {
            item.classList.toggle('active', itemIndex === index);

            if (item.classList.contains('active')) {
                btn.style.color= 'black'; // Change color to blue on activation
            } 
        });

    });
});

