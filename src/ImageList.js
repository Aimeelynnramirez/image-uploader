import React from "react";

// import the Text items component
import TextItem from './ImageItem.js';


function TextList(props) {
  return (
    <div>
        <div>
            <span className="header-item">Text:</span>

        </div> 
      {props.textItems.map((c, index) => <TextItem key={index} text={c.text}/>)}
     </div> 
  ); 
} 

export default TextList;