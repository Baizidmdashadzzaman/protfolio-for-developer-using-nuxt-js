$(document).ready(function () {
  $('.owl-two').owlCarousel({
    loop: true,
    margin: 30,
    nav: false,
    responsiveClass: true,
    autoplay: false,
    autoplayTimeout: 5000,
    autoplaySpeed: 1000,
    autoplayHoverPause: false,
    responsive: {
      0: {
        items: 1,
        nav: false
      },
      480: {
        items: 1,
        nav: false
      },
      700: {
        items: 1,
        nav: false
      },
      1090: {
        items: 3,
        nav: false
      }
    }
  })
})

$(document).ready(function () {
  $("#owl-demo1").owlCarousel({
    loop: true,
    margin: 20,
    nav: false,
    responsiveClass: true,
    responsive: {
      0: {
        items: 1,
        nav: false
      },
      736: {
        items: 1,
        nav: false
      },
      1000: {
        items: 2,
        nav: false,
        loop: false
      }
    }
  })
})