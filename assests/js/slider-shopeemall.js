// function sliderShopeeMall() {
    document.getElementById('slider__shopeemall-radio1').checked = true;
    var counter_shopeemall = 2;
    setInterval(function() {
        document.getElementById('slider__shopeemall-radio' + counter_shopeemall).checked = true;
        counter_shopeemall++;
        if (counter_shopeemall > 8) {
            counter_shopeemall = 1;
        }
    }, 3000);
// }