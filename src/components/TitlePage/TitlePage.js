import React, {Component, PropTypes} from 'react';
import Logo from '../Logo'
import Title from '../Title'
import Footer from '../Footer'
import ProjectGrid from '../ProjectGrid'
import Email from '../Email'
import "./style.scss"

class TitlePage extends Component {

	render() {
		return (
			<div className="title-page">
				<Logo image="logo.png"/>
				<Title title="Pavel Alexeev"
				       subtitle="Saint Petersburg, Russia"
				       description="iOS, Android and Web Developer"
				/>
				<ProjectGrid />
				<Email email="pasha.alexeev@gmail.com" />
				<Footer />
			</div>
		);
	}

}

export default TitlePage;
