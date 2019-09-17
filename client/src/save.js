const service = new google.maps.places.PlacesService(values.map.googleMap);

console.log(service);

service.nearbySearch(
	{
		location: { lat, lng },

		radius: 8046,
		type: ['restaurant'],
		fields: ['name', 'geometry'],
	},
	(results, status) => {
		if (status === google.maps.places.PlacesServiceStatus.OK) {
			let infowindow = new google.maps.InfoWindow();
			results.forEach((place) => {
				console.log(place);
				const marker = new google.maps.Marker({
					map: values.map.googleMap,
					position: place.geometry.location,
				});

				google.maps.event.addListener(marker, 'click', function() {
					infowindow.setContent(place.name);
					infowindow.open(values.map.googleMap, this);
				});
			});
		}
	},
);
