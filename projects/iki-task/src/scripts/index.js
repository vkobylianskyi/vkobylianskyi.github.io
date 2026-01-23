import "../styles/main.scss";

window.addEventListener("load", () => {
    const yearEl = document.getElementById("year");
    if (yearEl) {
        yearEl.textContent = new Date().getFullYear();
    }

    const form = document.getElementById("emailForm");
    const submitBtn = document.getElementById("form-button");
    const emailInput = document.getElementById("email");

    if (form && submitBtn && emailInput) {
        const SCRIPT_URL = "https://script.google.com/macros/s/AKfycbw2Aajfk1nsL5OImd9Rls0Rtfb2LGMKjL-fcqYJcaXb5DN_vhffnv_jd6KoSXFIQPwg/exec";

        form.addEventListener("submit", async (e) => {
            e.preventDefault();

            const email = emailInput.value.trim();
            if (!email) return;

            form.classList.add("submitting");
            submitBtn.disabled = true;
            submitBtn.innerHTML = `
                <img src="src/assets/img/spinner.svg" alt="Loading..." class="form-block-spinner">
            `;

            try {
                await fetch(SCRIPT_URL, {
                    method: "POST",
                    mode: "no-cors",
                    headers: { "Content-Type": "application/json" },
                    body: JSON.stringify({ email }),
                });

                submitBtn.disabled = false;
                submitBtn.innerHTML = `
                    All done!
                    <img src="src/assets/img/success.svg" alt="Success" class="form-block-success">
                `;

                form.reset();
                form.classList.add("submitted");
                form.classList.remove("submitting");

                emailInput.blur();
                emailInput.style.caretColor = "transparent";

                setTimeout(() => {
                    emailInput.blur();
                    emailInput.style.caretColor = "transparent";
                }, 50);
            } catch (err) {
                console.error("Submit error:", err);
                submitBtn.innerHTML = "Error. Try again";
                form.classList.remove("submitting");
                form.classList.remove("submitted");
                emailInput.style.caretColor = "";

                setTimeout(() => {
                    submitBtn.innerHTML = "Sign up for updates";
                    submitBtn.disabled = false;
                }, 3000);
            }
        });

        // ─── Повернення нормального стану при фокусі ───
        emailInput.addEventListener("focus", () => {
            form.classList.remove("submitted");
            emailInput.style.caretColor = "";
        });

        // Клік по формі після успіху → редагувати знову
        form.addEventListener("click", (e) => {
            if (form.classList.contains("submitted") && e.target !== submitBtn) {
                form.classList.remove("submitted");
                emailInput.focus();
                emailInput.style.caretColor = "";
            }
        });

        // тригер :placeholder-shown
        emailInput.addEventListener("input", () => {});
    }

    // ────────────────────────────────────────────────
    // Прокрутка до форми
    // ────────────────────────────────────────────────
    function scrollToFormAndFocus() {
        if (!form || !emailInput) return;
        form.scrollIntoView({ behavior: "smooth", block: "center" });
        setTimeout(() => {
            emailInput.focus();
            emailInput.style.caretColor = "";
        }, 600);
    }

    document.querySelector(".header__button")?.addEventListener("click", (e) => {
        e.preventDefault();
        scrollToFormAndFocus();
    });

    document.querySelector(".main__button")?.addEventListener("click", (e) => {
        e.preventDefault();
        scrollToFormAndFocus();
    });

    // ────────────────────────────────────────────────
    // Перемикач мов + placeholder
    // ────────────────────────────────────────────────
    const body = document.body;
    const langOptions = document.querySelectorAll(".lang-option");

    // Функція оновлення placeholder-ів
    function updatePlaceholders() {
        const isUa = body.classList.contains("lang-ua");
        const lang = isUa ? "ua" : "en";

        document.querySelectorAll("input[data-en][data-ua]").forEach((input) => {
            input.placeholder = input.dataset[lang];
        });
    }

    // Початкова мова
    let currentLang = localStorage.getItem("lang") || "ua";
    body.classList.add(`lang-${currentLang}`);

    // Початкове встановлення стану кнопок і placeholder
    langOptions.forEach((option) => {
        option.classList.toggle("curr", option.dataset.lang === currentLang);
    });

    updatePlaceholders(); // одразу після завантаження

    // Обробник кліку по кнопці мови
    langOptions.forEach((option) => {
        option.addEventListener("click", () => {
            const selectedLang = option.dataset.lang;
            if (option.classList.contains("curr")) return;

            // змінюємо мову
            body.classList.remove("lang-en", "lang-ua");
            body.classList.add(`lang-${selectedLang}`);

            localStorage.setItem("lang", selectedLang);

            // оновлюємо активний стан кнопок
            langOptions.forEach((opt) => {
                opt.classList.toggle("curr", opt.dataset.lang === selectedLang);
            });

            // оновлюємо placeholder-и
            updatePlaceholders();
        });
    });
});
