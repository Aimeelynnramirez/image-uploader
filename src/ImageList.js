import React from "react";

// import the Image items component
  import ImageItem from './ImageItem.js';


function ImageList(props) {
  return (
    <div>
        <div>
            <span className="header-Image">Image:</span>
        </div> 
      {props.imageItems.map((c, index) => <ImageItem key={index} name={c. name} />)}
     </div> 
  ); 
} 

export default ImageList;