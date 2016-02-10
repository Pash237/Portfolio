import React, {Component, PropTypes} from 'react';
import "./style.scss"

class Footer extends Component {

	render() {
		return (
			<div className="footer">
				<img className="footer-button" src="button_instagram.png"/>
				<img className="footer-button" src="button_vk.png"/>
				<img className="footer-button" src="button_email.png"/>
				<p className="footer-copyright">PAVEL ALEXEEV © 2016</p>
			</div>
		);
	}

}

export default Footer;
