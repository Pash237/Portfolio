import React, { Component, PropTypes } from 'react';
import { browserHistory, Router, Route, IndexRoute, Link } from 'react-router';
import GoogleAnalytics from '../GoogleAnalytics';
import TitlePage from '../TitlePage';
import ProjectPage from '../ProjectPage';
import './style.scss';

class App extends Component {

	render() {
		return (
			<div>
				<Router history={browserHistory}>
					<Route path="/" >
						<IndexRoute component={TitlePage} />
						<Route path=":project" component={ProjectPage} />
					</Route>
				</Router>
				<GoogleAnalytics />
			</div>
		);
	}

}

export default App;
