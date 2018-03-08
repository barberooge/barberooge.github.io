var positionSmall = 0;
$(document).scroll(function () {
    positionSmall = $(this).scrollTop();
    if (positionSmall > 1) {
        $(".navbar").css('background-color', '#2C3E52');
    } else {
        $(".navbar").css('background-color', 'transparent');
    }
});
