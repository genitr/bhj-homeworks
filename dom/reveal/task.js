window.addEventListener('load', () => {

    function isVisible(el) {
        const { top, bottom } = el.getBoundingClientRect();
        return bottom < 0 || top > window.innerHeight ? false : true;
    }

    window.addEventListener('scroll', () => {
        const reveal = document.querySelectorAll('.reveal');
        for(let i = 0; i < reveal.length; i++) {
            if(isVisible(reveal[i])) {
                reveal[i].classList.add('reveal_active');
            } else {
                reveal[i].classList.remove('reveal_active');
            }
        }
    })
})
