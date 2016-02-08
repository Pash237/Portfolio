import React, { Component, PropTypes } from 'react';
import GoogleAnalytics from '../GoogleAnalytics';
import TitlePage from '../TitlePage';

class App extends Component {

	render() {
		return (
			<div>
				<TitlePage />
				<GoogleAnalytics />
			</div>
		);
	}

}

export default App;
