import React from 'react';
import ReactDOM from 'react-dom';
import { shallow } from 'enzyme';
import CommentForm from '../containers/CommentForm';

describe('CommentForm', () => {
	let commentForm;
	beforeEach(() => {
	 	commentForm = shallow(<CommentForm/>);
	});

	it('renders without crashing', () => {
	  const div = document.createElement('div');
	  ReactDOM.render(<CommentForm />, div);
	});

	it('renders inputs', () => {
		expect(commentForm.find('.group').find('.input').exists()).toBe(true);
	});

	it('renders labels', () => {
		expect(commentForm.find('.group').find('label').exists()).toBe(true);
	});

	it('renders submit button with text', () => {
		expect(commentForm.find('input[type="submit"]').exists()).toBe(true);
		expect(commentForm.find('input[value="Post"]').exists()).toBe(true);
	});

	it('should post data without crashing or errors', () => {
		// 1. no post in the wall
		// 2. null in any input should not be submitted
		// 3. after succussful submission, new wish should be on the wall
	});
});
