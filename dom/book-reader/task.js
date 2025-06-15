window.addEventListener('load', () => {
    const book = document.getElementById('book');
    const bookControlFontSize = document.querySelector('.book__control_font-size');
    const bookControlColor = document.querySelector('.book__control_color');
    const bookControlBackground = document.querySelector('.book__control_background');

    bookControlFontSize.addEventListener('click', (event) => {
        event.preventDefault();

        const target = event.target.closest('.font-size');
        if (!target) return;

        const currentActive = document.querySelector('.font-size_active');

        currentActive.classList.remove('font-size_active');
        target.classList.add('font-size_active');
        book.classList.remove('book_fs-small', 'book_fs-big');

        const size = target.dataset.size;

        if (size === 'small') {
            book.classList.add('book_fs-small');
        } else if (size === 'big') {
            book.classList.add('book_fs-big');
        }
    })

    bookControlColor.addEventListener('click', (event) => {
        event.preventDefault();

        const target = event.target.closest('.color');
        if (!target) return;

        const colorActive = document.querySelector('.color_active');

        colorActive.classList.remove('color_active');
        target.classList.add('color_active');
        book.classList.remove('book_color-gray', 'book_color-whitesmoke', 'book_color-black');

        const fontColor = target.dataset.textColor;

        if (fontColor === 'gray') {
            book.classList.add('book_color-gray');
        } else if (fontColor === 'whitesmoke') {
            book.classList.add('book_color-whitesmoke');
        } else if (fontColor === 'black') {
            book.classList.add('book_color-black');
        }

    })

    bookControlBackground.addEventListener('click', (event) => {
        event.preventDefault();

        const target = event.target.closest('.color');
        if (!target) return;

        const backgroundColorActive = document.querySelector('.color_active');

        backgroundColorActive.classList.remove('color_active');
        target.classList.add('color_active');
        book.classList.remove('bg_color_black', 'bg_color_gray', 'bg_color_white');

        const bgColor = target.dataset.bgColor;

        if (bgColor === 'black') {
            book.classList.add('bg_color_black');
        } else if (bgColor === 'gray') {
            book.classList.add('bg_color_gray');
        } else if (bgColor === 'white') {
            book.classList.add('bg_color_white');
        }
    })
})
