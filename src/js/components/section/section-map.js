ymaps.ready(function () {
	const marker = document.querySelector('.map-marker');
	if(!marker) return;

	const map = new ymaps.Map('map', {
		center: [59.948194, 30.356644],
		zoom: 12,
		controls: []
	});

	const squareLayout = ymaps.templateLayoutFactory.createClass(marker.outerHTML);

	const squarePlacemark = new ymaps.Placemark(
		[59.928194, 30.346644], {}, {
			iconLayout: squareLayout,
			iconShape: {
				type: 'Rectangle',
				coordinates: [
					[34, 100], [300, 500]
				]
			}
		}
	);
	map.geoObjects.add(squarePlacemark);
});
