// First Counter Script:

let firstCounter = document.querySelector("#firstCounter");

let firstCount = 0;

let firstInterval = setInterval(function() {

    if(firstCount < 232)
    {

        firstCount++;

        firstCounter.innerText = firstCount;

    }

    else
    {

        clearInterval(interval);

    }

}, 50);

//Second Counter Script:

let secondCounter = document.querySelector("#secondCounter");

let secondCount = 0;

let secondInterval = setInterval(function() {

    if(secondCount < 521)
    {

        secondCount++;

        secondCounter.innerText = secondCount;

    }

    else
    {

        clearInterval(interval);

    }

}, 50);

// Third Counter Script:

let thirdCounter = document.querySelector("#thirdCounter");

let thirdCount = 0;

let thirdInterval = setInterval(function() {

    if(secondCount < 10)
    {

        thirdCount++;

        thirdCounter.innerText = thirdCount;

    }

    else
    {

        clearInterval(interval);

    }

}, 50);

// Fourth Counter Script:

let fourthCounter = document.querySelector("#fourthCounter");

let fourthCount = 0;

let fourthInterval = setInterval(function() {

    if(fourthCount < 15)
    {

        fourthCount++;

        fourthCounter.innerText = fourthCount;

    }

    else
    {

        clearInterval(interval);

    }

}, 50);

// Carousel Mechanism Script:

const slides = document.getElementById('slides');

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

//Added Nav Script:

$(document).ready(function() {

    $('.dropdown-submenu a.test').on("click", function(e) {

        $(this).next('ul').toggle();

        e.stopPropagation();

        e.preventDefault();

    });

});