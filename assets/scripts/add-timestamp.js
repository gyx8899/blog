const fs = require('fs');
const path = require('path');
const defaultTimestamp = `最后更新于yyyy年MM月dd日`;

main();

function main() {
	let fileDirName = getParam(process.argv, 'file');
	readDirectory(fileDirName, function (fileDir) {
		if (fileDir.split('.').pop() === 'md') {
			console.log(fileDir);
			addTimeStamp(fileDir);
		}
	});
}

function addTimeStamp(fileDirName) {
	let fileStats = getFileStats(fileDirName);
	let content = readDataFromFile(fileDirName);
	let timestampValue = getFormatDateValue(new Date(Date.parse(fileStats.mtime)), defaultTimestamp);

	let timestamp = getTimeStamp(content);
	if (timestamp) {
		if (timestamp !== timestampValue) {
			let sourceContent = content.split('\n');
			writeDataToFile(fileDirName, sourceContent.slice(0, sourceContent.length - 3).join('\n') + `\n${timestampValue}\n\n[^footnote]: timestamp-${timestampValue}`);
		}
	} else {
		writeDataToFile(fileDirName, content + `\n${timestampValue}\n\n[^footnote]: timestamp-${timestampValue}`);
	}
}


function getTimeStamp(content) {
	let lastLine = content.split('\n').pop();
	if (lastLine.indexOf('[^footnote]: timestamp-') === 0) {
		return lastLine.split('timestamp-')[1];
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

// Utils
function readDataFromFile(fileDirname)
{
	return fs.readFileSync(fileDirname).toString();
}

function writeDataToFile(fileDirName, data)
{
	fs.writeFile(fileDirName, data, function (err) {
		console.log(fileDirName + ': ' + (err ? 'Write File failed!' : 'Saved successfully!'));
	});
}

function getFileStats(fileDirName, callback) {
	return fs.statSync(fileDirName);
// stats
// {
//  dev : 0 ,
//  mode : 33206 ,
//  nlink : 1 ,
//  uid : 0 ,
//  gid : 0 ,
//  rdev : 0 ,
//  ino : 0 ,
//  size : 378(字节) ,
//  atime : Tue Jun 10 2014 13:57:13 GMT +0800 <中国标准时间> ,
//  mtime : Tue Jun 13 2014 09:48:31 GMT +0800 <中国标准时间> ,
//  ctime : Tue Jun 10 2014 13:57:13 GMT +0800 <中国标准时间>
// }
// 	stat.isFile()
// 	stat.isDirectory()
}

function getParam(array, param)
{
	let paramValue = '';
	for (let i = 0, l = array.length; i < l; i++)
	{
		let paramArray = array[i].split('=');
		if (paramArray.length === 2 && paramArray[0] === param)
		{
			paramValue = paramArray[1];
		}
	}
	return paramValue;
}

function getFileFromDirectory(filePath, fileCallback) {
	// 根据文件路径读取文件，返回文件列表
	fs.readdir(filePath, function (err, files) {
		if (err) {
			console.warn(err);
		} else {
			// 遍历读取到的文件列表
			files.forEach(function (filename) {
				// 获取当前文件的绝对路径
				let fileDir = path.join(filePath, filename);
				// 根据文件路径获取文件信息，返回一个fs.Stats对象
				readDirectory(fileDir, fileCallback);
			});
		}
	});
}

function readDirectory(fileDir, fileCallback) {
	fs.stat(fileDir, function (error, stats) {
		if (error) {
			console.warn('获取文件stats失败');
		} else {
			if (stats.isFile()) {
				fileCallback(fileDir);
			} else if (stats.isDirectory()) {
				getFileFromDirectory(fileDir, fileCallback); //递归，如果是文件夹，就继续遍历该文件夹下面的文件
			}
		}
	})
}
