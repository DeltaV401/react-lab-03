import React from 'react';
import Header from './components/Header';
import Footer from './components/Footer';
import Form from './components/Form';
import List from './components/List';
import Item from './components/Item';

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      toDoList: [],
    }
  }

  addToDo = toDo => {
    this.setState(state => ({ toDoList: state.toDoList.concat([toDo])}))
  }

  render() {
    console.log(this.state.toDoList)
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
