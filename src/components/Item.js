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
    let { complete, text, name, difficulty, date } = this.props.item;
    return (
      <li className={`complete-${complete}`}>
        <span className="assigned">{name} has to </span>
        <span className="taskToDo" onClick={this.toggleComplete}>
          {text}
        </span>
        <span className="dueDate"> on {date}</span>
        <span className="difficulty">Difficulty: {difficulty}</span>
        <button onClick={this.handleModal}>details</button>
        <button onClick={this.handleDelete}>delete</button>
      </li>
    )
  }
}

export default Item;
