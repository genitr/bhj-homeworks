window.addEventListener('load', () => {

    const rotators = document.querySelectorAll('.rotator__case');
    let num = 0;
    let speed = rotators[num].dataset.speed;

    function dynamicRotators() {
        setTimeout(() => {
            num >= rotators.length - 1 ? num = 0 : num++;
            for (let i = 0; i < rotators.length; i++) {
                if(i === num) {
                    rotators[i].classList.toggle('rotator__case_active');
                    rotators[i].style.color = rotators[i].dataset.color
                } else {
                    rotators[i].classList.remove('rotator__case_active');
                }
            }
            speed = rotators[num].dataset.speed;
            dynamicRotators();
        }, speed);
    }
    
    dynamicRotators();
})
