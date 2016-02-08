
import React, { Component, PropTypes } from 'react';
import Logo from '../Logo'
import Title from '../Title'
import Footer from '../Footer'
import ProjectGrid from '../ProjectGrid'

class TitlePage extends Component {

	render() {
		return (
			<div>
				<Logo image="logo.png"/>
				<Title title="Pavel Alexeev" subtitle="Saint Petersburg, Russia"/>
				<ProjectGrid />
				<Footer />
			</div>
		);
	}

}

export default TitlePage;
