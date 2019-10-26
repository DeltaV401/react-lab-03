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
    if(typeof this.props.onDataReceived === 'function') {
      e.preventDefault();
      this.props.onDataReceived({
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
              <input name="newInput" placeholder="What to do?"/>
              <input name="nameInput" placeholder="Who is doing it?"/>
              <button>Submit ToDo</button>
            </form>
          </li>
        </ul>
      </>
    )
  }
}

export default Form;
