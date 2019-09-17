import React from 'react';

import './css/main.css';
import './App.css';

import Map, { MapContext } from './Map';
import MapCircle from './MapCircle';

export default function App() {
	return (
		<div id="app">
			<header>
				<h1>Resteraunt Tag</h1>
			</header>
			<Map lat={59.95} lng={30.33}>
				<MapCircle center={{ x: 43.288858399999995, y: -72.3941547 }} />
			</Map>
		</div>
	);
}
