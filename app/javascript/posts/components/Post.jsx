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

class Post extends React.Component {

constructor(props){
  super(props);
  this.state = {
    id:         parseInt(location.pathname.replace('/posts/','')),
    title:      this.props.post ? this.props.post.title : '',
    factorial:  this.props.post ? this.props.post.factorial : "",
    body:       this.props.post ? this.props.post.body : '',
    published:  this.props.post ? this.props.post.published : "",
    updateError: false
  }
  this.editPost = this.editPost.bind(this);
  this.showPost = this.props.showPost.bind(this);
}

  editPost(){
    axios({
      method: 'patch',
      url: `${config.baseApiUrl}posts/${this.state.post.id}`,
      data: {
        id: this.state.id,
        title: this.state.title,
        factorial: this.state.factorial,
        body: this.state.body,
        published: this.state.published
      }
    }).then((resp) => {
      this.setState({
        info: resp.data,
        updateError: false
      });
      this.showPost();
    }).catch((error) => {
      console.log(error)
      this.setState({
        updateError: 'Could not connect to server!'
      })
    });
  }

  handleChange(e) {
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
            placeholder="Update Title of this Post"
            onChange={ this.handleChange }
          />
          <th>Factorial: <mark>{ this.props.post ? this.props.post.factorial  : "" }</mark></th>
          <th>Body: <mark>{this.props.post ? this.props.post.body : ""}</mark></th>
          <Input
            name="body"
            style={{marginBottom:"8px"}}
            value={ this.state.body }
            placeholder="Update Body"
            onChange={ this.handleChange }
          />
          <th>Published: <mark>{ String(this.props.post ? this.props.post.published : "") }</mark></th>
        </tr>
        </thead>
      </Table>  
          <br/>
          <Button
            className="btn btn-primary btn-large centerButton"
            onClick={ this.editPost }>
            Update Post
          </Button>
        </div>
      );
    }
  }

export default Post;

