window.addEventListener('load', () => {

    const xhr = new XMLHttpRequest();
    xhr.open('GET', 'https://students.netoservices.ru/nestjs-backend/poll');
    xhr.onload = () => {
        if (xhr.readyState === xhr.DONE && xhr.status === 200) {
            const parsedData = JSON.parse(xhr.responseText);
            console.log("Данные загружены");

            const question = parsedData.data['title'];
            const answers = parsedData.data['answers'];

            const poolTitle = document.getElementById('poll__title');
            poolTitle.innerHTML = question;

            const poolAnswer = document.getElementById('poll__answers');
            poolAnswer.innerHTML = '';
            answers.forEach(answer => {
                const button = document.createElement('button');
                button.textContent = answer;
                button.className = 'poll__answer';
                poolAnswer.appendChild(button);

                button.addEventListener('click', () => {
                    alert('Спасибо, ваш голос засчитан!');
                });
            });
        } else {
            console.error("Ошибка загрузки данных");
        }
    };
    xhr.send();
});
