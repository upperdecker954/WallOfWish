import React from 'react';
import ReactDOM from 'react-dom';

import Wall from '../components/Wall';

describe('Wall', () => {

	it('renders wishes without crashing', () => {
	  const div = document.createElement('div');
	  ReactDOM.render(<Wall />, div);
	});
});