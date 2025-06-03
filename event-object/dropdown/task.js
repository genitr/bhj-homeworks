// Получаем список всех выпадающих списков
const dropdowns = document.querySelectorAll('.dropdown');

dropdowns.forEach(dropdown => {
    const dropdownValue = dropdown.querySelector('.dropdown__value');
    const dropdownList = dropdown.querySelector('.dropdown__list');
    const dropdownItems = dropdown.querySelectorAll('.dropdown__item');

    dropdownValue.addEventListener('click', function(event) {
        event.stopPropagation();

        // Закрываем все другие открытые списки
        document.querySelectorAll('.dropdown__list_active').forEach(openList => {
            if (openList !== dropdownList) {
            openList.classList.remove('dropdown__list_active');
            }
        });

        dropdownList.classList.toggle('dropdown__list_active');
    });

    dropdownItems.forEach(item => {
        item.addEventListener('click', (event) => {
            event.preventDefault();
            dropdownValue.textContent = event.target.textContent;
            dropdownList.classList.remove('dropdown__list_active');
        });
    });

    // Закрытие всех списков при клике вне их области
    document.addEventListener('click', function() {
        document.querySelectorAll('.dropdown__list_active').forEach(list => {
        list.classList.remove('dropdown__list_active');
        });
    });
})
