import React, {Component, PropTypes} from 'react';
import jade from 'jade';
import ProjectStore from '../../stores/ProjectStore'
import Logo from '../Logo';
import Title from '../Title';
import Footer from '../Footer';
import "./style.scss";
import 'whatwg-fetch';


class ProjectPage extends Component {

	constructor(props) {
		super(props);

		this.state = {
			projects: ProjectStore.instance.projects
		};

		if (this.state.projects.length > 0) {
			this.getProjectDescription();
		}
	}

	componentDidMount() {
		if (this.state.projects.length == 0) {
			ProjectStore.instance.loadProjects()
				.then((projects) => {
					this.state.projects = projects;
					return this.getProjectDescription();
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

	getProjectDescription() {
		return new Promise((success, failure) => {
			fetch(this.project.description)
				.then((response) => {
					return response.text();
				})
				.then((jadeData) => {
					success(jadeData)
					this.setState({
						projects: this.state.projects,
						projectDescription: jade.render(jadeData)
					})
				});
		});
	}

	emptyProject() {
		return (<div className="project-page">
			<Logo image="logo.png"/>
			<Title title="&nbsp;"
			       subtitle="&nbsp;"
			/>
		</div>);
	}

	downloadBadges() {
		const badges = []
		if (this.project.google_play) {
			badges.push(<a className="project-page-download-badge" key={1} href={this.project.google_play}><img src="available_on_google_play.png"/></a>)
		}
		if (this.project.app_store) {
			badges.push(<a className="project-page-download-badge" key={2} href={this.project.app_store}><img src="available_on_the_app_store_badge.png"/></a>)
		}
		return badges;
	}

	render() {
		if (!this.project) {
			return this.emptyProject();
		} else {
			return (
				<div className="project-page">
					<Logo image="logo.png"/>
					<Title title={this.project.title}
					       subtitle={this.project.subtitle}
					/>
					<ul className="project-page-screenshots">
					{
						this.project.screenshots.map((screenshot, i) => {
							return <li key={i} className="project-page-screenshot"><img key={i} src={screenshot}/></li>
						})
					}
					</ul>
					<div className="project-page-description" dangerouslySetInnerHTML={{__html: this.state.projectDescription}} />
					<div className="project-page-download-badges">
					{
						this.downloadBadges()
					}
					</div>
					<Footer />
				</div>
			);
		}
	}

}

export default ProjectPage;
