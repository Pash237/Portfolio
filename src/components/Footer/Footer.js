import React, {Component, PropTypes} from 'react';
import "./style.scss"

class Footer extends Component {

	render() {
		return (
			<div className="footer">
				<a href="https://www.instagram.com/Pash237/"><img className="footer-button" src="button_instagram.png"/></a>
				<a href="https://vk.com/pavel.alexeev"><img className="footer-button" src="button_vk.png"/></a>
				<a href="mailto:pasha.alexeev@gmail.com"><img className="footer-button" src="button_email.png"/></a>
				<p className="footer-copyright">PAVEL ALEXEEV © {new Date().getFullYear()}</p>
			</div>
		);
	}

}

export default Footer;
