import React, { Component, PropTypes } from 'react';
import { browserHistory, Router, Route, IndexRoute, Link } from 'react-router';
import ga from 'react-ga';
import config from '../../config'
import TitlePage from '../TitlePage';
import ProjectPage from '../ProjectPage';
import './style.scss';

class App extends Component {

	constructor() {
		super();

		ga.initialize(config.googleAnalyticsId, { debug: false });

		browserHistory.listen(function(event) {
			ga.pageview(event.pathname);
		});
	}

	render() {
		return (
			<div>
				<Router history={browserHistory}>
					<Route path="/" >
						<IndexRoute component={TitlePage} />
						<Route path=":project" component={ProjectPage} />
					</Route>
				</Router>
			</div>
		);
	}

}

export default App;
