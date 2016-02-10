import React, { Component, PropTypes } from 'react';
import "./style.scss"

class ProjectCell extends Component {

	render() {
		return (
			<li className="project-cell">
				<img className="project-cell-image" src={this.props.project.title_image}/>
				<p className="project-cell-title">{this.props.project.title}</p>
				<p className="project-cell-subtitle">{this.props.project.subtitle}</p>
			</li>
		);
	}

}

export default ProjectCell;
