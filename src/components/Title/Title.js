import React, {Component, PropTypes} from 'react';

class Title extends Component {

	render() {
		return (
			<div>
				<h1 className="header-title">{this.props.title}</h1>
				<h1 className="header-subtitle">{this.props.subtitle}</h1>
			</div>
		);
	}

}

export default Title;
