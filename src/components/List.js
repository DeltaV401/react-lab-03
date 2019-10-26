import React from 'react';
import Item from './Item';

class List extends React.Component {
  render() {
    return (
      <>
        <ul>
          {
            this.props.toDoList.map(item => (
              <Item
                key={item.id}
                item={item}
                toggleComplete={this.props.toggleComplete}
                updateItem={this.props.updateItem}
                deleteItem={this.props.deleteItem}
                assignedTo={this.props.assignedTo}
              />
            ))
          }
        </ul>
      </>
    )
  }
}

export default List;