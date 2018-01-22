import React from 'react'
import { Table } from '@react-spectre/table'

class Post extends React.Component {

constructor(props){
  super(props);
}

render () {
  return (
        <div>
          <Table hover>
            <thead>
              <tr>
              <th>Title</th>
              <th></th>
              <th>Body</th>
              <th>Published</th>
              <th>Edit</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>{this.props.post ? this.props.post.title : ""}</td>
                <td>{this.props.post ? this.props.post.factorial : 1}</td> 
                <td>{this.props.post ? this.props.post.body : ""}</td>
                <td>{String(this.props.post ? this.props.post.published : false)}</td> 
              </tr>
            </tbody>
          </Table>
        </div>
      );
    }
  }

export default Post;