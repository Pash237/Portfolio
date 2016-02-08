import React, {Component, PropTypes} from 'react';
import "./style.scss"

class Logo extends Component {

	render() {
		return (
			<img className="header-logo" src={this.props.image}/>
		);
	}

}

export default Logo;
