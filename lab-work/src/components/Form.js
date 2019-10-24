import React from 'react';
import List from './List';

class Form extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      input: '',
    }
  }

  handleClick = e => {
    e.preventDefault();
    let words = e.target.value;
    this.setState({
      input: words,
    });
  }

  render() {
    return (
      <>
        <ul>
          <li>
            <form>
              <input name="{id}" value={this.props.text} />
            </form>
          </li>
        </ul>
        <List 
          newItem={this.state.input}
        />
      </>
    )
  }
}

export default Form;
