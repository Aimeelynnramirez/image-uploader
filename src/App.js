import React, { Component } from 'react';
import './App.css';
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
        <div className="Title">
   

        </div>
        <header className="header" >
        <p>Directions:
        1. Submit twice to save fliter.<br/>
        2. Do step one, before saving to: PNG or PDF</p>
          <img  className="App-title" src="https://d24h4out7wreu3.cloudfront.net/user_store_banner/2495998.png" />

        </header>
   <ImageUpload/>
      <div className= "text" >
           
      

           </div>
      </div>
    );
  }
}

export default App;