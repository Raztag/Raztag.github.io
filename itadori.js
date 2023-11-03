document.addEventListener("DOMContentLoaded", function () {
    const darkModeButton = document.getElementById("dark-mode-button");
    const lightModeStylesheet = document.getElementById("light-mode-stylesheet");
    const darkModeStylesheet = document.getElementById("dark-mode-stylesheet");

    darkModeButton.addEventListener("click", function () {
        if (lightModeStylesheet.disabled) {
            lightModeStylesheet.disabled = false;
            darkModeStylesheet.disabled = true;
        } else {
            lightModeStylesheet.disabled = true;
            darkModeStylesheet.disabled = false;
        }
    });
});
