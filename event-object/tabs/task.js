const tabGroups = document.querySelectorAll('.tab__navigation');

tabGroups.forEach(tabGroup => {
  const tabs = tabGroup.querySelectorAll('.tab');
  const contentsContainer = tabGroup.nextElementSibling;
  const contents = contentsContainer.querySelectorAll('.tab__content');

  tabs.forEach(tab => {
    tab.addEventListener('click', function() {
      const tabIndex = Array.from(tabs).indexOf(this);

      // Проверяем, что контент с таким индексом существует
      if (contents[tabIndex]) {
        tabs.forEach(t => t.classList.remove('tab_active'));
        contents.forEach(c => c.classList.remove('tab__content_active'));

        // Добавляем активные классы
        this.classList.add('tab_active');
        contents[tabIndex].classList.add('tab__content_active');
      }
    });
  });
});
