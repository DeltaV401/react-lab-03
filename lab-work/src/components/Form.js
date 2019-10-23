import React from 'react';
import List from './List';

class Form extends React.Component {
  constructor() {
    super();
    this.state = {
      input: '',
    }
  }

  handleClick = e => {
    e.preventDefault();
    let words = e.target.value;
    this.setState({
      input: words,
    });
  }

  render() {
    return (
      <form>
        <input />
        <button onClick={this.handleClick}>Add to To Do List!</button>
        <List itemAdded={this.input}/>
      </form>
    )
  }
}

export default Form;
