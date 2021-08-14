const temperatures = document.querySelectorAll('.temp');

function removeCookieDisplay() {
    const cookie = document.querySelector(".cookie");
    cookie.remove();
    return
}

function selectTemperature(element) {
    if (element.value == "°F") {
        temperatures.forEach(convertToFahrenheit)
    } else {
        temperatures.forEach(convertToCelcius)
    }
    return
}

function convertToFahrenheit(temp) {
    temp.innerText = Math.round((parseFloat(temp.innerText) * 9/5) + 32);
    return
}

function convertToCelcius(temp) {
    temp.innerText = Math.round((temp.innerText - 32) * 5/9);
    return
}