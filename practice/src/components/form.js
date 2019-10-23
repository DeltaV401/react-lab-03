import React from 'react';

class Form extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      words: 'Here it is',
    }
  }

  submitData = e => {
    e.preventDefault();
  }

  changedThings = e => {
    let words = e.target.value;
    this.setState({
      words: words,
    });
  }

  render() {
    return (
      <form onSubmit={this.submitData}>
        <p>{this.state.words}</p>
        <input onChange={this.changedThings}></input>
      </form>
    );
  }

}

export default Form;
