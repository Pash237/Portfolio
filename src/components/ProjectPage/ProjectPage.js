import React, {Component, PropTypes} from 'react';
import ProjectStore from '../../stores/ProjectStore'
import Logo from '../Logo';
import Title from '../Title';
import Footer from '../Footer';
import "./style.scss";

class ProjectPage extends Component {

	constructor(props) {
		super(props);

		this.state = {
			projects: ProjectStore.instance.projects
		};
	}

	componentDidMount() {
		if (this.state.projects.length == 0) {
			ProjectStore.instance.loadProjects((projects) => {
				this.setState({projects: projects})
			});
		}
	}

	get project() {
		const currentProjectName = this.props.params.project;
		for (let project of this.state.projects) {
			if (project.name == currentProjectName) {
				return project;
			}
		}

		return null;
	}

	render() {
		if (!this.project) {
			return (<div className="title-page">
				<Logo image="logo.png"/>
				<Title title=""
				       subtitle=""
				/>
				<Footer />
			</div>)
		} else {
			return (
				<div className="title-page">
					<Logo image="logo.png"/>
					<Title title={this.project.title}
					       subtitle={this.project.subtitle}
					/>
					<Footer />
				</div>
			);
		}
	}

}

export default ProjectPage;
