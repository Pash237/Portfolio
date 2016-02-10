
import React, { Component, PropTypes } from 'react';
import Logo from '../Logo'
import Title from '../Title'
import Footer from '../Footer'
import ProjectCell from '../ProjectCell'
import fetch from 'node-fetch'
import "./style.scss"


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
		fetch('http://localhost:3000/projects.json')
			.then((response) => {
				return response.json();
			})
			.then((data) => {
				this.setState({ projects: data });
			});
	}

	render() {
		return (
			<ul className="project-grid">
				{
					this.state.projects.map((project, i) => {
						return <ProjectCell key={i} project={project}/>
					})
				}
			</ul>
		);
	}

}

export default ProjectGrid;
