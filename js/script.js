$(function() {
  // Меню
  $('.header__toggle').click(() => {
    if ($('.menu').hasClass('menu-active')) {
      $('body').css('overflow', 'initial');
      $('.menu').removeClass('menu-active');
    } else {
      $(window).scrollTop(0);
      $('body').css('overflow', 'hidden');
      $('.menu').addClass('menu-active');
    }
  });

  // Слайдер
  $('.partners__container').slick({
    slidesToShow: 4,
    slidesToScroll: 1,
    infinite: true,
    arrows: false,
    autoplay: true,
    autoplaySpeed: 2000,
    adaptiveHeight: true,
    responsive: [
      {
        breakpoint: 1023,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          infinite: true,
          centerMode: true,
          variableWidth: true,
          dots: true
        }
      }
    ]
  })  
})