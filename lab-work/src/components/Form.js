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
      <>
        <section class="todo">
          <header id="header"></header>
          <div>
            <form onSubmit={this.handleSubmit}>
              <input placeholder="Add To Do List Item" />
              <button onClick={this.handleClick}>Add</button>
            </form>
          </div>
          <div id="items"></div>
        </section>
      </>
    )
  }
}

export default Form;
