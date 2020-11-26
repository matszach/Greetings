import React from 'react';
import Body from './js/components/Body';
import Footer from './js/components/Footer';
import Navbar from './js/components/Navbar';
import PropertyReader from './js/services/property-reader';
import './scss/App.scss';

class App extends React.Component {

  constructor() {
    super();
    const app = this;
    PropertyReader.onLocaleChange = () => app.setState({});
  }

  render() {
    return (
      <div className="App">
        <Navbar></Navbar>
        <Body></Body>
        <Footer></Footer>
      </div>
    );
  }
 
}

export default App;
