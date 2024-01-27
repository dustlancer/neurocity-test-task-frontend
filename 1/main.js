class Slider {
    constructor(slides) {
      this.slides = slides;
      this.currentIndex = 0;
    }
  
    showSlide() {
      const sliderContainer = document.getElementById('slider-container');
      sliderContainer.innerHTML = `<img src="${this.slides[this.currentIndex]}" alt="Slide ${this.currentIndex + 1}">`;
    }
  
    showNextSlide() {
      this.currentIndex = (this.currentIndex + 1) % this.slides.length;
      this.showSlide();
    }
  
    showPreviousSlide() {
      this.currentIndex = (this.slides.length + this.currentIndex - 1) % this.slides.length;
      this.showSlide();
    }
  }
  
let myimages = [
  'https://time-logo.ru/images/detailed/1/sqr-290-03.jpg',
  'https://www.greenlux.ru/images/3_interier/clock/kvadratnie/WM/kvadrat_10_compressed.jpg',
  'https://thumbs.dreamstime.com/b/квадратная-оптическая-арт-геометрическая-иллюстрация-с-вращением-214888875.jpg'
]

const slider = new Slider(myimages);

const nextButton = document.getElementById('nextButton');
const prevButton = document.getElementById('prevButton');

nextButton.addEventListener('click', () => {
  slider.showNextSlide();
});

prevButton.addEventListener('click', () => {
  slider.showPreviousSlide();
});


slider.showSlide();
