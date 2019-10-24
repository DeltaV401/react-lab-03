import React from 'react';
import Item from './Item';

class List extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      items: [],
      itemClass: 'unclicked',
    };
  }

  handleClassToggle = e => {
    e.preventDefault();
    if(this.itemClass === 'unclicked') {
      this.itemClass = 'clicked';
    } else {
      this.itemClass = 'unclicked';
    }
  }

  addItem = e => {
    e.preventDefault();
    this.items.push(this.props.itemAdded)
  }

  render() {
    return (
      <>
        <ul>
          {
            this.state.items.map(item => (
              <li
              onClick={this.handleClassToggle}
              key={item.id}
              className={this.itemClass}>
                {this.props.itemAdded}
              </li>
            ))
          }
          <li>{this.props.itemAdded}</li>
        </ul>
      </>
    )
  }
}

export default List;