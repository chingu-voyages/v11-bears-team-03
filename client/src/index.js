import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';

ReactDOM.render(<App />, document.getElementById('root'));

if ('serviceWorker' in navigator) {
	/* uncomment to enable service worker */
	// navigator.serviceWorker.register('service-worker.js');
}
