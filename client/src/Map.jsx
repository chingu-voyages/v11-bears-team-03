/* globals google */
import React, { Component, createRef, createContext } from 'react';

import CustomMap from './CustomMap';

export const MapContext = createContext({ map: null, name: '' });

class Map extends Component {
	constructor(props) {
		super(props);

		this.map = createRef();

		this.googleMap = null;

		this.state = {
			map: null,
		};
	}

	componentDidMount() {
		if ('geolocation' in navigator) {
			navigator.geolocation.getCurrentPosition(
				(pos) => {
					this.setState({
						map: new CustomMap(this.map.current, 10, {
							lat: pos.coords.latitude,
							lng: pos.coords.longitude,
						}),
					});
				},
				(error) => console.log(error),
			);
		}
	}

	render() {
		return (
			<MapContext.Provider value={{ map: this.state.map, name: 'Joseph' }}>
				<div ref={this.map} style={{ height: '100vh' }}>
					{this.props.children}
				</div>
			</MapContext.Provider>
		);
	}
}

export default Map;
