import React, { Component } from 'react';

import Wish from '../components/Wish';

class WishContainer extends Component {
	shouldComponentUpdate(nextProps) {
		return this.props.wish.id !== nextProps.wish.id;
	}

	render() {
		const wish = this.props.wish;
		return (
			<Wish author={wish.author}>
				{wish.txt}
			</Wish>
		);
	}
}

export default WishContainer;