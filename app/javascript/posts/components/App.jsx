import React from 'react'  
import {  
  BrowserRouter as Router,
  Route
} from 'react-router-dom'
import PostsDisplay from './PostsDisplay'
import Post from './Post'

const App = (props) => (  
  <Router>
    <div>
      <Route path='/' component={PostsDisplay} />
      <Route path='/promos/:id' component={Post} />
    </div>
  </Router>
)

export default App  