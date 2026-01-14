import "../styles/select2.min.css";
import "../styles/main.scss";

window.addEventListener("load", () => {
    document.getElementById("year").innerHTML = new Date().getFullYear();
    const form = document.getElementById("emailForm");
    const button = document.getElementById("form-button");
    const SCRIPT_URL = "https://script.google.com/macros/s/AKfycbwy11WGWDkjot1dTTK8U_E0fWP-5tL_fLwkHrjr-jISIUd5cbfcaH4WvqWMNls37hwj/exec";
    const originalButtonText = button.textContent.trim();

    form.addEventListener("submit", async function (e) {
        e.preventDefault();

        const email = document.getElementById("email").value;

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

            button.disabled = false;
            button.style.backgroundColor = "";
            button.innerHTML = ` All done!
            <img src="src/assets/img/success.svg" alt="Done" class="form-block-success">
        `;

            setTimeout(() => {
                button.innerHTML = originalButtonText;
            }, 2200);

            form.reset();
        } catch (err) {
            button.innerHTML = "Error. Try again";

            setTimeout(() => {
                button.innerHTML = originalButtonText;
                button.style.backgroundColor = "";
                button.disabled = false;
            }, 3000);

            console.error(err);
        }
    });

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
});
