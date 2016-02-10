import React, {Component, PropTypes} from 'react';
import "./style.scss"

class Title extends Component {

	render() {
		return (
			<div className="title-page-header">
				<h1 className="title-page-header-title">{this.props.title}</h1>
				<h2 className="title-page-header-subtitle">{this.props.subtitle}</h2>
				<div className="title-page-header-description">{this.props.description}</div>
			</div>
		);
	}

}

export default Title;
