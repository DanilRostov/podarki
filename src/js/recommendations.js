var recommendations = new Swiper('.recommendations__swiper', {
	spaceBetween: 0,
	loop: true,
	slidesPerView: 'auto',
	effect: 'coverflow',
	// autoplay: {
 //        delay: 2500,
 //        disableOnInteraction: false,
 //    },
    coverflowEffect: {
        rotate: 100,
        stretch: 10,
        depth: 50,
        modifier: 0,
        slideShadows : true,
    },
	pagination: {
		el: '.recommendations__pagination',
		clickable: true,
	},
	navigation: {
	   	nextEl: '.recommendations__button--next',
	    prevEl: '.recommendations__button--prev',
    },
});