import React from 'react';

class Item extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }

  handleUpdate = e => {
    e.preventDefault();
    this.props.updateItem(this.props.item.id)
  }

  handleDelete = e => {
    e.preventDefault();
    this.props.deleteItem(this.props.item.id)
  }

  render() {
    let { complete, id, text } = this.props.item;
    return (
      <li className={`complete-${complete}`}>
        <span onClick={this.handleUpdate}>
          {text}
        </span>
        <button onClick={this.handleDelete}>delete</button>
      </li>
    )
  }
}

export default Item;
