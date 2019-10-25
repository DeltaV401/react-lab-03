import React from 'react';

class Footer extends React.Component {
  render() {
    return (
      <>
        <footer>
          <h5>
            &copy; {new Date().getFullYear()} DeltaV401
          </h5>
        </footer>
      </>
    )
  }
}

export default Footer;
