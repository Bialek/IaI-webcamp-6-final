$('#slider').slick({
    dots: true,
    arrows: false,
    infinite: true,
    speed: 500,
    fade: true,
    cssEase: 'linear'
  });

  $('.slider_products').slick({
    infinite: true,
    slidesToShow: 4,
    slidesToScroll: 1,
    autoplay: true,
    speed: 200,
    dots: false,
    arrows: false,
    
    responsive: [
        {
    breakpoint: 757,
    settings: {
        infinite: true,
        slidesToShow: 2,
        slidesToScroll: 1,
        autoplay: true,
        speed: 200,
        dots: false,
        arrows: true,
        nextArrow: '<div class="nextArrow"><i class="fontello-icon icon-arrow_right"></i></div>',
        prevArrow: '<div class="prevArrow"><i class="fontello-icon icon-arrow_right"></i></div>',
        }
    }]
    
    
}); 