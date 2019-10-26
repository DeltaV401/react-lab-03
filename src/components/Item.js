import React from 'react';

class Item extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }

  toggleComplete = e => {
    e.preventDefault();
    this.props.toggleComplete(this.props.item.id)
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
    let { complete, text, name } = this.props.item;
    return (
      <li className={`complete-${complete}`}>
        <span>{name} has to </span>
        <span onClick={this.toggleComplete}>
          {text}
        </span>
        <button onClick={this.handleDelete}>delete</button>
      </li>
    )
  }
}

export default Item;
