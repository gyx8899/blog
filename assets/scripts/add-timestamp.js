const cgf = require("changed-git-files");
const mdConfig = require('./md-config');
const readMeConfig = require('./readme-config');

const {readDataFromFile, writeDataToFile, iterateObject} = require('@daybyday/yx-node');

const readMeTimestamp = `yyyy年MM月dd日`;
const readmeFilePath = './README.md';
const defaultTimestamp = `最后更新于yyyy年MM月dd日`;

function getFormatDateValue(date, pattern) {
	let year = date.getFullYear(),
			month = date.getMonth(),
			day = date.getDate();
	return pattern.replace('yyyy', year)
			.replace('MM', (month + 1).toString())
			.replace('dd', day);
}

function updateTimeStamp(fileDir) {
	const content = readDataFromFile(fileDir);
	const contentLines = content.split('\n');
	const timeStampPrefix = defaultTimestamp.split('yyyy')[0];
	let notDateLineNo = contentLines.length - 1;
	for (; notDateLineNo >= 0; notDateLineNo--) {
		if (contentLines[notDateLineNo].indexOf(timeStampPrefix) === 0) {
			break;
		}
	}
	let _content = content;
	if (notDateLineNo !== 0) {
		_content = contentLines.slice(0, notDateLineNo).join('\n');
	}
	writeDataToFile(fileDir, _content + `\n${getFormatDateValue(new Date(), defaultTimestamp)}\n`);
}

function updateMdConfig(filename, status) {
	const filePaths = filename.split('/');
	let currentFile = mdConfig.blog;
	for (let i = 0; i < filePaths.length - 1; i++) {
		if (!currentFile[filePaths[i]]) {
			currentFile[filePaths[i]] = {};
		}
		currentFile = currentFile[filePaths[i]];
	}
	switch (status) {
		case "Added":
		case "Modified":
		case "Copied":
			const fileInfo = {
				date: getFormatDateValue(new Date(), readMeTimestamp),
				path: filename,
			};
			currentFile[filePaths.pop()] = fileInfo;

			break;
		case "Deleted":
			delete currentFile[filePaths.pop()];
			break;
		case "Renamed":
			// Not supported by changed-git-files
			break;
		default:
			// Nothing
	}
}

function generateReadme(_mdConfig, _readMeConfig) {
	let content = '';
	const nonLeaf = function (key, level, value) {
		if (value.date) {
			leaf(key, value);
		} else if (_readMeConfig[key]) {
			const _config = _readMeConfig[key],
					isConfigStr = typeof _config === 'string',
					title = isConfigStr ? _config : _config.title;
			content += `\n${Array(level).fill('#').join('')} ${key.substring(0, 1).toUpperCase() + key.substring(1)}\n${title || ''}\n\n`;
			if (!isConfigStr) {
				if (_config.desc) {
					content += `*${_config.desc}*\n`;
				}
				if (_config.list && _config.list.length) {
					_config.list.forEach((item) => {
						content += `- ${item}\n`;
					});
				}
			}
		}

	};
	const leaf = function (key, value) {
		if (key !== 'README.md' && value.date) {
			content += `- [${key.split('.md')[0]}](/${encodeURI(value.path)}): <sub><sup>(${value.date})</sup></sub>\n`;
		}
	};
	iterateObject(_mdConfig, 1, nonLeaf, ()=>{});

	const currentTimestamp = getFormatDateValue(new Date(), defaultTimestamp);
	writeDataToFile(readmeFilePath, content + `\n${currentTimestamp}\n`);
}

cgf(function (err, results) {
	let mdFilesChanged = false;
	// console.log(err);
	// console.log(JSON.stringify(results, null, 4));
	results && results.forEach((file) => {
		const {filename, status} = file;

		if (filename.indexOf('.md') !== -1 && filename.indexOf('README.md') === -1) {
			mdFilesChanged = true;
			// console.log(JSON.stringify(mdConfig, null, 4));
			updateMdConfig(filename, status);
			updateTimeStamp(filename);
		}
	});

	if (mdFilesChanged) {
		// console.log(JSON.stringify(mdConfig, null, 4));
		// Update md-config
		writeDataToFile('./assets/scripts/md-config.js', `module.exports = ${JSON.stringify(mdConfig, null, 4)};\n`);
		// Update README.md
		generateReadme(mdConfig, readMeConfig);
	}
});
