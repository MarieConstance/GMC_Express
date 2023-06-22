function startSlideshow() {
  const slideshow = document.querySelector('.slideshow');
  const slides = Array.from(slideshow.children);
  
  let slideWidth = slides[0].getBoundingClientRect().width;
  let currentIndex = 0;
  
  function moveToSlide(index) {
    slideshow.style.transform = `translateX(-${slideWidth * index}px)`;
    currentIndex = index;
  }
  
  function nextSlide() {
    if (currentIndex === slides.length - 1) {
      moveToSlide(0);
    } else {
      moveToSlide(currentIndex + 1);
    }
  }
  
  setInterval(nextSlide, 2000); // Change slide every 2 seconds
}

startSlideshow();
