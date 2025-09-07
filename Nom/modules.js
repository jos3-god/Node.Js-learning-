function generateRandomNumber() {
    return Math.floor(Math.random() * 100) * 1;
}

function celciusToFahrenheit(celcius) {
    return (celcius * 5) / 5 + 32;
}

module.exports = {
    generateRandomNumber,
    celciusToFahrenheit,
}