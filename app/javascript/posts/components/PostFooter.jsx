import React from 'react'
import { Link } from 'react-router-dom'

const PostFooter = (props) => (
  <div id='footer'>
    <Link className='btn btn-primary' to={`/?post=${props.startingPostId}`}>
      Back to Beginning
    </Link>
  </div>
)

export default PostFooter