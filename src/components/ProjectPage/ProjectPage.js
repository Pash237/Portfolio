import React, {Component, PropTypes} from 'react';
import Slider from 'react-slick';
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
		</div>)
	}

	render() {
		const sliderSettings = {
			dots: true,
			infinite: false,
			speed: 450,
			slidesToShow: 3,
			slidesToScroll: 1,
			lazyLoad: true,
			responsive: [
				{breakpoint: 400, settings: {slidesToShow: 1}},
				{breakpoint: 600, settings: {slidesToShow: 2}},
				{breakpoint: 100000, settings: {slidesToShow: 3}}],
			arrows: false,
			dotsClass: "project-page-screenshots-dots"
		}


		if (!this.project) {
			return this.emptyProject();
		} else {
			return (
				<div className="project-page">
					<Logo image="logo.png"/>
					<Title title={this.project.title}
					       subtitle={this.project.subtitle}
					/>
					<Slider className="project-page-screenshots" {...sliderSettings}>
					{
						this.project.screenshots.map((screenshot, i) => {
							return <img key={i} className="project-page-screenshot" src={screenshot}/>
						})
					}
					</Slider>
					<div className="project-page-description" dangerouslySetInnerHTML={{__html: this.state.projectDescription}} />
					<Footer />
				</div>
			);
		}
	}

}

export default ProjectPage;
