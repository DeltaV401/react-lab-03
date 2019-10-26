import React from 'react';

class Form extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      input: '',
    }
  }

  handleSubmit = e => {
    let words = e.target.newInput.value;
    let name = e.target.nameInput.value;
    let difficulty = e.target.difficulty.value;
    let date = e.target.dueDate.value;
    if(typeof this.props.onDataReceived === 'function') {
      e.preventDefault();
      this.props.onDataReceived({
        date: date,
        difficulty: difficulty,
        name: name,
        text: words,
        id: Math.random() * 1000000,
        complete: false,
       });
    }
    e.target.reset();
  }

  render() {
    return (
      <>
        <ul>
          <li>
            <form onSubmit={this.handleSubmit}>
              <input name="nameInput" placeholder="Who is doing it?"/>
              <input name="newInput" placeholder="What to do?"/>
              <input name="dueDate" type="date"/>
              <span>Difficulty: <input type="range" min="1" max="5" step="1" name="difficulty"/></span>
              <button>Submit</button>
            </form>
          </li>
        </ul>
      </>
    )
  }
}

export default Form;
