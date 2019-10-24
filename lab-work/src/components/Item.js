import React from 'react';

class Item extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      text: this.props.text,
      id: Math.random * 1000000,
      complete: false,
    };
  }

  updateItem = (e, updatedItem) => {
    e.preventDefault();
    this.props.itemsList = this.props.itemsList.map(item => item.id === updatedItem.id ? updatedItem : item);
  }

  deleteItem = (e, id) => {
    e.preventDefault();
    this.props.itemsList = this.props.itemsList.filter(i => i.id !== id);
  }

  render() {
    let { complete, id, text } = this.props.item;
    return (
      <ul>
        <li className={complete}>
          <span id={id}>
            {this.state.text}
          </span>
          <button onClick={this.updateItem(this.props.id)}>update</button>
          <button onClick={this.deleteItem(this.props.id)}>delete</button>
        </li>
      </ul>
    )
  }
}

export default Item;
