import React from 'react';

class Form extends React.Component {

  submitData = e => {
    e.preventDefault();
  }

  changedThings = e => {
    let value = e.target.value;
    this.props.do(value);
  }

  render() {
    return (
      <form onSubmit={this.submitData}>
        <input onChange={this.changedThings}></input>
      </form>
    );
  }

}

export default Form;
