(function (){
	const selectList = document.querySelectorAll('.select')
	if(!selectList.length) return

	selectList.forEach((select) => {
		const field = select.querySelector('.select__field')

		select.addEventListener('click', (e) => {
			e.stopPropagation()
			select.classList.toggle('select--opened')
		})

		const elemList = select.querySelectorAll('.select__list-elem')

		elemList.forEach((elem) => {
			elem.addEventListener('click', () => {
				field.value = elem.innerHTML
			})
		})
	})

	document.addEventListener('click', () => {
		selectList.forEach((select) => {
			select.classList.remove('select--opened')
		})
	})
})();
