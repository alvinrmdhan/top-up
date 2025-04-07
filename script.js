//slider 
let slideIndex = 0;
let slides = document.getElementsByClassName("mySlides");
let slideInterval;

function showSlides() {
    for (let i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
    slideIndex++;
    if (slideIndex > slides.length) {
        slideIndex = 1;
    }
    slides[slideIndex - 1].style.display = "block";
    slideInterval = setTimeout(showSlides, 4000); // Ganti setiap 4 detik
}

function plusDivs(n) {
    clearTimeout(slideInterval);
    slideIndex += n - 1;
    if (slideIndex < 0) slideIndex = slides.length - 1;
    showSlides();
}

//inisialisasi
window.onload = function () {
    showSlides();
    setupSearch();
};
