var burger = document.querySelector(".hamburger");
var nav = document.querySelector(".header__nav");

burger.addEventListener("click", function() {
    nav.classList.toggle('header__nav--active');
    burger.classList.toggle("hamburger--active")
});

window.addEventListener ("scroll", function(){
    const header = document.querySelector("header");
    header.classList.toggle("sticky", window.scrollY > 0);
})