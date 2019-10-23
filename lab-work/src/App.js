import React from 'react';
import Header from './components/Header';
import Footer from './components/Footer';
import Form from './components/Form';

class App extends React.Component {
  render() {
    return (
      <>
        <Header />
        <Form />
        <Footer />
      </>
    );
  }
}

export default App;
