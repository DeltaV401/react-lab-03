import React from 'react';
import Header from './components/Header';
import Footer from './components/Footer';
import Form from './components/Form';
import List from './components/List';

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      toDoList: [],
    }
  }

  addToDo = toDoList => {
    this.setState({ toDoList })
  }

  render() {
    return (
      <>
        <Header />
        <Form
          onDataReceived={this.addToDo}
        />
        <List 
          toDoList={this.state.toDoList}
        />
        <Footer />
      </>
    );
  }
}

export default App;
