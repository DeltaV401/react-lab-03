import React from 'react';
import Header from './components/Header';
import Footer from './components/Footer';
import List from './components/List';

class App extends React.Component {
  render() {
    return (
      <>
        <Header />
        <List />
        <Footer />
      </>
    );
  }
}

export default App;
