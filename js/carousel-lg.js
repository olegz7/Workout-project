const logos = [
    "img/nb-logo.svg",
    "img/reebok-logo.svg",
    "img/adidas-logo.svg",
    "img/nike-logo.svg",
    "img/asics-logo.svg"
];

let currentSlideId = 0;

function showSlide() {
    const carouselImage1 = document.querySelector(".carousel-logos .logo-1");
    const carouselImage2 = document.querySelector(".carousel-logos .logo-2");
    const carouselImage3 = document.querySelector(".carousel-logos .logo-3");
    const slide2Id = currentSlideId + 1 > logos.length - 1 ? 0 : currentSlideId + 1;
    const slide3Id = slide2Id + 1 > logos.length - 1 ? 0 : slide2Id + 1;
    
    carouselImage1.src = logos[currentSlideId];
    carouselImage2.src = logos[slide2Id];
    carouselImage3.src = logos[slide3Id];
}

function nextSlide() {
    currentSlideId++;
    if (currentSlideId >= logos.length) currentSlideId = 0;
    showSlide();
}

function prevSlide() {
    currentSlideId--;
    if (currentSlideId < 0) currentSlideId = logos.length - 1;
    showSlide();
}


// setInterval(nextSlide, 5000);

document.querySelector(".carousel-lg-prev").addEventListener("click", prevSlide);
document.querySelector(".carousel-lg-next").addEventListener("click", nextSlide);

showSlide()
