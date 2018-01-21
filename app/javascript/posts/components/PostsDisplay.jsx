import React from 'react'  
import axios from 'axios'
import config from '../../js/config.js';
import Post from './Post'
import PostNavigation from './PostNavigation'
import PostFooter from './PostFooter'
import { 
  Table, 
  Header, 
  Body, 
  Row, 
  Heading, 
  Cell 
} from '@react-spectre/table'

class PostsDisplay extends React.Component {  
  constructor () {
    super();
    this.state = {
      posts: []
    }
    this.fetchPosts = this.fetchPosts.bind(this);
  }

  fetchPosts () {
    axios.get(`${config.baseApiUrl}posts`)
      .then((resp) => {
        this.setState({ posts: resp.data.posts });
      })
      .catch(error => {
        console.error(error);
      });
  }

  componentDidMount () {
    this.fetchPosts();
  }

  render () {
    const posts = this.state.posts

    return (
      <div>
        <h3>Posts</h3>
        <Table hover>
          <thead>
            <th>Title</th>
            <th></th>
            <th>Body</th>
            <th>Published</th>
          </thead>
          <tbody>
            {
              posts.map((post) => {
                return <tr key={post.id}>
                  <td>{post.title}</td>
                  <td>{post.factorial}</td> 
                  <td>{post.body}</td>
                  <td>{String(post.published)}</td>  
                </tr>
              })
            }
          </tbody>
        </Table>
      </div>
    );
  }
}

export default PostsDisplay;  