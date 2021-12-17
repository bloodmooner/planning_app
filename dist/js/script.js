$(document).ready(function(){
      
    $('.promo__slider').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 2000,
        arrows: false,
        dots: true,
        appendDots: '.reviews__dots',
        responsive: [
            {
              breakpoint: 1200,
              settings: {
                slidesToShow: 1,
        slidesToScroll: 1,
              },
            },
            {
              breakpoint: 900,
              settings: {
                slidesToShow: 1,
        slidesToScroll: 1,
              },
            },
            {
              breakpoint: 600,
              settings: {
                slidesToShow: 1,
                slidesToScroll: 1,
              },
            },
            {
              breakpoint: 320,
              settings: {
                slidesToShow: 1,
                slidesToScroll: 1,
              },
            },
          ],
    });

    $('.resources__slider').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows:true,
        appendArrows:'.resources__arrows',
        prevArrow:'<div class="resources__arrow resources__arrow-left"><img src="icons/slider/arrow-left.svg" alt=""></div>',
        nextArrow:'<div class="resources__arrow resources__arrow-right"><img src="icons/slider/arrow-right.svg" alt=""></div>',
        dots: true,
        appendDots: '.resources__dots',
        responsive: [
            {
              breakpoint: 1200,
              settings: {
                slidesToShow: 1,
                slidesToScroll: 1,
              },
            },
            {
              breakpoint: 900,
              settings: {
                slidesToShow: 1,
                slidesToScroll: 1,
              },
            },
            {
              breakpoint: 600,
              settings: {
                slidesToShow: 1,
                slidesToScroll: 1,
                arrows:false,
              },
            },
            {
              breakpoint: 320,
              settings: {
                slidesToShow: 1,
                slidesToScroll: 1,
                arrows:false,
              },
            },
          ],
    });


    $('.quotes__slider-wrapper').slick({
        slidesToShow: 1,
        autoplay: true,
        autoplaySpeed: 4000,
        variableWidth: true,
        arrows:false,
        dots: true,
        appendDots: '.quotes__subwrapper',
        responsive: [
            {
              breakpoint: 1200,
              settings: {
                slidesToShow: 1,
              },
            },
            {
              breakpoint: 900,
              settings: {
                slidesToShow: 1,
              },
            },
            {
              breakpoint: 600,
              settings: {
                slidesToShow: 1,
              },
            },
            {
              breakpoint: 320,
              settings: {
                slidesToShow: 1,
              },
            },
          ],
    });


    
  });





new Accordion(['.accordion-container'], {
  openOnInit: [2],
  collapse: false
});


$('.header__burger').on('click', function() {
  $('.rightside-menu').removeClass('rightside-menu_close');
});
$('.rightside-menu__close').on('click', function() {
  $('.rightside-menu').addClass('rightside-menu_close');
});