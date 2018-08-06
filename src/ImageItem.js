import React from 'react';
import PropTypes from "prop-types";
//will change this state rendering to image
class TextItem extends React.Component {
     constructor(props) {
        super(props);
        this.state = {
           text: this.props.text
        }
    }
    render() {
        return (
        <div className="text-item">
            <span className="text-item-value"> {this.props.text}</span>
    
   
        </div>
   );
}
}
 TextItem.propTypes = {
     text: PropTypes.string.isRequired
    };

    
export default TextItem;