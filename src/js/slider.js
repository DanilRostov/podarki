var slider = new Swiper('.slider__swiper', {
	spaceBetween: 1000,
	loop: true,
	effect: 'coverflow',
	// autoplay: {
 //        delay: 2500,
 //        disableOnInteraction: false,
 //    },
    coverflowEffect: {
        rotate: 100,
        stretch: 0,
        depth: 200,
        modifier: 1,
        slideShadows : true,
    },
	pagination: {
		el: '.slider__pagination',
		clickable: true,
	},
	navigation: {
	   	nextEl: '.slider__button--next',
	    prevEl: '.slider__button--prev',
    },
});