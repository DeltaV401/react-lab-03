import React from 'react';

class Header extends React.Component {
  render() {
    return (
      <>
        <header>
          <h2>
            There are {this.props.count} items to complete.
          </h2>
        </header>
      </>
    );
  }
}

export default Header;