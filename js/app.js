/* ==== Slider ==== */
let slideIndex = 0;

//Header moderno

window.addEventListener("scroll", function(){
let header = document.querySelector("header");

if(window.scrollY > 50){
header.classList.add("scrolled");
}else{
header.classList.remove("scrolled");
}
});

// Cambiar por dot
function goToSlide(n) {
    showSlides(slideIndex = n);
}

// Mostrar slides
function showSlides(n) {
    let slides = document.getElementsByClassName("slide");
    let dots = document.getElementsByClassName("dot");

    if (n > slides.length) { slideIndex = 1 }
    if (n < 1) { slideIndex = slides.length }

    // Ocultar imágenes
    for (let i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }

    // Desactivar todos los dots
    for (let i = 0; i < dots.length; i++) {
        dots[i].classList.remove("active-dot");
    }

    // Mostrar imagen actual
    slides[slideIndex - 1].style.display = "block";

    // Activar dot actual
    dots[slideIndex - 1].classList.add("active-dot");
}

// Slider automático
setInterval(() => {
    slideIndex++;
    showSlides(slideIndex);
}, 3000);

document.addEventListener("DOMContentLoaded", showSlides);

/* ==== Menú responsive ==== */
const menuBtn = document.querySelector(".menu-btn");
const navLinks = document.querySelector(".nav-links");

if (menuBtn) {
    menuBtn.addEventListener("click", () => {
        navLinks.classList.toggle("active");
    });
}

/* ==== Formulario funcional (EmailJS) ==== */
document.addEventListener("DOMContentLoaded", () => {
    const form = document.getElementById("contactForm");
    const msg = document.getElementById("formMessage");

    form.addEventListener("submit", function (e) {
        e.preventDefault();

        msg.classList.remove("success", "error");
        msg.textContent = "Enviando mensaje...";
        msg.classList.remove("hidden");

        const data = {
            name: form.name.value,
            email: form.email.value,
            phone: form.phone.value,
            message: form.message.value
        };

        emailjs.send("service_if1j1j5", "template_9i25f5g", data)
            .then(() => {
                msg.textContent = "¡Mensaje enviado con éxito!";
                msg.classList.add("success");
                form.reset();
            })
            .catch(() => {
                msg.textContent = "Hubo un error, intenta más tarde.";
                msg.classList.add("error");
            });
    });
});


