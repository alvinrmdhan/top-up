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

//cari
function setupSearch() {
    const searchInput = document.querySelector('.input-search');
    searchInput.addEventListener('input', function () {
        const query = this.value.toLowerCase();
        const products = document.querySelectorAll('.populer > div');

        products.forEach(product => {
            const title = product.querySelector('.judul-produk').textContent.toLowerCase();
            if (title.includes(query)) {
                product.style.display = "block";
            } else {
                product.style.display = "none";
            }
        });
    });
}

//inisialisasi
window.onload = function () {
    showSlides();
    setupSearch();
};