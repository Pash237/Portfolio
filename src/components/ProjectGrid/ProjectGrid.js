
import React, { Component, PropTypes } from 'react';
import Logo from '../Logo'
import Title from '../Title'
import Footer from '../Footer'
import ProjectCell from '../ProjectCell'
import fetch from 'node-fetch'

class ProjectGrid extends Component {

	constructor(props) {
		super(props);

		this.state = {
			projects: []
		};

		this.loadProjects = this.loadProjects.bind(this);
	}

	componentDidMount() {
		this.loadProjects();
	}

	loadProjects() {
		fetch('http://localhost:8080/projects.json')
			.then((response) => {
				return response.json();
			})
			.then((data) => {
				this.setState({ projects: data });
			});
	}

	render() {
		return (
			<div>
				{
					this.state.projects.map((project, i) => {
						return <ProjectCell key={i} project={project}/>
					})
				}
			</div>
		);
	}

}

export default ProjectGrid;
