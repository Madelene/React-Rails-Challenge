import React from 'react' 
import { Button } from '@react-spectre/button'

class Factorial extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      factorial: 1
    }
    this.createFactorial = this.createFactorial.bind(this);
  }

  createFactorial(num) {
    var num = Math.floor(Math.random() * 10) + 1 
    var result = num;
      if (num === 0 || num === 1) 
        return 1; 
      while (num > 1) { 
        num--;
        result *= num;
      }
      this.setState({
        factorial: result
      });
      return result; 
  }
  
  render() {
    return (
      <div>
       <Button
         className="btn btn-primary"
         onClick={ this.createFactorial }>
         Factorialize me
      </Button>
        { this.state.factorial} 
      </div>
    );
  }
}

export default Factorial;