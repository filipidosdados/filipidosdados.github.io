let currentSlide = 0;
let currentSlideETL = 0;

function moveCarousel(direction) {
    const carousel = document.querySelector('.carousel');
    const slides = document.querySelectorAll('.carousel-slide');
    const totalSlides = slides.length;
    
    currentSlide += direction;

    if (currentSlide < 0) {
        currentSlide = totalSlides - 1;
    } else if (currentSlide >= totalSlides) {
        currentSlide = 0;
    }

    const offset = -currentSlide * 100;
    carousel.style.transform = `translateX(${offset}%)`;
}

function moveCarouselETL(direction) {
    const casesETL = document.querySelectorAll('.carousel-etl .etl-case-item');
    const totalCases = casesETL.length;
    
    // Remove active do slide anterior
    casesETL[currentSlideETL].classList.remove('active');
    
    currentSlideETL += direction;

    if (currentSlideETL < 0) {
        currentSlideETL = totalCases - 1;
    } else if (currentSlideETL >= totalCases) {
        currentSlideETL = 0;
    }

    // Adiciona active ao novo slide
    casesETL[currentSlideETL].classList.add('active');
}

// Inicializa o primeiro slide ETL como ativo
document.addEventListener('DOMContentLoaded', function() {
    const firstCaseETL = document.querySelector('.carousel-etl .etl-case-item');
    if (firstCaseETL) {
        firstCaseETL.classList.add('active');
    }
});
