import React from 'react';
import { randomization } from '../helpers/helpers';

export default ({author, children}) => {
  const seed = randomization();
  return (
    <article className={`wall-post wall-post-${seed}`}>
      <header className='wall-post-header'>
        { `${author}'s wish for 2017` }
      </header>
      
      <div className='wall-post-content'>
        {children.toString()}
      </div>
    </article>
  );
}