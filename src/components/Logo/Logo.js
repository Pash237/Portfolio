
import React, { Component, PropTypes } from 'react';

class Logo extends Component {

    render() {
        return (
            <img className="logo" src={this.props.image}/>
        );
    }

}

export default Logo;
