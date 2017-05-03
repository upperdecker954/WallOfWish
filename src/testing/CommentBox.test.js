import React from 'react';
import ReactDOM from 'react-dom';
import { shallow } from 'enzyme';
import CommentBox from '../containers/CommentBox';

describe('CommentBox', () => {
	it('renders without crashing', () => {
	  const div = document.createElement('div');
	  ReactDOM.render(<CommentBox />, div);
	});

	it('renders title', () => {
		const commentBox = shallow(<CommentBox />);
    expect(commentBox.find('.title').html())
    .toEqual('<h1 class="title">&lt;<span class="hello">Hello</span><span class="year">-2017</span>/&gt;</h1>');
	});
});
