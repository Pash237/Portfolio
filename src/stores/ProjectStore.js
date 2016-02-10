import 'whatwg-fetch';

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

	loadProjects() {
		return new Promise((success, failure) => {
			fetch('/projects.json')
				.then((response) => {
					return response.json();
				})
				.then((data) => {
					this._projects = data;
					success(this._projects);
				})
				.catch(e => {
					failure(e)
				});
		});
	}
}

export default ProjectStore;