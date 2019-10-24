import React from 'react';

class Item extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      item: null,
    }
  }

  deleteItem = e => {
    e.preventDefault();
    this.setState({ item: null });
  }

  render() {
    let { complete, id, text } = this.props.item;
    return (
      <ul>
        <li className={complete}>
          <span id={id}>
            {text}
          </span>
          <button onClick={this.deleteItem({id})}>delete</button>
        </li>
      </ul>
    )
  }
}

export default Item;
