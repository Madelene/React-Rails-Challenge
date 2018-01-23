import React from 'react'
import axios from 'axios'
import config from '../../js/config.js'
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

class PostCreate extends React.Component {

constructor(props){
  super(props);
  this.state = {
    title:      this.props.post ? this.props.post.title : '',
    factorial:  this.props ? this.props.factorial : 1,
    body:       this.props.post ? this.props.post.body : '',
    published:  this.props.post ? this.props.post.published : ""
  }

  this.handleChange = this.handleChange.bind(this);
  this.fetchPosts = this.props.fetchPosts.bind(this);
  this.showPost = this.props.showPost.bind(this);
  this.addPost = this.addPost.bind(this);
  this.createFactorial = this.props.createFactorial.bind(this);
}

  componentWillReceiveProps(nextProps) {
    if (nextProps.factorial) {
      this.setState({ factorial: nextProps.factorial });
    }
  }

  addPost(){
  	console.log(this.props.factorial);
  	this.createFactorial();
    axios({
      method: 'post',
      url: `${config.baseApiUrl}posts`,
      data: {
        title: this.state.title,
        body: this.state.body,
        published: this.state.published,
        factorial: this.props.factorial
      }
    }).then((resp) => {
      this.setState({
      	post: resp.data.post,
      });
      this.fetchPosts();
    })
    .catch((err) => {
      console.log(err);
    })
  }

  handleChange(e, key) {
    let state = {}
    state[key] = e.target.value
    this.setState(state);
  }

render () {
  return (
    <div>
    <h3>Create Post: </h3>
      <Table>
        <thead>
        <tr>
          <th>Title:</th>
          <Input
            name="title"
            style={{marginBottom:"8px"}}
            value={ this.state.title }
            placeholder="Create A Title"
            onChange={ (e) => this.handleChange(e, "title") }
          />
          <th>Body:</th>
          <Input
            name="body"
            style={{marginBottom:"8px"}}
            value={ this.state.body }
            placeholder="Add some body text"
            onChange={ (e) => this.handleChange(e, "body") }
          />
          <th>Published:</th>
          <Select
            name="published"
            value={ this.state.published }
            onChange={ (e) => this.handleChange(e, "published") }
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
            onClick={(event) => { this.addPost(); this.createFactorial();}}>
            Add Post
          </Button>
        </div>
      );
    }
  }

export default PostCreate;

