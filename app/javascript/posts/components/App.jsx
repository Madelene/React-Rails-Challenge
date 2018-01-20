import React from 'react'  
import {  
  BrowserRouter as Router,
  Route
} from 'react-router-dom'
import PostsDisplay from './PostsDisplay'

const App = (props) => (  
  <Router>
    <div>
      <Route
        path='/'
        component={PostsDisplay}
      />
    </div>
  </Router>
)

export default App  