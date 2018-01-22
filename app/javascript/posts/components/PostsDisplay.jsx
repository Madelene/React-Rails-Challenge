import React from 'react'  
import axios from 'axios'
import config from '../../js/config.js'
import Post from './Post'
import PostNavigation from './PostNavigation'
import PostFooter from './PostFooter'
import { Table } from '@react-spectre/table'
import { Button } from '@react-spectre/button'

class PostsDisplay extends React.Component {  
  constructor () {
    super();
    this.state = {
      posts: []
    }
    this.fetchPosts = this.fetchPosts.bind(this);
    this.showPost   = this.showPost.bind(this);
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

  showPost (event,id){
    axios.get(`${config.baseApiUrl}posts/${id}`)
    .then((resp) => {
      this.setState({ post: resp.data });
    })
    .catch((err) => {
      console.log(err);
    });
  }

  deletePost (event,id){
    axios.get(`${config.baseApiUrl}posts/${id}/disable`)
    .then((resp) => {
      this.setState({ post: resp.data });
      this.fetchPosts();
    })
    .catch((err) => {
      console.log(err);
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
            <tr>
            <th>Title</th>
            <th></th>
            <th>Body</th>
            <th>Published</th>
            <th>Edit</th>
            <th>Delete</th>
            </tr>
          </thead>
          <tbody>
            {
              posts.map((post) => {
                return <tr key={post.id}>
                  <td>{post.title}</td>
                  <td>{post.factorial}</td> 
                  <td>{post.body}</td>
                  <td>{String(post.published)}</td> 
                  <td><Button onClick={ (e) => this.showPost(e, post.id) }>
                    Click Me To See and Edit a Post!
                  </Button>
                  </td>
                  <td><Button onClick={ (e) => this.deletePost(e, post.id) }>
                    Delete this Post
                  </Button>
                  </td>
                </tr>
              })
            }
          </tbody>
        </Table>
        <br/>
        <div>
          <Post 
            post={this.state.post} 
            fetchPosts={this.fetchPosts}
            showPost={this.showPost}
          />
        </div>
      </div>
    );
  }
}

export default PostsDisplay;  