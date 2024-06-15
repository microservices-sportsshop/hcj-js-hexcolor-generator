document.addEventListener("DOMContentLoaded", () => {
    const hexnumber = document.querySelector(".hexnumber");
    const generateBtn = document.querySelector(".generate");
    const resetBtn = document.querySelector(".reset");

    const generateNumber = () => {
        const randomColor = Math.random().toString(16).substring(2, 8);
        document.body.style.backgroundColor = "#" + randomColor;

        hexnumber.textContent = "#" + randomColor;
    };

    const resetNumber = () => {
        hexnumber.textContent = "#ffffff";
    };

    generateBtn.addEventListener("click", generateNumber);
    resetBtn.addEventListener("click", resetNumber);

    generateNumber();
});
