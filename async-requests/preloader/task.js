window.addEventListener('load', () => {
    function fetchDataWithCache(callback) {
        const cacheKey = "currency_data_cache";
        const cachedData = localStorage.getItem(cacheKey);
        const preloaderImage = document.getElementById('loader');

        if (cachedData) {
            console.log("Данные взяты из кэша");
            const parsedData = JSON.parse(cachedData);
            callback(parsedData);
            preloaderImage.classList.remove('loader_active');
            return;
        }

        const xhr = new XMLHttpRequest();
        xhr.open('GET', 'https://students.netoservices.ru/nestjs-backend/slow-get-courses');
        xhr.onload = () => {
            if (xhr.readyState === xhr.DONE && xhr.status === 200) {
                const data = xhr.responseText;
                localStorage.setItem(cacheKey, data);
                console.log("Данные загружены и сохранены в кэш");
                const parsedData = JSON.parse(data);
                callback(parsedData);
                preloaderImage.classList.remove('loader_active');
            } else {
                console.error("Ошибка загрузки данных");
                preloaderImage.classList.add('loader_active');
            }
        };
        xhr.send();
    }

    fetchDataWithCache(data => {
        const valuteData = data.response.Valute;
        const currencyList = Object.values(valuteData).map(currency => ({
            code: currency.CharCode,
            value: currency.Value,
        }));

        const items = document.getElementById('items');

        // Очищаем контейнер перед добавлением новых данных
        items.innerHTML = '';

        currencyList.forEach(currency => {
            const currencyItem = document.createElement('div');
            currencyItem.className = 'item';

            const itemCode = document.createElement('div');
            itemCode.className = 'item__code';
            itemCode.textContent = currency.code;
            currencyItem.appendChild(itemCode);

            const itemValue = document.createElement('div');
            itemValue.className = 'item__value';
            itemValue.textContent = currency.value;
            currencyItem.appendChild(itemValue);

            const itemCurrency = document.createElement('div');
            itemCurrency.className = 'item__currency';
            itemCurrency.textContent = 'руб.';
            currencyItem.appendChild(itemCurrency);

            items.appendChild(currencyItem);
        });
    });
});
