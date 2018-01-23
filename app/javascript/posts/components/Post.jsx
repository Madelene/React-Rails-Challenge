import React from 'react'
import axios from 'axios'
import config from '../../js/config.js'
import PostCreate from './PostCreate'
// import Factorial from './Factorial'
import { Table } from '@react-spectre/table'
import { FormGroup, 
         Input, 
         TextArea, 
         Select, 
         Radio, 
         CheckBox, 
         Switch 
       } from '@react-spectre/form'
import { Button } from '@react-spectre/button'

class Post extends React.Component {

constructor(props){
  super(props);
  this.state = {
    title:      this.props.post ? this.props.post.title : '',
    factorial:  this.props ? this.props.factorial : 1,
    body:       this.props.post ? this.props.post.body : '',
    published:  this.props.post ? this.props.post.published : "",
    updateError: false
  }
  this.editPost = this.editPost.bind(this);
  this.handleChange = this.handleChange.bind(this);
  this.fetchPosts = this.props.fetchPosts.bind(this);
  this.showPost = this.props.showPost.bind(this);
  this.createFactorial = this.props.createFactorial.bind(this);
}

  editPost (){
    axios({
      method: 'patch',
      url: `${config.baseApiUrl}posts/${this.props.post.id}`,
      data: {
        id: this.state.id,
        title: this.state.title,
        factorial: this.props.factorial,
        body: this.state.body,
        published: this.state.published
      }
    }).then((resp) => {
      this.createFactorial();
      this.setState({
        info: resp.data,
        factorial: this.state.factorial,
        updateError: false
      });
      this.fetchPosts();
    }).catch((error) => {
      console.log(error)
      this.setState({
        updateError: 'Could not connect to server!'
      })
    });
  }

  handleChange (e) {
    var name  = e.target.name
    var value = e.target.value 
    this.setState({
      [name]: value,
      updateError: false
    });
  }

render () {
  return (
    <div>
      <h3>Single Post: </h3>
      <Table>
        <thead>
        <tr>
          <th>Title: <mark>{ this.props.post ? this.props.post.title : "" }</mark></th>
          <Input
            name="title"
            style={{marginBottom:"8px"}}
            value={ this.state.title }
            placeholder={this.props.post ? this.props.post.title : "Update Title"}
            onChange={ this.handleChange }
          />
          <th>Factorial: <mark>{ this.state ? this.state.factorial  : "" }</mark></th>
          <th>Body: <mark>{this.props.post ? this.props.post.body : ""}</mark></th>
          <Input
            name="body"
            style={{marginBottom:"8px"}}
            value={ this.state.body }
            placeholder="Update Body"
            onChange={ this.handleChange }
          />
          <th>Published: <mark>{ String(this.props.post ? this.props.post.published : true) }</mark></th>
          <Select
            name="published"
            value={ this.state.published }
            onChange={ this.handleChange }
            >
            <option>true</option>
            <option>false</option>
          </Select>
        </tr>
        </thead>
      </Table>  
          <br/>
          <Button
            className="btn btn-primary btn-large centerButton"
            onClick={(event) => { this.editPost(); this.createFactorial();}}>
            Update Post
          </Button>

          <div>
                <br/>
            <PostCreate 
              post={this.state.post} 
              fetchPosts={this.fetchPosts}
              showPost={this.showPost}
              createFactorial={this.createFactorial}
              factorial={this.props.factorial}
            />
          </div>
        </div>
      );
    }
  }

export default Post;

