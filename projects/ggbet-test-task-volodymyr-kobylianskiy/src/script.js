import Swiper from "swiper";
import { Navigation, Pagination } from 'swiper/modules';
import "./styles/style.scss";
import "swiper/swiper.scss";


const swiper = new Swiper(".swiper-container", {
    cssMode: true,
    spaceBetween: 30,
    pagination: {
        el: ".swiper-pagination",
    },
    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
    },
    modules: [Navigation, Pagination],
});

const cards = document.querySelectorAll(".main-block-item, .swiper-slide");

cards.forEach((panel) => {
    const action = panel.querySelector(".main-block-item__action");
    const body = panel.querySelector(".main-block-item__description");

    action.addEventListener("click", () => {
        body.style.height = body.style.height === "auto" ? "100px" : "auto";
    });
});

const form = document.getElementById("emailForm");
const emailInput = document.getElementById("email");
const formImage = document.querySelector(".form-image");

form.addEventListener("submit", function (event) {
    event.preventDefault();

    const email = emailInput.value;
    if (!isValidEmail(email)) {
        emailInput.classList.add("invalid");
        emailInput.classList.remove("valid");
        formImage.classList.add("invalid");
        showErrorText();
    } else {
        emailInput.classList.remove("invalid");
        emailInput.classList.add("valid");
        formImage.classList.remove("invalid");
        formImage.classList.add("valid");
        hideErrorText();
    }
});

function isValidEmail(email) {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
}

function showErrorText() {
    const errorText = document.querySelector(".form-error-text");
    errorText.style.display = "block";
}

function hideErrorText() {
    const errorText = document.querySelector(".form-error-text");
    errorText.style.display = "none";
}

emailInput.addEventListener("input", function () {
    const emailValue = emailInput.value;
    if (emailValue === "") {
        const formElements = document.querySelectorAll(
            "#emailForm input, #emailForm .form-image"
        );
        formElements.forEach((element) => {
            element.classList.remove("valid", "invalid");
        });

        hideErrorText();
    }
});


let brandArrowFigure = document.querySelector('.header__brand-arrow-icon');
let brandRectangleFigure = document.querySelector('.header__brand-rectangle-icon');
let brandTrapeziumFigure = document.querySelector('.header__brand-trapezium-icon');
let mainPictureFigure = document.querySelector('.main-picture');

function handleMouseMove(e) {
    if (window.innerWidth > 1200) {
        let x = e.clientX / window.innerWidth;
        let y = e.clientY / window.innerHeight;  

        brandArrowFigure.style.transform = 'translate(-' + x * 25 + 'px, -' + y * 25 + 'px)';
        brandRectangleFigure.style.transform = 'translate(+' + x * 5 + 'px, -' + y * 5 + 'px)';
        brandTrapeziumFigure.style.transform = 'translate(-' + x * 15 + 'px, -' + y * 15 + 'px)';
        mainPictureFigure.style.transform = 'translate(-' + x * 30 + 'px, -' + y * 10 + 'px)';
    } else {
        brandArrowFigure.style.transform = '';
        brandRectangleFigure.style.transform = '';
        brandTrapeziumFigure.style.transform = '';
        mainPictureFigure.style.transform = '';
    }
}

window.addEventListener('mousemove', handleMouseMove);
window.addEventListener('resize', handleMouseMove);