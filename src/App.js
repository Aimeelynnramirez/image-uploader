import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import ImageList from './ImageList';
import ImageUpload from './Image.js';
class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      imagevalue:'',
      imageStore: [
        {
          image:'testing',
        }  
      ],
    
      };
    this.handleImageChange = this.handleImageChange.bind(this)
    this.handleImageClick = this.handleImageClick.bind(this)
    
    }  

    handleImageChange(e) {
    this.setState({ 
      imagevalue: e.target.value
    })
    
  }

  handleImageClick(event) {
    let obj = {
      image: this.state.imagevalue
   
    };
    
    let store = this.state.imageStore;
     //console.log('this image store has passed', store);
    store.push(obj);
   // console.log('this image store has passed', obj);

    this.setState({ 
      imageStore:  store,

    });

  }
  render() {
    const list = this.state.imageStore;

    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
      <ImageUpload/>
      <div className= "App-Intro">
           
           <input type="text" placeholder="text value" className="text" onChange={ this.handleImageChange } />
         
         
           <button className="addbutton"  onClick={this.handleImageClick} >Add Item</button>
       
     
           <ImageList imageItems={list} />

           </div>
      </div>
    );
  }
}

export default App;
