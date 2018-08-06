import React from "react";
import PropTypes from "prop-types";



class ImageItem extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
           image: this.props.name
        }
    }
    render() {
        const image = this.props.name;

    return  (
        <div className="Image-item">
    
    <span className="image-item-value"> {image}</span>
        </div> 
 );
}
}

ImageItem.propTypes = {
    name: PropTypes.string.isRequired,
  };
export default ImageItem;