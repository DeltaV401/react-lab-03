import React from 'react';

import './styles.css';

import Message from './components/message.js';

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      input: this.sayIt(),
    }
  }

  sayIt(string) {
    return string;
  }

  render() {
    return (
      <>
        <Message
          text="This is my amazing application"
          title="This is my title"
          action={this.sayIt}
          input={this.state.input}
        />
      </>
    );
  }
}

export default App;
