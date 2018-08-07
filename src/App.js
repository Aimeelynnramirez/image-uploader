import React, { Component } from 'react';
import logo from './BannerHeader.jpg';
import './App.css';
import TextList from './ImageList';
import ImageUpload from './Image.js';
class App extends Component {

  render() {

    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-header" alt="logo" />
        </header>
    
      <ImageUpload/>

       
      </div>
    );
  }
}

export default App;