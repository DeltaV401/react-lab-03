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
    if(typeof this.props.onDataReceived === 'function') {
      this.props.onDataReceived({ 
        text: words,
        id: Math.random * 1000000,
        complete: false,
       });
    }
  }

  render() {
    return (
      <>
        <ul>
          <li>
            <form onSubmit={this.handleSubmit}>
              <input name="newInput"/>
            </form>
          </li>
        </ul>
      </>
    )
  }
}

export default Form;
