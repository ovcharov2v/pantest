(function() {
	// Progress
	const button = document.querySelector('.js-progress-set-value')
	const progressValue = document.querySelector('.js-progress-value')

	if(button && progressValue) {
		button.addEventListener('click', (e) => {
			const oldValue = parseInt(progressValue.innerText.replace(/[^0-9]/g, ""))
			let value = parseInt(e.target.innerText.replace(/[^0-9]/g, ""))
			if(value > 100) value = 100
			progressValue.style.width = `${value}%`
			console.log(oldValue)
			animateValue(oldValue, value, 400);
		})
	}
	const animateValue = (start, end, duration) => {
		if (start === end) return;
		const range = end - start;
		let current = start;
		const increment = end > start? 1 : -1;
		const stepTime = Math.abs(Math.floor(duration / range));
		const timer = setInterval(function() {
			current += increment;
			progressValue.innerHTML = `${current} %`
			if (current === end) {
				clearInterval(timer);
			}
		}, stepTime);
	}

	// Collapsed text
	const collapsed  = document.querySelector('.js-collapsed')
	const collapsedBtn  = document.querySelector('.js-collapsed-more-btn')

	if (collapsed && collapsedBtn) {
		collapsedBtn.addEventListener('click', () => {
			const oldBtnText = collapsedBtn.innerText;
			const newBtnText = collapsedBtn.dataset.title;
			collapsedBtn.dataset.title = oldBtnText
			collapsedBtn.innerText = newBtnText

			collapsed.classList.toggle('collapsed-text--full')
		})
	}
}());
