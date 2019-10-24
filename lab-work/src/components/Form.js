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
    this.setState({
      input: words,
    });
    console.log(this.state.input)
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
