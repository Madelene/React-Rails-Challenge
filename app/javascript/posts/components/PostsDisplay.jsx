import React from 'react';  
import { Link } from 'react-router-dom';  
import queryString from 'query-string';  
import axios from 'axios';

class PostsDisplay extends React.Component {  
  constructor () {
    super();
    this.state = {
      post: {}
    };
  }

  fetchPost (id) {
    axios.get( `posts/${id}` )
        .then(response => {
          this.setState({ post: response.data });
        })
        .catch(error => {
          console.error(error);
        });
  }

  setQuoteIdFromQueryString (qs) {
    this.qsParams = queryString.parse(qs);
    if (this.qsParams.post) {
      // assign post ID from the URL's query string
      this.postId = Number(this.qsParams.post);
    } else {
      this.postId = 1;
      // update URL in browser to reflect current post in query string
      this.props.history.push(`/?post=${this.postId}`);
    }
  }

  componentDidMount () {
    this.setPostIdFromQueryString(this.props.location.search);
    this.fetchPost(this.postId);
  }

  componentWillReceiveProps (nextProps) {
    this.setPostIdFromQueryString(nextProps.location.search);
    this.fetchPost(this.postId);
  }

  render () {
    const nextPostId = Number(this.state.post.id) + 1;

    return (
      <div>
        <Link to={`/?post=${nextPostId}`}>Next</Link>
        <p>{this.state.post.title}</p>
        <p>{this.state.post.factorial}</p>
        <p>{this.state.post.body}</p>
        <p>{this.state.post.published}</p>
      </div>
    );
  }
}

export default PostsDisplay;  