虽然可以用命令行的方式来使用 Webpack 进行资源打包。但是在实际的项目中，最常用的还是采用配置文件的方式来使用 Webpack。

Webpack默认采用的配置文件是项目根目录下的`webpack.config.js`，也可以通过`--config`参数显式指定一个配置文件，像这样：`webpack --config webpackConfig.js`

项目中使用的 Webpack 配置：

```javascript
// 注意，这里的模块的导入导出采用的是 CommonJS 语法
// 因为前端中的基建平台都是基于 Node.js 实现的
// 而 Node.js 因为历史原因采用了 CommonJS 规范
const path = require("path");

module.exports = {
  entry: "./src/main.js",
  output: {
    filename: "webpack.bundle.dev.js",
    // 使用 path 库的 resolve 方法获取绝对路径，避免因操作系统不同造成的路径错误
    // __dirname 代表是当前文件的目录（绝对路径）
    path: path.resolve(__dirname, "dist"),
  },
  mode: "development",
};

```

这个配置涉及到了**入口、输出、模式**这三个 Webpack 的核心概念，和使用命令行的方式一样。