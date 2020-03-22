const readMeConfig = require('./readme-config');
const {readDataFromFile, writeDataToFile, getParam, readDirectory, iterateObject} = require('../../app/node/util');
const readmeFilePath = './README.md';
const defaultTimestamp = `最后更新于yyyy年MM月dd日`;
const readMeTimestamp = `yyyy年MM月dd日`;
let blogTree = {
	blog: {}
};
let blogTreeObject = {};
let blogTreeTimeout = null;

main();

function main() {
	const fileDirName = getParam(process.argv, 'file');
	readDirectory(fileDirName, fileCallback, folderCallback);
}

function fileCallback(fileDir, fileStats) {
	if (fileDir.split('.').pop() === 'md') {
		addTimeStamp(fileDir, fileStats);
		updateBlogTree(fileDir, fileStats);
	}
}

function updateBlogTree(fileDir, fileStats) {
	let file = blogTree.blog;
	fileDir.split(`\\`).forEach(dir => {
		if (dir.indexOf('README.md') === -1) {
			if (dir.indexOf('.md') !== -1) {
				file[dir] = fileDir;
				blogTreeObject[fileDir] = {
					timestamp: getFormatDateValue(new Date(Date.parse(fileStats.mtime)), readMeTimestamp),
					dir: file[dir].replace(/\\/g, '/'),
					name: dir
				};

			} else {
				if (!file[dir]) {
					file[dir] = {};
				}
				file = file[dir];
			}
		}
	});

	if (blogTreeTimeout) {
		clearTimeout(blogTreeTimeout);
	}
	blogTreeTimeout = setTimeout(generateReadme, 500);
}

function generateReadme() {
	clearTimeout(blogTreeTimeout);

	let content = '';
	const nonLeaf = function (key, level) {
		const config = readMeConfig[key],
				isConfigStr = typeof config === 'string';
		const title = isConfigStr ? config : config.title;
		content += `\n${Array(level).fill('#').join('')} ${key.substring(0, 1).toUpperCase() + key.substring(1)}\n${title || ''}\n\n`;
		if (!isConfigStr) {
			if (config.desc) {
				content += `*${config.desc}*\n`;
			}
			if (config.list && config.list.length) {
				config.list.forEach((item) => {
					content += `- ${item}\n`;
				});
			}
		}
	};
	const leaf = function (key, value) {
		content += `- [${key.split('.md')[0]}](/${encodeURI(blogTreeObject[value].dir)}): <sub><sup>(${blogTreeObject[value].timestamp})</sup></sub>\n`;
	};
	iterateObject(blogTree, 1, nonLeaf, leaf);

	const currentTimestamp = getFormatDateValue(new Date(), defaultTimestamp);
	writeDataToFile(readmeFilePath, content + `\n${currentTimestamp}\n\n[^footnote]: timestamp-${currentTimestamp}`);
}

function folderCallback(dir) {
	// nothing
}

function addTimeStamp(fileDirName, fileStats) {
	let content = readDataFromFile(fileDirName);
	let timestampDate = getFormatDateValue(new Date(Date.parse(fileStats.mtime)), defaultTimestamp);
	const addedLines = 3;

	let timestamp = getTimeStamp(content);
	if (timestamp) {
		if (timestamp.date !== timestampDate) {
			let sourceContent = content.split('\n');
			writeDataToFile(fileDirName, sourceContent.slice(0, sourceContent.length - addedLines - timestamp.lineNo).join('\n') + `\n${timestampDate}\n\n[^footnote]: timestamp-${timestampDate}${Array(timestamp.lineNo).fill('\n').join('')}`);
		}
	} else {
		writeDataToFile(fileDirName, content + `\n${timestampDate}\n\n[^footnote]: timestamp-${timestampDate}`);
	}
}

function getTimeStamp(content) {
	let contentLines = content.split('\n');
	let lastLine = contentLines.pop();
	let popCount = 0;
	while (lastLine.trim() === '') {
		lastLine = contentLines.pop();
		popCount++;
	}
	if (lastLine.indexOf('[^footnote]: timestamp-') === 0) {
		return {
			date: lastLine.split('timestamp-')[1],
			lineNo: popCount
		};
	}
	return null;
}

function getFormatDateValue(date, pattern) {
	let year = date.getFullYear(),
			month = date.getMonth(),
			day = date.getDate();
	return pattern.replace('yyyy', year)
			.replace('MM', month + 1)
			.replace('dd', day);
}
