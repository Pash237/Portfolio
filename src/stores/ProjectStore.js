import fetch from 'node-fetch'

let singleton = Symbol();

class ProjectStore
{
	constructor() {
		this._projects = [];
	}

	static get instance() {
		if (!this[singleton]) {
			this[singleton] = new ProjectStore();
		}
		return this[singleton];
	}

	get projects() {
		return this._projects;
	}

	loadProjects(completion) {
		fetch('http://localhost:3000/projects.json')
			.then((response) => {
				return response.json();
			})
			.then((data) => {
				this._projects = data;
				if (completion) {
					completion(this._projects);
				}
			});
	}
}

export default ProjectStore;