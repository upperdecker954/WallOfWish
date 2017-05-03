import React from 'react';

import Wall from '../components/Wall';
import Wish from './WishContainer';

export default ({data}) => {
	const WishNodes = data.slice().reverse().map((wish)=>{
  	return (
      <Wish wish={wish} key={wish.key} id={wish.key}/> 
    );
  });
  return (
    <Wall>
      {WishNodes}
    </Wall>
  );
}
