import React, { useContext } from 'react';

import { MapContext } from './Map';

const MapCircle = ({
	center: { lat = 43.288858399999995, lng = -72.3941547 },
}) => {
	const values = useContext(MapContext);

	if (values && values.map) {
		console.log('[MapCircle]', values);
		const circle = new google.maps.Circle({
			map: values.map.googleMap,
			center: { lat, lng },
			radius: 8720,
		});
	}

	return null;
};

export default MapCircle;
