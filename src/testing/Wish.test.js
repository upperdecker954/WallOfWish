import React from 'react';
import ReactDOM from 'react-dom';

import { shallow } from 'enzyme';
import Wish from '../components/Wish';

describe('Wish', () => {
	let wish;

	beforeEach(() => {
		wish = shallow(<Wish author={'jack'}>Test Text</Wish>);
	});

	it('renders texts of author name and wish content', () => {
	  const div = document.createElement('div');
	  ReactDOM.render(
	  	<Wish author={'test'}>Test Text</Wish>, div);
	});

	it('renders author name correctly', () => {
		expect(wish.find('.wall-post-header').text())
		.toEqual("jack\'s wish for 2017");
	});

	it('renders text correctly', () => {
		expect(wish.find('.wall-post-content').text()).toEqual("Test Text");
	});
});

