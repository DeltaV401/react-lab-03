import React from 'react';
import Item from './Item';

class List extends React.Component {

  addItem = e => {
    e.preventDefault();
    this.setState({
      toDoList: this.state.toDoList.concat([new Item(this.props.newItem.value)]),
    });
    console.log(this.state.toDoList)
  }

  render() {
    return (
      <>
        <ul>
          {
            this.props.toDoList.map(item => (
              <li>{item}</li>
            ))
          }
        </ul>
      </>
    )
  }
}

export default List;