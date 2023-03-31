$(function () {

  $('.menu-btn').on('click', function () {
    $('.menu').toggleClass('menu--active');
  })

  $('.top__items').slick({
    slidesToShow: 3,
    slidesToScroll: 3,
    infinite: true,
    nextArrow: '<button type="button" class="slick-next"><svg width="8" height="29" viewBox="0 0 8 29" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M1 1L6.37931 13.0667L7 14.4667L6.37931 15.8667L1 28" stroke="#009EFF" stroke-linecap="square"/></svg></button>',
    prevArrow: '<button type="button" class="slick-prev"><svg width="8" height="29" viewBox="0 0 8 29" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M1 1L6.37931 13.0667L7 14.4667L6.37931 15.8667L1 28" stroke="#009EFF" stroke-linecap="square"/></svg></button>',
    responsive: [
      {
        breakpoint: 5000,
        settings: "unslick"
      },
      {
        breakpoint: 992,
        settings: {
          // slidesToShow: 6,
          // slidesToScroll: 1,
          centerMode: true,
          fade: true,
          autoplay: true, idesToScroll: 5,
          autoplaySpeed: 2000,
        }
      }
    ]
  });

  $('.product__slider').slick({
    arrows: false,
    dots: true,
    fade: true,
    autoplay: true,
    autoplaySpeed: 2000,
  });

  $('.specifications-slider').slick({
    slidesToShow: 4,
    slidesToScroll: 1,
    prevArrow: '<button type="button" class="slick-prev"><svg width="70" height="70" viewBox="0 0 70 70" fill="none" xmlns="http://www.w3.org/2000/svg">< path d="M68.5999 1.40039H1.3999V68.6004H68.5999V1.40039Z" fill="white"/><path d="M67.2 2.9V67.3H2.8V2.9H67.2ZM70 0H0V70H70V0Z" fill="#009EFF"/><path d="M44.0998 32.8998L25.8998 14.7998L23.7998 16.8998L41.8998 34.9998L23.7998 53.1998L25.8998 55.2998L44.0998 37.0998L46.1998 34.9998L44.0998 32.8998Z" fill="#009EFF"/></svg></button>',
    nextArrow: '<button type="button" class="slick-next"><svg width="70" height="70" viewBox="0 0 70 70" fill="none" xmlns="http://www.w3.org/2000/svg">< path d="M68.5999 1.40039H1.3999V68.6004H68.5999V1.40039Z" fill="white"/><path d="M67.2 2.9V67.3H2.8V2.9H67.2ZM70 0H0V70H70V0Z" fill="#009EFF"/><path d="M44.0998 32.8998L25.8998 14.7998L23.7998 16.8998L41.8998 34.9998L23.7998 53.1998L25.8998 55.2998L44.0998 37.0998L46.1998 34.9998L44.0998 32.8998Z" fill="#009EFF"/></svg></button>',

  })

  $('.reviews-slider').slick({
    slidesToShow: 3,
    slidesToScroll: 1,
    prevArrow: '<button type="button" class="slick-prev"><svg width="70" height="70" viewBox="0 0 70 70" fill="none" xmlns="http://www.w3.org/2000/svg">< path d="M68.5999 1.40039H1.3999V68.6004H68.5999V1.40039Z" fill="white"/><path d="M67.2 2.9V67.3H2.8V2.9H67.2ZM70 0H0V70H70V0Z" fill="#009EFF"/><path d="M44.0998 32.8998L25.8998 14.7998L23.7998 16.8998L41.8998 34.9998L23.7998 53.1998L25.8998 55.2998L44.0998 37.0998L46.1998 34.9998L44.0998 32.8998Z" fill="#009EFF"/></svg></button>',
    nextArrow: '<button type="button" class="slick-next"><svg width="70" height="70" viewBox="0 0 70 70" fill="none" xmlns="http://www.w3.org/2000/svg">< path d="M68.5999 1.40039H1.3999V68.6004H68.5999V1.40039Z" fill="white"/><path d="M67.2 2.9V67.3H2.8V2.9H67.2ZM70 0H0V70H70V0Z" fill="#009EFF"/><path d="M44.0998 32.8998L25.8998 14.7998L23.7998 16.8998L41.8998 34.9998L23.7998 53.1998L25.8998 55.2998L44.0998 37.0998L46.1998 34.9998L44.0998 32.8998Z" fill="#009EFF"/></svg></button>',
  })



  $('.card-item__add').on('click', function () {
    $(this).toggleClass('card-item__add--active');
  })

})