Webpack 官方文档中提及了 7 个核心概念，重点了解前 5 个。

1. 入口(entry)

   指定 Webpack 开始打包的入口文件，即从哪个文件开始打包。

2. 输出(output)

   打包后输出的文件

3. loader

   Webpack 默认只支持`js`文件和`json`文件，其他格式需要相对应loader的支持来进行转换。

4. 插件(plugin)

   plugin相对于loader来说，作用范围更广泛。loader类似于翻译官，而plugin是全能的多面手，可以进行打包优化，资源管理等。

5. 模式(mode)

   通过设置`mode`，来启用 webpack 内置在相应环境下的优化。

   ​	最明显的一点，默认的`production`模式会压缩js文件，而`development`模式并不会。

   默认值为：`production`

   可选值：`development`, `production` 或 `none` 之中的一个。



---



官方文档中提及的后两个核心概念

1. 浏览器兼容性

   > ## 浏览器兼容性(browser compatibility) 
   >
   > webpack 支持所有符合 [ES5 标准](https://kangax.github.io/compat-table/es5/) 的浏览器（不支持 IE8 及以下版本）。webpack 的 `import()` 和 `require.ensure()` 需要 `Promise`。如果你想要支持旧版本浏览器，在使用这些表达式之前，还需要 [提前加载 polyfill](https://webpack.docschina.org/guides/shimming/)。

2. 环境

   > ## 环境(environment) 
   >
   > webpack 运行与 Node.js v8.x+ 版本。