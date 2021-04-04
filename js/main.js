var burger = document.querySelector(".hamburger");
var nav = document.querySelector(".header__nav");

burger.addEventListener("click", function() {
    nav.classList.toggle('header__nav--active');
    burger.classList.toggle("hamburger--active")
});

// var burger = document.querySelector(".hamburgers");
// var footer = document.querySelector("footer__nav");

// burger.addEventListener("click", function () {
//     footer.classList.toggle("footer__nav--active");
//     burger.classList.toggle("hamburgers--active")
// });