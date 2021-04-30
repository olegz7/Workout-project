(function () {
    const images = [
        "img/nb-logo.svg",
        "img/reebok-logo.svg",
        "img/adidas-logo.svg",
        "img/nike-logo.svg",
        "img/asics-logo.svg",
    ];
    
    let currentSlide = 0;
    
    function showSlide() {
        const carouselImage = document.querySelector(".carousel-sm img");
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
    
    document.querySelector(".carousel-sm-prev").addEventListener("click", prevSlide);
    document.querySelector(".carousel-sm-next").addEventListener("click", nextSlide);
    
        showSlide()
    
    })();