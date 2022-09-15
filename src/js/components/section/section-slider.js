import Swiper, { Navigation, Pagination } from 'swiper';

(function() {
	const swiper = new Swiper('.slider__box', {
		modules: [Navigation, Pagination],
		slidesPerView: 2.75,
		spaceBetween: 30,
		grabCursor: true,
		pagination: {
			el: '.slider__pagination',
			type: 'bullets',
			bulletClass: 'slider__bullet',
			bulletActiveClass: 'slider__bullet--current',
			clickable: true,
		},
		navigation: {
			nextEl: '.slider__nav-button--next',
			prevEl: '.slider__nav-button--prev',
		},breakpoints: {
			320: {
				slidesPerView: 2.5,
				spaceBetween: 16
			},
			769: {
				spaceBetween: 22
			},
			1281: {
				slidesPerView: 2.75,
				spaceBetween: 30
			}
		}
	});
}());
