import React, { Component, PropTypes } from 'react';
import "./style.scss"

class ProjectCell extends Component {

	constructor(props) {
		super(props);

		this.onProjectClick = this.onProjectClick.bind(this);
	}

	render() {
		return (
			<li className="project-cell">
				<img className="project-cell-image" src={this.props.project.title_image} onClick={this.onProjectClick}/>
				<a href={this.props.project.name} className="project-cell-title">{this.props.project.title}</a>
				<p className="project-cell-subtitle">{this.props.project.subtitle}</p>
			</li>
		);
	}

	onProjectClick() {
		window.location = this.props.project.name;
	}

}

export default ProjectCell;
