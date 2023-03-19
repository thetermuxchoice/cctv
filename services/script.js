/*
inspiration
https://dribbble.com/shots/4684682-Aquatic-Animals
*/

var swiper = new Swiper(".swiper", {
  effect: "coverflow",
  grabCursor: true,
  centeredSlides: true,
  coverflowEffect: {
    rotate: -10,
    stretch: 0,
    depth: 100,
    modifier: 3,
    slideShadows: true
  },
  loop: true,
  pagination: {
    el: ".swiper-pagination",
    clickable: true
  },
   scrollbar: {
    el: '.swiper-scrollbar',
  },
  breakpoints: {
    640: {
      slidesPerView: 2
    },
    768: {
      slidesPerView: 1
    },
    1024: {
      slidesPerView: 2
    },
    1560: {
      slidesPerView: 3
    }
  }
});

// function geSlideDataIndex(swipe){
    // var activeIndex = swipe.activeIndex;
    // var slidesLen = swipe.slides.length;
    // if(swipe.params.loop){
        // switch(swipe.activeIndex){
            // case 0:
                // activeIndex = slidesLen-3;
                // break;
            // case slidesLen-1:
                // activeIndex = 0;
                // break;
            // default:
                // --activeIndex;
        // }
    // }
    // return  activeIndex;
// }

// var $slideActive = $('.swiper-slide-active'));
// var realIndex = $slideActive.data('swiper-slide-index');
// if(typeof realIndex === 'undefined') {
    // realIndex = $slideActive.index();
// }

 swiper.on('slideChange', function () {
      var index = this.activeIndex;
      
      
      $('.team-info .team-info-item').removeClass('active').eq(this.realIndex).addClass('active')
    });




  


// $('.swiper-slide-active mitexto').attr("opacity", 1);