document.addEventListener("DOMContentLoaded", () => {
    const number = document.querySelector(".number");
    const generateBtn = document.querySelector(".generate");
    const resetBtn = document.querySelector(".reset");

    const generateNumber = () => {
        const randomNumber = Math.floor(Math.random() * 1001); // Generate number between 0 and 1000
        number.textContent = randomNumber;
    };

    const resetNumber = () => {
        number.textContent = 0;
    };

    generateBtn.addEventListener("click", generateNumber);
    resetBtn.addEventListener("click", resetNumber);

    generateNumber();
});
