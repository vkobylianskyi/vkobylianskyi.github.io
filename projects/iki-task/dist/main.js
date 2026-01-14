(function polyfill() {
  const relList = document.createElement("link").relList;
  if (relList && relList.supports && relList.supports("modulepreload")) {
    return;
  }
  for (const link of document.querySelectorAll('link[rel="modulepreload"]')) {
    processPreload(link);
  }
  new MutationObserver((mutations) => {
    for (const mutation of mutations) {
      if (mutation.type !== "childList") {
        continue;
      }
      for (const node of mutation.addedNodes) {
        if (node.tagName === "LINK" && node.rel === "modulepreload")
          processPreload(node);
      }
    }
  }).observe(document, { childList: true, subtree: true });
  function getFetchOpts(link) {
    const fetchOpts = {};
    if (link.integrity) fetchOpts.integrity = link.integrity;
    if (link.referrerPolicy) fetchOpts.referrerPolicy = link.referrerPolicy;
    if (link.crossOrigin === "use-credentials")
      fetchOpts.credentials = "include";
    else if (link.crossOrigin === "anonymous") fetchOpts.credentials = "omit";
    else fetchOpts.credentials = "same-origin";
    return fetchOpts;
  }
  function processPreload(link) {
    if (link.ep)
      return;
    link.ep = true;
    const fetchOpts = getFetchOpts(link);
    fetch(link.href, fetchOpts);
  }
})();
window.addEventListener("load", () => {
  var _a, _b;
  document.getElementById("year").innerHTML = (/* @__PURE__ */ new Date()).getFullYear();
  const form = document.getElementById("emailForm");
  const button = document.getElementById("form-button");
  const SCRIPT_URL = "https://script.google.com/macros/s/AKfycbwy11WGWDkjot1dTTK8U_E0fWP-5tL_fLwkHrjr-jISIUd5cbfcaH4WvqWMNls37hwj/exec";
  const originalButtonText = button.textContent.trim();
  form.addEventListener("submit", async function(e) {
    e.preventDefault();
    const email = document.getElementById("email").value;
    button.disabled = true;
    button.innerHTML = `
            <img src="./images/spinner.svg" alt="Loading" class="form-block-spinner">
        `;
    try {
      await fetch(SCRIPT_URL, {
        method: "POST",
        mode: "no-cors",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify({ email })
      });
      button.disabled = false;
      button.style.backgroundColor = "";
      button.innerHTML = ` All done!
            <img src="./images/success.svg" alt="Done" class="form-block-success">
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
      }, 3e3);
      console.error(err);
    }
  });
  function scrollToFormAndFocus() {
    const form2 = document.getElementById("emailForm");
    const emailInput = document.getElementById("email");
    if (!form2 || !emailInput) return;
    form2.scrollIntoView({
      behavior: "smooth",
      block: "center"
    });
    setTimeout(() => {
      emailInput.focus();
    }, 600);
  }
  (_a = document.querySelector(".header__button")) == null ? void 0 : _a.addEventListener("click", function(e) {
    e.preventDefault();
    scrollToFormAndFocus();
  });
  (_b = document.querySelector(".main__button")) == null ? void 0 : _b.addEventListener("click", function(e) {
    e.preventDefault();
    scrollToFormAndFocus();
  });
});
