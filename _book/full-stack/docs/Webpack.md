# Webpack.config.js

## Skills tree
### 自动清理构建目录产物： 
### PostCSS 插件 autoprefixer 自动补齐 CSS3 前缀
### 移动端 px 自动转 rem
### 静态资源内联
### 多页面应用打包通用方案
动态获取 entry 和设置 html-webpack-plugin 数量
- 利用 glob.sync
```javascript
entry: blog.sync(path.join(__dirname, './src/*/index.js'));
```
- webpack config entry
```javascript
const {entry, htmlWebpackPlugins} = setMPA('./src/*/index.js', /src\/(.*)\/index\.js/);

// 1. set entry with above entry
// 2. concat htmlWebpackPlugins with above htmlWebpackPlugins
// 3. note: related .html
```

## scripts
> 
```json
{
  "scripts": {
    "build": "webpack --mode production"
  }
}
```
> Entry
```javascript
module.exports = {
  entry: './src/index.js' 
}
// ===
module.exports = {
  entry: {
    main: './src/index.js'
  }
}

// 或者配置多个入口
module.exports = {
  entry: {
    foo: './src/page-foo.js',
    bar: './src/page-bar.js', 
    // ...
  }
}
// 使用数组来对多个文件进行打包
module.exports = {
  entry: {
    main: [
      './src/foo.js',
      './src/bar.js'
    ]
  }
}
```
> Loader
```javascript
module.exports = {
	// ...
	module: {
		// ...
		rules: [
			{
				test: /\.jsx?/, // 匹配文件路径的正则表达式，通常我们都是匹配文件类型后缀
				include: [
					path.resolve(__dirname, 'src') // 指定哪些路径下的文件需要经过 loader 处理
				],
				use: 'babel-loader', // 指定使用的 loader
			},
		]
	}
}
```
> Plugin
```javascript
const UglifyPlugin = require('uglifyjs-webpack-plugin')

module.exports = {
  plugins: [
    new UglifyPlugin()
  ],
}
```
> Output
```javascript
module.exports = {
  // ...
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'bundle.js',
  },
}

// 或者多个入口生成不同文件
module.exports = {
  entry: {
    foo: './src/foo.js',
    bar: './src/bar.js',
  },
  output: {
    filename: '[name].js',
    path: __dirname + '/dist',
  },
}
// 路径中使用 hash，每次构建时会有一个不同 hash 值，避免发布新版本时线上使用浏览器缓存
module.exports = {
  // ...
  output: {
    filename: '[name].js',
    path: __dirname + '/dist/[hash]',
  },
}
```
> Simple Webpack.config.js
```javascript
const path = require('path')
const UglifyPlugin = require('uglifyjs-webpack-plugin')

module.exports = {
  entry: './src/index.js',

  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'bundle.js',
  },

  module: {
    rules: [
      {
        test: /\.jsx?/,
        include: [
          path.resolve(__dirname, 'src')
        ],
        use: 'babel-loader',
      },
    ],
  },

  // 代码模块路径解析的配置
  resolve: {
    modules: [
      "node_modules",
      path.resolve(__dirname, 'src')
    ],

    extensions: [".wasm", ".mjs", ".js", ".json", ".jsx"],
  },

  plugins: [
    new UglifyPlugin(), 
    // 使用 uglifyjs-webpack-plugin 来压缩 JS 代码
    // 如果你留意了我们一开始直接使用 webpack 构建的结果，你会发现默认已经使用了 JS 代码压缩的插件
    // 这其实也是我们命令中的 --mode production 的效果，后续的小节会介绍 webpack 的 mode 参数
  ],
}
```
最后更新于2020年4月28日
