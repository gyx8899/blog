const fs = require('fs');
const path = require('path');

//Util
function writeDataToFile(fileDirName, data)
{
	fs.writeFile(fileDirName, data, function (err) {
		console.log(fileDirName + ': ' + (err ? 'Write File failed!' : 'Saved successfully!'));
	});
}

function readDataFromFile(fileDirname)
{
	return fs.readFileSync(fileDirname).toString();
}

function getDirectoryList(directory)
{
	let dirContent = {dirNames: [], fileNames: []};
	fs.readdirSync(directory)
			.forEach(function (dirItem) {
				if (fs.statSync(directory + "/" + dirItem).isDirectory())
				{
					dirContent.dirNames[dirContent.dirNames.length] = dirItem;
				}
				else
				{
					dirContent.fileNames[dirContent.fileNames.length] = dirItem;
				}
			});
	return dirContent;
}

function getDirectoryFileNames(path)
{
	return getDirectoryList(path).fileNames;
}

function getDirectoryFolderNames(path)
{
	return getDirectoryList(path).dirNames;
}

function getNodeArgs() {
	const args = {};
	process.argv
			.slice(2, process.argv.length)
			.forEach(arg => {
				// long arg
				if (arg.slice(0, 2) === '--') {
					const longArg = arg.split('=');
					const longArgFlag = longArg[0].slice(2, longArg[0].length);
					args[longArgFlag] = longArg.length > 1 ? longArg[1] : true;
				}
				// flags
				else if (arg[0] === '-') {
					const flags = arg.slice(1, arg.length).split('');
					flags.forEach(flag => {
						args[flag] = true;
					});
				}
			});
	return args;
}

function getNameFromFileName(fileName) {
	return fileName.slice(0, fileName.lastIndexOf('.'));
}

function getDiffFolderFileNames(sourceFolder, destFolder) {
	let sourceFileNames = getDirectoryFileNames(sourceFolder),
			destFileNames = getDirectoryFileNames(destFolder),
			destFileMap = {},
			resultFileNames = [];
	for (let i = 0; i < destFileNames.length; i++) {
		destFileMap[getNameFromFileName(destFileNames[i])] = destFileNames[i];
	}
	for (let i = 0; i < sourceFileNames.length; i++) {
		if (!destFileMap[getNameFromFileName(sourceFileNames[i])]) {
			resultFileNames.push(sourceFileNames[i]);
		}
	}
	return resultFileNames;
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

function getParam(array, param) {
	let paramValue = '';
	for (let i = 0, l = array.length; i < l; i++) {
		let paramArray = array[i].split('=');
		if (paramArray.length === 2 && paramArray[0] === param) {
			paramValue = paramArray[1];
		}
	}
	return paramValue;
}

function getFileFromDirectory(filePath, fileCallback, folderCallback) {
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
				readDirectory(fileDir, fileCallback, folderCallback);
			});
		}
	});
}

function readDirectory(fileDir, fileCallback, folderCallback) {
	fs.stat(fileDir, function (error, stats) {
		if (error) {
			console.warn('获取文件stats失败');
		} else {
			if (stats.isFile()) {
				fileCallback && fileCallback(fileDir, stats);
			} else if (stats.isDirectory()) {
				folderCallback && folderCallback(fileDir);
				getFileFromDirectory(fileDir, fileCallback, folderCallback); //递归，如果是文件夹，就继续遍历该文件夹下面的文件
			}
		}
	})
}

function iterateObject(obj, level, callbackNonLeaf, callbackLeaf) {
	for (let key in obj) {
		if (obj.hasOwnProperty(key)) {
			if (typeof obj[key] === 'object'
					&& obj[key] !== null
					&& !Array.isArray(obj[key])
					&& !(obj[key] instanceof Date)
					&& !(obj[key] === 'function')) {
				callbackNonLeaf(key, level);
				iterateObject(obj[key], level + 1, callbackNonLeaf, callbackLeaf);
			} else
				callbackLeaf(key, obj[key]);
		}
	}
}

module.exports = {
	writeDataToFile,
	readDataFromFile,
	getDirectoryList,
	getDirectoryFileNames,
	getDirectoryFolderNames,
	getNodeArgs,
	getDiffFolderFileNames,
	getFileStats,
	getParam,
	getFileFromDirectory,
	readDirectory,
	iterateObject
};