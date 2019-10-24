import React from 'react';
import Item from './Item';

class List extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      toDoList: [],
    };
  }

  addItem = e => {
    e.preventDefault();
    this.toDoList = this.toDoList.concat([new Item(this.props.newItem.value)])
  }

  render() {
    return (
      <>
        <ul>
          {
            this.state.items.map(() => (
              <li>{this.props.id}</li>
            ))
          }
        </ul>
      </>
    )
  }
}

export default List;