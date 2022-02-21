$(document).ready(function(){
    $('.slider').slick({
        infinite: true,
        slidesToShow: 3,
        slidesToScroll: 1,
        prevArrow: '<button type="button" class="slick-prev"><img src="../../icons/icons/services/arrow1.png"></button>',
        nextArrow: '<button type="button" class="slick-next"><img src="../icons/icons/services/arrow2.png"></button>'
    });
});
