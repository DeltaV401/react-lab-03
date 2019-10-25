import React from 'react';

class Header extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      count: 0,
    };
  }

  render() {
    return (
      <>
        <header>
          <h2>
            There are {this.state.count} items to complete.
          </h2>
        </header>
      </>
    );
  }
}

export default Header;