let theme = "0_BRIGHT";

function changeTheme() {
    if (theme == "0_BRIGHT") {
        document.querySelector(":root").classList.add("dark");
        document.querySelector(".theme").setAttribute("src", "resources/images/brightness_light.png");
        document.querySelector(".theme").setAttribute("alt", "moon");
        theme = "1_DARK";
    } else {
        document.querySelector(":root").classList.remove("dark");
        document.querySelector(".theme").setAttribute("src", "resources/images/brightness_dark.svg");
        theme = "0_BRIGHT";
    }
}