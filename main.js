// Cara header berubah warna
window.addEventListener('scroll',function(){
    const header = document.querySelector('header');
    header.classList.toggle('sticky', window.scrollY > 0);
})

const humburger = document.querySelector(".humburger");
const navMenu = document.querySelector(".nav");

humburger.addEventListener("click", () => {
    humburger.classList.toggle("active");
    navMenu.classList.toggle("active");
})

navMenu.addEventListener("click", () => {
    humburger.classList.remove("active");
    navMenu.classList.remove("active")
})