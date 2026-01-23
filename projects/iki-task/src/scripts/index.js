import "../styles/main.scss";

window.addEventListener("load", () => {
    const preloader = document.querySelector(".preloader");
    const pageContent = document.querySelector(".page-content");
    const body = document.body;
    const langOptions = document.querySelectorAll(".lang-option");

    function showPreloader() {
        if (preloader && pageContent && body) {
            body.classList.add("preloader-active");
            preloader.classList.add("visible");
        }
    }

    function hidePreloader(delay = 300) {
        if (preloader && pageContent && body) {
            setTimeout(() => {
                preloader.classList.remove("visible");
                body.classList.remove("preloader-active");
            }, delay);
        }
    }

    showPreloader();

    document.getElementById("year")?.replaceChildren(new Date().getFullYear());

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
            submitBtn.innerHTML = `<img src="src/assets/img/spinner.svg" alt="Loading..." class="form-block-spinner">`;

            try {
                await fetch(SCRIPT_URL, {
                    method: "POST",
                    mode: "no-cors",
                    headers: { "Content-Type": "application/json" },
                    body: JSON.stringify({ email }),
                });

                submitBtn.disabled = false;
                submitBtn.innerHTML = `All done! <img src="src/assets/img/success.svg" alt="Success" class="form-block-success">`;

                form.reset();
                form.classList.add("submitted");
                form.classList.remove("submitting");

                emailInput.blur();
                emailInput.style.caretColor = "transparent";

                setTimeout(() => emailInput.blur(), 50);
            } catch (err) {
                console.error("Submit error:", err);
                submitBtn.innerHTML = "Error. Try again";
                form.classList.remove("submitting", "submitted");
                emailInput.style.caretColor = "";

                setTimeout(() => {
                    submitBtn.innerHTML = "Sign up for updates";
                    submitBtn.disabled = false;
                }, 3000);
            }
        });

        emailInput.addEventListener("focus", () => {
            form.classList.remove("submitted");
            emailInput.style.caretColor = "";
        });

        form.addEventListener("click", (e) => {
            if (form.classList.contains("submitted") && e.target !== submitBtn) {
                form.classList.remove("submitted");
                emailInput.focus();
                emailInput.style.caretColor = "";
            }
        });

        emailInput.addEventListener("input", () => {});
    }

    function scrollToFormAndFocus() {
        if (!form || !emailInput) return;
        form.scrollIntoView({ behavior: "smooth", block: "center" });
        setTimeout(() => {
            emailInput.focus();
            emailInput.style.caretColor = "";
        }, 300);
    }

    document.querySelector(".header__button")?.addEventListener("click", (e) => {
        e.preventDefault();
        scrollToFormAndFocus();
    });

    document.querySelector(".main__button")?.addEventListener("click", (e) => {
        e.preventDefault();
        scrollToFormAndFocus();
    });

    function updatePlaceholders() {
        const lang = body.classList.contains("lang-ua") ? "ua" : "en";
        document.querySelectorAll("input[data-en][data-ua]").forEach((input) => {
            input.placeholder = input.dataset[lang];
        });
    }

    // Початкова мова
    let currentLang = localStorage.getItem("lang") || "ua";
    body.classList.add(`lang-${currentLang}`);

    langOptions.forEach((opt) => {
        opt.classList.toggle("curr", opt.dataset.lang === currentLang);
    });

    updatePlaceholders();
    body.classList.add("loaded");
    hidePreloader(600);

    langOptions.forEach((option) => {
        option.addEventListener("click", () => {
            const selectedLang = option.dataset.lang;
            if (option.classList.contains("curr")) return;

            showPreloader();

            body.classList.remove("lang-en", "lang-ua");
            body.classList.add(`lang-${selectedLang}`);

            localStorage.setItem("lang", selectedLang);

            langOptions.forEach((opt) => {
                opt.classList.toggle("curr", opt.dataset.lang === selectedLang);
            });

            updatePlaceholders();

            setTimeout(() => {
                hidePreloader();
            }, 300);
        });
    });
});
