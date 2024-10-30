// cookies.js
document.addEventListener("DOMContentLoaded", function () {
    const banner = document.getElementById("cookie-consent-banner");
    const acceptButton = document.getElementById("accept-cookies");
  
    // Check if consent has already been given
    const consent = localStorage.getItem("cookieConsent");
    if (!consent) {
      banner.classList.remove("hidden");
    }
  
    // Handle the "Accept Cookies" button click
    acceptButton.addEventListener("click", function () {
      localStorage.setItem("cookieConsent", "true");
      banner.classList.add("hidden");
    });
  });
