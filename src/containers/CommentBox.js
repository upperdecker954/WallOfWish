import React, { Component } from 'react';

import CommentForm from '../containers/CommentForm';
import Wall from './Wall';

import firebase from 'firebase';
import { load, post } from '../firebase/transactions';
import { config } from '../firebase/config';

class CommentBox extends Component {
  constructor(props) {
    super(props);
    
    this.state = {
      data: []
    };
    
    this.loadComments = this.loadComments.bind(this);
  }
    
  componentDidMount() {
  	this.rootRef = firebase.initializeApp(config).database().ref("/wishes");
    this.loadComments(this.rootRef);
  }

  componentWillUnmount() {
  	this.rootRef.off('value');
  }

  loadComments(database) {
    let promise = load(database);
    promise.then((data) => {
      this.setState({data: this.state.data.concat(data)});
    })
  }
    
  handleCommentSubmit(wish) {
    const data = {
      author: wish.author,
      txt: wish.txt
    };
    post(this.rootRef, data);

    wish.key = Math.random();
    this.setState({data: this.state.data.concat(wish)});
  }
    
  render() {
    return (
      <div className="commentBox">
        <h1 className='title'>
        	&lt;
          <span className='hello'>Hello</span>
          <span className='year'>-2017</span>
          /&gt;
        </h1>
        <div className='commentArea'>
        	<CommentForm onCommentSubmit={this.handleCommentSubmit.bind(this)}></CommentForm>
      	</div>
        <Wall data={this.state.data}></Wall>
      </div>
    );
  }
}

export default CommentBox;