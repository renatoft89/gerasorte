document.addEventListener("DOMContentLoaded", function () {
    const generateButton = document.getElementById("generateButton");

    generateButton.addEventListener("click", function () {
        const numbers = generateRandomNumbers();
        const sortedNumbers = numbers.sort((a, b) => a - b); // Ordena os números em ordem crescente
        displayNumbers(sortedNumbers);
    });

    function generateRandomNumbers() {
        const numbers = [];
        while (numbers.length < 6) {
            const randomNumber = Math.floor(Math.random() * 60) + 1;
            console.log(randomNumber);
            if (!numbers.includes(randomNumber)) {
                numbers.push(randomNumber);
            }
        }
        return numbers;
    }

    function displayNumbers(numbers) {
        for (let i = 1; i <= 6; i++) {
            const numberElement = document.getElementById(`number${i}`);
            numberElement.textContent = numbers[i - 1];
        }
    }
});
