const images = [
    "img/nb-logo.svg",
    "img/reebok-logo.svg",
    "img/adidas-logo.svg",
    "img/nike-logo.svg",
    "img/asics-logo.svg",
];

let currentSlide = 0;

function showSlide() {
    const carouselImage = document.querySelector(".carousel img");
    carouselImage.src = images[currentSlide];
}

function nextSlide() {
    currentSlide++;
    if (currentSlide >= images.length) currentSlide = 0;
    showSlide();
}

function prevSlide() {
    currentSlide--;
    if (currentSlide < 0) currentSlide = images.length - 1;
    showSlide();
}

// setInterval(nextSlide, 5000);

document.querySelector(".carousel-prev").addEventListener("click", prevSlide);
document.querySelector(".carousel-next").addEventListener("click", nextSlide);