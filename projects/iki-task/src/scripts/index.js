import "../styles/main.scss";

window.addEventListener("load", () => {
    document.getElementById("year").innerHTML = new Date().getFullYear();

    const form = document.getElementById("emailForm");
    const button = document.getElementById("form-button");
    const emailInput = document.getElementById("email");

    const SCRIPT_URL = "https://script.google.com/macros/s/AKfycbw2Aajfk1nsL5OImd9Rls0Rtfb2LGMKjL-fcqYJcaXb5DN_vhffnv_jd6KoSXFIQPwg/exec";

    // ── ЛОГІКА ФОРМИ ─────────────────────────────────────────────────────
    form.addEventListener("submit", async function (e) {
        e.preventDefault();

        const email = emailInput.value;

        form.classList.add("submitting");

        button.disabled = true;
        button.innerHTML = `
            <img src="src/assets/img/spinner.svg" alt="Loading" class="form-block-spinner">
        `;

        try {
            await fetch(SCRIPT_URL, {
                method: "POST",
                mode: "no-cors",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({ email: email }),
            });

            // Успішне завершення
            button.disabled = false;
            button.style.backgroundColor = "";
            button.innerHTML = ` All done!
        <img src="src/assets/img/success.svg" alt="Done" class="form-block-success">
    `;

            // Очищаємо поле
            form.reset();

            // Додаємо клас submitted для показу іконки
            form.classList.add("submitted");
            form.classList.remove("submitting");

            // ВИДАЛЯЄМО ФОКУС З ІНПУТА - це ключова зміна!
            emailInput.blur();

            // Приховуємо каретку
            emailInput.style.caretColor = "transparent";

            // Додаємо невелику затримку для гарантії
            setTimeout(() => {
                emailInput.blur();
                emailInput.style.caretColor = "transparent";
            }, 10);
        } catch (err) {
            // Помилка
            button.innerHTML = "Error. Try again";
            form.classList.remove("submitting");
            // Не встановлюємо opacity тут - лише клас
            form.classList.remove("submitted");
            emailInput.style.caretColor = "";

            setTimeout(() => {
                button.innerHTML = "Sign up for updates";
                button.style.backgroundColor = "";
                button.disabled = false;
            }, 3000);

            console.error(err);
        }
    });

    // ── СКРОЛ ДО ФОРМИ ──────────────────────────────────────────────────
    function scrollToFormAndFocus() {
        const form = document.getElementById("emailForm");
        const emailInput = document.getElementById("email");

        if (!form || !emailInput) return;

        form.scrollIntoView({
            behavior: "smooth",
            block: "center",
        });

        setTimeout(() => {
            emailInput.focus();
            // При фокусі повертаємо нормальну каретку
            emailInput.style.caretColor = "";
        }, 600);
    }

    document.querySelector(".header__button")?.addEventListener("click", function (e) {
        e.preventDefault();
        scrollToFormAndFocus();
    });

    document.querySelector(".main__button")?.addEventListener("click", function (e) {
        e.preventDefault();
        scrollToFormAndFocus();
    });

    // ── ДОДАТКОВА ЛОГІКА ДЛЯ ІКОНКИ ─────────────────────────────────────
    emailInput.addEventListener("focus", function () {
        form.classList.remove("submitted");
        // При фокусі повертаємо нормальну каретку
        this.style.caretColor = "";
    });

    emailInput.addEventListener("blur", function () {
        // Не треба встановлювати opacity через JS
        // Все контролюється через CSS класи
    });

    // Додатково: при кліку на форму після успішної відправки
    form.addEventListener("click", function (e) {
        if (form.classList.contains("submitted")) {
            // Якщо клікнули на форму в стані submitted
            form.classList.remove("submitted");
            emailInput.focus();
            emailInput.style.caretColor = "";
            // НЕ встановлюємо opacity через JS
        }
    });

    // Додаємо обробник input для коректної роботи placeholder-shown
    emailInput.addEventListener("input", function () {
        // Ця подія потрібна для оновлення стану :not(:placeholder-shown)
        // Нічого не робимо, просто даємо тригер CSS
    });
});
