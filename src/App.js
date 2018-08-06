import React, { Component } from 'react';
import banner from './Banner.jpg';
import './App.css';
import TextList from './ImageList';
import ImageUpload from './Image.js';
import image from './Instagram-Feed-Cori-Bush-flipped.png';

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
        <header className="header">
          <img  className="App-title" src={banner} alt="logo" />
        </header>
   <ImageUpload></ImageUpload>
      <div className= "text" >
           
      

           </div>
      </div>
    );
  }
}

export default App;
