import '../App.css';
import { Component } from 'react';

class Counter extends Component{
    constructor(props){
        super(props)
        this.state = {
            counter: parseInt(props.number)
        }
        this.handleIncrement = this.handleIncrement.bind(this);
        this.handleDecrement = this.handleDecrement.bind(this);
    }

    handleIncrement(){
        this.setState({ counter: this.state.counter + 1})
    }

    handleDecrement(){
        this.setState({ counter: this.state.counter - 1})
    }

    render(){

        return(
          <div className="App">
            <div className="App-header">
                <button onClick={this.handleIncrement}>Increment</button>
                <button onClick={this.handleDecrement}>Decrement</button>
                <p>{this.state.counter}</p>
            </div>
          </div>
        )
      }
}

class StateClass extends Component{
  render(){

    return(
      <Counter number="77" />
    )

  }
}

export default StateClass;
