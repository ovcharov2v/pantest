(function (){
	const toToButton = document.querySelector('.js-to-top')
	if(!toToButton) return

	const smoothScroll = () => {
		const currentScroll = document.documentElement.scrollTop || document.body.scrollTop;
		if (currentScroll > 0) {
			window.requestAnimationFrame(smoothScroll);
			window.scrollTo (0,currentScroll - (currentScroll/20));
		}
	}

	toToButton.addEventListener('click', smoothScroll)
})();
