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
    this.setState(state => ({
      toDoList: state.toDoList.concat([toDo])
    }))
  }

  updateItem = updatedToDo => {
    this.setState(state => ({
      toDoList: state.toDoList.map(toDo => toDo.id === updatedToDo.id ? updatedToDo : toDo)
    }));
  }

  toggleComplete = toggledID => {
    this.setState(state => ({
      toDoList: state.toDoList.map(toDo => toDo.id === toggledID ?
        {
          ...toDo,
          complete: !toDo.complete,
        } : toDo,
      )
    }))
  }

  deleteItem = id => {
    this.setState(state => ({
      toDoList: state.toDoList.filter(toDo => toDo.id !== id)
    }));
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
          updateItem={this.updateItem}
          deleteItem={this.deleteItem}
        />
        <Footer />
      </>
    );
  }
}

export default App;
