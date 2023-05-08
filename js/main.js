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

// ---------------section-3----------------------

const btnProduct = document.querySelectorAll('.sect-3-product-btn');
const liProduct = document.querySelectorAll('.sect-3-product-item');  

for (const btn of btnProduct) {
  btn.onclick = rollProduct
}

function rollProduct() {
  for (const btn of btnProduct) {
    btn.classList.remove('btn-active');
  }

  this.classList.add('btn-active');
  count = Array.from(btnProduct).indexOf(this)
  rollSlider()
}



// ---------------section-4----------------------
const sliderWrapper = document.querySelector('.slider-wrapper')
const sliderLine = document.querySelector('.slider-line')
const slides = document.querySelectorAll('.section-4 .slide')

const sliderBtnPrev = document.querySelector('.slider-button-prev')
const sliderBtnNext = document.querySelector('.slider-button-next')

let count = 0
let width

init()
window.onresize = init

function init() {
  console.log('resize')
  width = sliderWrapper.offsetWidth
  sliderLine.style.width = width * slides.length + 'px'
  slides.forEach(slide => {
    slide.style.width = width + 'px'
  });
  rollSlider()

}




sliderBtnPrev.onclick = () => {
  count--
  if (count < 0) {
    count = slides.length - 1
  }
  rollSlider()
  rollPrevProduct()

}

sliderBtnNext.onclick = () => {
  count++
  if (count >= slides.length) {
    count = 0
  }
  rollSlider()
  rollNextProduct()

}

function rollSlider() {
  sliderLine.style.transform = `translate(-${count * width}px)`
}

function rollPrevProduct(){
  const currentBtn = document.querySelector('.sect-3-product-btn.btn-active')
  const currentLi = currentBtn.closest('.sect-3-product-item')
  const prevLi = currentLi.previousElementSibling || liProduct[liProduct.length - 1]
  const prevBtn = prevLi.querySelector('.sect-3-product-btn');


  currentBtn.classList.remove('btn-active');
  prevBtn.classList.add('btn-active');
}

function rollNextProduct(){
  const currentBtn = document.querySelector('.sect-3-product-btn.btn-active')
  const currentLi = currentBtn.closest('.sect-3-product-item')
  const nextLi = currentLi.nextElementSibling || liProduct[0]
  const nextBtn = nextLi.querySelector('.sect-3-product-btn');

  currentBtn.classList.remove('btn-active');
  nextBtn.classList.add('btn-active');
}

// ---------------section-6----------------------

pearSpeechBtn.onclick = () => {
  speech.play()
}