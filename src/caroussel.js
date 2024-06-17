





// document.addEventListener('DOMContentLoaded', function () {
//     const items = document.querySelectorAll('.carousel-item');
//     const prevButton = document.querySelector('.carousel-prev');
//     const nextButton = document.querySelector('.carousel-next');
//     let currentIndex = 0;

//     function showItem(index) {
//         items.forEach((item, i) => {
//             item.classList.toggle('active', i === index);
//         });
//     }

//     prevButton.addEventListener('click', function () {
//         currentIndex = (currentIndex > 0) ? currentIndex - 1 : items.length - 1;
//         showItem(currentIndex);
//     });

//     nextButton.addEventListener('click', function () {
//         currentIndex = (currentIndex + 1) % items.length;
//         showItem(currentIndex);
//     });

//     showItem(currentIndex);

//     setInterval(() => {
//         nextButton.click();
//     }, 6000);
// });