const wrapper = document.querySelector('.cards-wrapper');
const dots = document.querySelectorAll('.dot');
let activeDotNum = 0;

dots.forEach((dot, index) => {
    dot.setAttribute('data-num', index);
    dot.addEventListener('click', function(event) {
        let clickedDotNum = event.target.dataset.num;
        console.log(clickedDotNum);

        if (clickedDotNum == activeDotNum) {
            return;
        } else {
            let displayArea = wrapper.clientWidth;
            // console.log(displayArea);
            let pixels = -displayArea * clickedDotNum;
            console.log(pixels);
            wrapper.style.transform = 'translateX(' + pixels + 'px)';

            dots[activeDotNum].classList.remove('active');

            dots[clickedDotNum].classList.add('active');

            activeDotNum = clickedDotNum;
        }
    });
});