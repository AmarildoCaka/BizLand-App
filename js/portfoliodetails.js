const slides = document.getElementsByClassName('carousel-inner');

let currentIndex = 0;

function nextSlide()
{

    currentIndex = (currentIndex + 1) % 6;

    updateSlide();

}

function updateSlide()
{

    const translateValue = -currentIndex * 100;

    slides.style.transform = `translateX(${translateValue}%)`;

}

setInterval(nextSlide, 5000);