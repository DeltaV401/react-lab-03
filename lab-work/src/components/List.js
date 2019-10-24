import React from 'react';
import Item from './Item';

class List extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <>
        <ul>
          {
            this.props.toDoList.map(item => (
              <Item
                key={item.id}
                item={item}
                updateItem={this.props.updateItem}
                deleteItem={this.props.deleteItem}
              />
            ))
          }
        </ul>
      </>
    )
  }
}

export default List;