import React from 'react';
import Title from './title';
import Form from './form';

class Message extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      words: 'These words belong to the message component',
    };
  }

  render() {
    return (
      <>
        <Title text={this.props.title}/>
        <h2>{this.props.text}</h2>
        <h3>{this.state.words}</h3>
        <Form do={this.props.action}/>
        <h4>Your Words: {this.props.input}</h4>
      </>
    )
  }
}

export default Message;
