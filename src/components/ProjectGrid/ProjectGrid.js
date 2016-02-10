
import React, { Component, PropTypes } from 'react';
import Logo from '../Logo';
import Title from '../Title';
import Footer from '../Footer';
import ProjectCell from '../ProjectCell';
import ProjectStore from '../../stores/ProjectStore';
import "./style.scss";


class ProjectGrid extends Component {

	constructor(props) {
		super(props);

		this.state = {
			projects: []
		};
	}

	componentDidMount() {
		ProjectStore.instance.loadProjects()
			.then((projects) => {
				this.setState({projects: projects})
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
