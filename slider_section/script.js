var swiper = new Swiper(".swiper-container", {
  effect: "coverflow",
  loop:true,
  grabCursor: true,
  centeredSlides: true,
  slidesPerView: "auto",
  coverflowEffect: {
    rotate: 20,
    stretch: 0,
    depth: 350,
    modifier: 1,
    slideShadows: true
  },
  autoplay: {
	  delay: 3000,
	  disableOnInteraction: false,
	},
  pagination: {
    el: ".swiper-pagination"
  }
});
