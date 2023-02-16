// const mySwiper = new Swiper('.swiper-container', {
  // effect: 'coverflow',
  // slidesPerView: 'auto',// 根據 slide 的寬度來設定 slide 可視數量
  // centeredSlides: true,//active slide 會置中，而不是預設狀態下的靠左
  // coverflowEffect: {
    // slideShadows: true,
    // rotate: 20,//slide 做 3D 旋轉時 Y 軸的旋轉角度
    // stretch: 0,//每個 slide 之間的拉伸直，越大 slide 靠得越緊
    // depth: 350,//slide 的位置深度值，值越大 z 軸距離越遠，看起來越小
    // modifier: 1,//depth 和 rotate 和 stretch 的倍率
  // },
// });
// Params
var sliderSelector = '.swiper-container',
    options = {
      init: false,
      loop: true,
      speed:800,
      slidesPerView: 2, // or 'auto'
      // spaceBetween: 10,
      centeredSlides : true,
      effect: 'coverflow', // 'cube', 'fade', 'coverflow',
      coverflowEffect: {
        rotate: 20, // Slide rotate in degrees
        stretch: 0, // Stretch space between slides (in px)
        depth: 350, // Depth offset in px (slides translate in Z axis)
        modifier: 1, // Effect multipler
        slideShadows : true, // Enables slides shadows
      },
      grabCursor: true,
      parallax: true,
      pagination: {
        el: '.swiper-pagination',
        clickable: true,
      },
      navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
      },
      breakpoints: {
        1023: {
          slidesPerView: 1,
          spaceBetween: 0
        }
      },
      // Events
      on: {
        imagesReady: function(){
          this.el.classList.remove('loading');
        }
      }
    };
var mySwiper = new Swiper(sliderSelector, options);

// Initialize slider
mySwiper.init();