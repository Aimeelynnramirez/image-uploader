import React, { Component } from 'react';
import logo from './BannerHeader.jpg';
import './App.css';
import TextList from './ImageList';
import ImageUpload from './Image.js';
class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      textvalue:'',
      textStore: [
        {
          text:'Comment here for more to see!'
        }  
      ],
    
      };
    this.handleImageChange = this.handleImageChange.bind(this)
    this.handleImageClick = this.handleImageClick.bind(this)
    
    }  

    handleImageChange(e) {
    this.setState({ 
      textvalue: e.target.value
    })
    
  }

  handleImageClick(event) {
    let obj = {
      text: this.state.textvalue
   
    };
    
    let store = this.state.textStore;
     //console.log('this image store has passed', store);
    store.push(obj);
   // console.log('this image store has passed', obj);

    this.setState({ 
      textStore:  store,

    });

  }
  render() {
    const list = this.state.textStore;

    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-header" alt="logo" />
        </header>
      <ImageUpload/>
      <div className= "App-Intro">
           
           <input type="text" placeholder="text value" className="text" onChange={ this.handleImageChange } />
           <button className="addbutton"  onClick={this.handleImageClick} >Add Item</button>
           <TextList textItems={list} />

           </div>
      </div>
    );
  }
}

export default App;