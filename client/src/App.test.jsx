// @ts-check

/* eslint-env jest */
import React from 'react';
import { shallow, } from 'enzyme';

import App from './App';
import Map from './Map';
import MapCircle from './MapCircle';

let wrapper;

describe('App Component', () => {
	beforeEach(() => {
		wrapper = shallow(<App />);
	});

	test('it renders and h1, with Resteraunt Tag', () => {
		expect(wrapper.find('h1').text()).toBe('Resteraunt Tag');
	});

	test('it should contain the Map', () => {
		const data = wrapper.find('#app').contains(
			<Map lat={59.95} lng={30.33}>
				<MapCircle center={{ lat: 43.288858399999995, lng: -72.3941547, }} />
			</Map>,
		);

		expect(data).toBeTruthy();
	});
});
