import React, {Component, PropTypes} from 'react';
import "./style.scss"

class Email extends Component {

	render() {
		return (
			<div className="title-page-email-container">
				<a className="title-page-email" href={"mailto:" + this.props.email}>{this.props.email}</a>
			</div>
		);
	}

}

export default Email;
