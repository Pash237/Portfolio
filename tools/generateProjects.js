/**
 * Created by alexeev on 08/02/16.
 */


import path from 'path';
import Promise from 'bluebird';
import ncp from 'ncp';
import dir from 'node-dir';
import fs from 'fs-extra';

async function generateProjects({watch} = {})
{
	const projectsPath = 'src/projects';

	let projects = []

	const directories = fs.readdirSync(projectsPath);

	directories.map((projectName) => {
		const projectPath = path.join(projectsPath, projectName);

		if (!fs.lstatSync(projectPath).isDirectory())
			return;

		let projectProperties = JSON.parse(fs.readFileSync(path.join(projectPath, "properties.json")));
		projectProperties["name"] = projectName;

		const newTitleName = projectName + "_title.jpg";
		projectProperties["title_image"] = newTitleName;
		fs.copySync(path.join(projectPath, "title.jpg"), path.join("build", newTitleName));

		const newDescriptionName = projectName + "_description.jade";
		projectProperties["description"] = newDescriptionName;
		fs.copySync(path.join(projectPath, "description.jade"), path.join("build", newDescriptionName));

		let screenshots = [];
		const screenshotsPath = path.join(projectPath, "screenshots");
		const screenshotNames = fs.readdirSync(screenshotsPath);

		screenshotNames.map((screenshotName) => {
			const screenshotPath = path.join(screenshotsPath, screenshotName);

			if (!fs.lstatSync(screenshotPath).isFile())
				return;

			const newScreenshotName = projectName + "_screenshot_" + screenshotName;
			screenshots.push(newScreenshotName);
			fs.copySync(screenshotPath, path.join("build", newScreenshotName));
		});

		projectProperties["screenshots"] = screenshots;

		projects.push(projectProperties);
	});

	fs.writeJSONSync(path.join('build', 'projects.json'), projects);
}

export default generateProjects;
