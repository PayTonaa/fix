$('.grow').each(function () {
    var $el = $(this);
    var max = numeral($el.text().replace(/\s/g, '')).value();

    var start = 0;
    var refresh = 10;
    var totalSteps = 100;
    var step = max / totalSteps;
    function calculate() {
        start += step;
        $el.text(numeral(Math.round(start)).format(0, 0));
        if (start < max) {
            setTimeout(function () {
                calculate();
            }, refresh);
        }
    }
    calculate();
});
