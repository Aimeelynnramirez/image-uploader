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
      <p>Welcome to Image Uploader. <br/>
        Where you can fliter and Image upload with a custom fliter on ReactJs.
        <br/>
        Feel free to submit to save to upload again. </p>
        </div>
        <header className="header" >
          <img  className="App-title" src="https://i.imgur.com/ydyL5Pf.png" />
        </header>
   <ImageUpload />
      <div className= "text" >
           
      

           </div>
      </div>
    );
  }
}

export default App;