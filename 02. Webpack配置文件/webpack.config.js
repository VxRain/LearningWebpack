// 注意，这里的模块的导入导出采用的是CommonJS语法
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
