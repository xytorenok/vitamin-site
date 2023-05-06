const blocks = document.querySelectorAll('.sect-2-wrap-block')

window.onscroll = () => {
  for (const block of blocks) {
    if (block.getBoundingClientRect().top <= innerHeight) {
      block.classList.add('active')
    }
  }
}


// // Создаем экземпляр наблюдателя изменений
// const observer = new IntersectionObserver((entries, observer) => {
//   entries.forEach(entry => {
//     if (entry.isIntersecting) {
//       // Выполняем функцию, когда элемент появляется на экране
//       myFunction();
//       // Отключаем наблюдатель, после того как функция выполнена
//       observer.unobserve(entry.target);
//     }
//   });
// });

// // Наблюдаем за элементом
// observer.observe(sectionWrapper);


// function myFunction() {
//   blocks.forEach(block => {
//     block.classList.add('active')
//   })
// }