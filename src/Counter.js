
import React from 'react';

class Counter extends React.Component {
    constructor(props) {
      super(props);
      this.state = { value: props.initialValue };
      this.increment = this.increment.bind(this);
      this.decrement = this.decrement.bind(this);
    }
  
    increment() {
      this.setState({ value: this.state.value + 1 });
    }
  
    decrement() {
      this.setState({ value: this.state.value - 1 });
    }
  
    render() {
      return React.createElement(
        'div',
        null,
        React.createElement('h2', null, `Counter: ${this.state.value}`),
        React.createElement('button', { onClick: this.decrement }, 'Decrement'),
        React.createElement('button', { onClick: this.increment }, 'Increment')
      );
    }
  }
  
export default Counter;