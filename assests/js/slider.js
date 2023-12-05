document.getElementById('radio1').checked = true;
var counter = 2;
const prev = document.querySelector('js-prevButton');
setInterval(function() {
    document.getElementById('radio' + counter).checked = true;
    counter++;
    if (counter > 10) {
        counter = 1;
    }
}, 3000);

