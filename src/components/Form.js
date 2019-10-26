import React from 'react';

class Form extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      input: '',
    }
  }

  handleSubmit = e => {
    e.preventDefault();
    let words = e.target.newInput.value;
    let name = e.target.nameInput.value;
    if(typeof this.props.onDataReceived === 'function') {
      this.props.onDataReceived({
        name: name,
        text: words,
        id: Math.random() * 1000000,
        complete: false,
       });
    }
    e.target.newInput.reset();
    e.target.nameInput.reset();
  }

  render() {
    return (
      <>
        <ul>
          <li>
            <form>
              <input name="newInput" placeholder="What to do?"/>
              <input name="nameInput" placeholder="Who is doing it?"/>
              <button onSubmit={this.handleSubmit}>Submit ToDo</button>
            </form>
          </li>
        </ul>
      </>
    )
  }
}

export default Form;
