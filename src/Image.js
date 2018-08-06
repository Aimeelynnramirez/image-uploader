import React from 'react';


class ImageUpload extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
        file: '',
      imagePreviewUrl: '',
      image:'https://i.imgur.com/wAlFbE8.png'
    };
    this.style = {
      background:"https://i.imgur.com/Rl0gjuU.png",
      width: "280px",
      height: "280px"
   };
    this.handleImageChange = this.handleImageChange.bind(this)

    }
  
    handleSubmit(e) {
      e.preventDefault();
      // TODO: do something with -> this.state.file
      console.log('handle uploading-', this.state.file);
    }
  
    handleImageChange(e) {
      e.preventDefault();
  
      let reader = new FileReader();
      let file = e.target.files[0];
      let image = e.target.value;
      reader.onloadend = () => {
        this.setState({
          image:image,
          file: file,
          imagePreviewUrl: reader.result
        });
      }
  
      reader.readAsDataURL(file)
    }
  
    render() {
      let {imagePreviewUrl, image} = this.state;
      let $imagePreview = true;
      if (imagePreviewUrl) {
        $imagePreview = (
        <div className="previewText"> 
        <div className="b">  
        <img  className="a" style={this.style} src={imagePreviewUrl} /></div></div>);
      } else {
        $imagePreview = (<div className="previewText"></div>);
      }
  
      return (
        <div className="previewComponent">
          <form onSubmit={(e)=>this.handleSubmit(e)}>
            <input className="fileInput" 
              type="file" 
              onChange={(e)=>this.handleImageChange(e)} />
            <button className="submitButton" 
              type="submit" 
              onClick={(e)=>this.handleSubmit(e)}>Upload Image</button>
          </form>
          <div className="imgPreview" >
           {$imagePreview}
          
          </div>
        </div>
      )
    }
  }
    
export default ImageUpload;