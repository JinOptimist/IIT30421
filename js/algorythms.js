$(document).ready(function () {
    
    $('.calc-task').click(task1);

    function task1() {
        // решение задачи номер 1. Считаем сколько букв а
       $('.input-data').val('smile');

        let letterCount = 0;
        for (let index = 0; index < userText.length; index++) {
            const letter = userText[index];
            
            if (letter == 'a'){
                letterCount++;
            }
        }

        $('.answer').text(letterCount);
    }

});