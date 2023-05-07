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


const topLeftImg = document.querySelectorAll('.top-left-img');
const topRightImg = document.querySelectorAll('.top-right-img');
const bottomRightImg = document.querySelectorAll('.bottom-right-img');
const bottomLeftImg = document.querySelectorAll('.bottom-left-img');

window.addEventListener('mousemove', function (e) {
  let x = e.clientX / window.innerWidth;
  let y = e.clientY / window.innerHeight;


  for (const elm of topLeftImg) {
    elm.style.transform = `translate(-${x * 90}px, -${y * 60}px)`;
  }

  for (const elm of topRightImg) {
    elm.style.transform = `translate(-${x * 40}px, -${y * 40}px)`;
  }

  for (const elm of bottomRightImg) {
    elm.style.transform = `translate(-${x * 250}px, -${y * 70}px)`;
  }

  for (const elm of bottomLeftImg) {
    elm.style.transform = `translate(-${x * 110}px, -${y * 110}px)`;
  }


});


const btnProduct = document.querySelectorAll('.sect-3-product-btn');



for (const btn of btnProduct) {
  btn.onclick = function() {
    for (const btn of btnProduct) {
      btn.classList.remove('btn-active');
    }
        
    this.classList.add('btn-active');
  };


}

 
