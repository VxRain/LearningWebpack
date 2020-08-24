> 在 Webpack 4 之前的版本，Webpack 和 它 的 CLI 都是在同一个包中。但是从第 4 版开始，将两者分为两个包了。

### 全局安装方式

根据 Webpack 的官方文档，建议在项目中进行本地安装，而不是全局安装。

但是这里为了学习和测试的方便，推荐采用全局安装。`yarn global add webpack webpack-cli`

> ### 非全局安装方式
>
> 非全局安装，可以直接在项目根目录下执行`yarn add webpack webpack-cli -D`将 Webpack 安装为开发依赖。
>
> 因为不是全局安装，所以直接在命令行下执行webpack命令会报错。
>
> 如果你使用的包管理工具是npm，并且版本是npm v5.2.0或更高，可使用 `npx webpack`命令来执行。
>
> 如果使用的包管理工具是yarn，可以使用`yarn webpack`来执行。

---

安装完毕后，在命令行输入`webpack -v`进行测试

```bash
webpack -v
4.44.1
```

切换到当前目录（01目录）下，运行webpack命令，不出意外会报错，提示找不到入口（Entry）。

这是因为**Webpack 默认的入口文件是 ./src 目录下 的 index.js 文件**，如果没有这个文件，webpack 就不知道从何处开始打包。

新建`./src/index.js`文件后，重新运行 `webpack` 命令，发现可以打包成功，并且自动输出到`./dist/main.js`

这里主要涉及到两个核心概念：

* **Entry（入口）**

  **Webpack 默认的入口是项目的`./src/index.js`**

* **Output（输出）**

  **Webpack 默认的输出在项目的`./dist/main.js`**

如果注意观察控制台输出的警告信息，还会发现一个核心概念：

> WARNING in configuration
> The 'mode' option has not been set, webpack will fallback to 'production' for this value. Set 'mode' option to 'development' or 'production' to enable defaults for each environment.
> You can also set it to 'none' to disable any default behavior. Learn more: https://webpack.js.org/configuration/mode/

* **Mode（模式）**

  **Webpack 默认的 mode 是 production**

---

当然，我们也可以使用命令行来自定义相关参数。

`webpack ./src/entry.js -o ./dist/build.js --mode=production`

**webpack 后紧跟的参数是自定义的打包入口，-o 参数用来自定义输出，--mode用来设置模式。**

重新用development模式打包一下，看看两者打包文件的区别。

`webpack ./src/entry.js -o ./dist/build.dev.js --mode=development`