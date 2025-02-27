// file js eksternal

function validateform(nama){
    let namaInput = document.getElementById('name-input');
    let emailInput = document.getElementById('email-input');

    if (namaInput.value == '' || emailInput.value == '') {
        alert("Mohon isi Form");
    } else {
        alert('welcome' + namaInput.value);
    };
};


let currentSlide = 0;

function showSlide(index) {
    const slides = document.querySelectorAll(".main-container1 .main-banner > div");
    if (index >= slides.length) {
        currentSlide = 0;
    } else if (index < 0) {
        currentSlide = slides.length - 1;
    } else {
        currentSlide = index;
    }

    slides.forEach((slide, i) => {
        slide.classList.remove("active");
        slide.style.display = i === currentSlide ? "flex" : "none"; 
    });
}

setInterval(function () {
    showSlide(currentSlide + 1);
}, 3000);

showSlide(currentSlide);
