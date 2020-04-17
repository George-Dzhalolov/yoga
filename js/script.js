$(document).ready(function () {
  $(".health__slider").slick({
    arrows: false,
    centermod: true,
  });
});

$(document).ready(function () {
  $(".instructors__slider-top").slick({
    arrows: false,
    centermod: true,
  });
});

$(document).ready(function () {
  $(".instructors__slider-bottom").slick({
    arrows: false,
    centermod: true,
  });
});

if ($(".instructors__bottom-slider").length > 0) {
  $(".instructors__bottom-slider").slick({
    autoplay: false,
    dots: false,
    accessibility: false,
    slidesToShow: 1,
    autoplaySleed: 3000,
    draggable: false,
  });
}
