$(document).ready(function () {

    $('.calc-task').click(task7);

    function task1() {
        // решение задачи номер 1. Считаем сколько букв а
        const userText = $('.input-data').val();

        let letterCount = 0;
        for (let index = 0; index < userText.length; index++) {
            const letter = userText[index];

            if (letter == 'a') {
                letterCount++;
            }
        }

        $('.answer').text(letterCount);
    }

    function task2() {
        // решение задачи номер 2. Считаем сколько букв а идет подряд
        const userText = $('.input-data').val();

        let currentRowLength = 0;
        let maxRowLengthA = 0;
        for (let index = 0; index < userText.length; index++) {

            const letter = userText[index];
            if (letter == 'a') {
                currentRowLength++;
            } else {
                if (currentRowLength > maxRowLengthA) {
                    maxRowLengthA = currentRowLength;
                }
                currentRowLength = 0;
            }
        }

        if (currentRowLength > maxRowLengthA) {
            maxRowLengthA = currentRowLength;
        }

        $('.answer').text(maxRowLengthA);
    }

    function task3() {
        // решение задачи номер 3. Ищем максимальное
        const arrayOfNumbers = $('.input-data').val();
        // '145273'

        let biggestNumber = 0;
        for (let index = 0; index < arrayOfNumbers.length; index++) {
            const currentNumber = arrayOfNumbers[index] - 0;

            if (currentNumber > biggestNumber) {
                biggestNumber = currentNumber;
            }
        }

        $('.answer').text(biggestNumber);
    }

    function task4() {
        // решение задачи номер 4. Ищем максимальную пару
        const arrayOfNumbers = $('.input-data').val();
        // 012

        let maxSum = 0;
        for (let index = 0; index < arrayOfNumbers.length - 1; index++) {
            const currentNumber = arrayOfNumbers[index] - 0;
            const nextNumber = arrayOfNumbers[index + 1] - 0;
            const sum = currentNumber + nextNumber;

            if (sum > maxSum) {
                maxSum = sum;
            }
        }

        $('.answer').text(maxSum);
    }

    function task5() {
        // решение задачи номер 5. Сумма всех чётных чисел
        const arrayOfNumbers = $('.input-data').val();
        // 1234

        let sum = 0;
        for (let index = 0; index < arrayOfNumbers.length; index++) {
            const currentNumber = arrayOfNumbers[index] - 0;
            sum = sum + currentNumber;
        }

        $('.answer').text(sum);
    }

    function task6() {
        // решение задачи номер 6. Сумма всех чётных чисел
        const arrayOfNumbers = $('.input-data').val();
        // 1234

        let sum = 0;
        for (let index = 0; index < arrayOfNumbers.length; index++) {
            const currentNumber = arrayOfNumbers[index] - 0;

            const ostatok = currentNumber % 2;
            const isEven = ostatok == 0;

            if (isEven) {
                sum = sum + currentNumber;
            }
        }

        $('.answer').text(sum);
    }

    function task7() {
        // решение задачи номер 7. Проверить возрастающая ли это последовательность
        const arrayOfNumbers = $('.input-data').val();
        // 2 5 3 6

        let isGrowing = true;
        for (let index = 0; index < arrayOfNumbers.length - 1; index++) {
            const currentNumber = arrayOfNumbers[index] - 0;
            const nextNumber = arrayOfNumbers[index + 1] - 0;

            if (nextNumber < currentNumber) {
                isGrowing = false;
            }
        }

        $('.answer').text(isGrowing);
    }
});
