
import React, { Component, PropTypes } from 'react';

class ProjectCell extends Component {

	render() {
		return (
			<div>
				<img src={this.props.project.title_image}/>
				<p>{this.props.project.title}</p>
				<p>{this.props.project.subtitle}</p>
			</div>
		);
	}

}

export default ProjectCell;
