# 项目开发记录
## 一、项目工程化搭建过程
### 1.1 eslint
> VSCode中的eslint插件以及项目中的eslint第三方库共用同一套配置，即`.eslintrc.**` ，只要项目跟目录下存在，则以该配置文件中相关配置为准则进行校验。
* VSCode中的eslint插件可以更爱好的进行图形化界面提示，包括将代码爆红、警告⚠️，我们在开发过程中可以很好的根据提示进行修复，而不用等到代码提交时候再修复，用以辅助纠正代码风格，是第一道过滤网。
### 1.2 prettier
> eslint可以发现问题，prettier可以纠正问题，项目中同样要配置`.prettierrc.**`文件进行相关规则配置
主要有三种方法进行格式化代码：
* 右键文件进行格式化
* 保存后自动进行格式化
* 使用命令进行格式化
### 1.3 husky
> husky是一个为 git 客户端增加 hook 的工具，在一些 git 操作时（某一生命周期）候自动触发钩子函数
安装使用：
首先确保项目已经进行git初始化了。安装：`pnpm add -D husky`，使用`pnpm exec husky init` 生成husky文件夹，会默认生成husky文件夹，为了后续他人下载项目后执行`pnpm install`进行相关依赖下载时候会自动生成相应的husky文件，通常在package.json文件添加脚本，即在scripts中添加`"prepare":"husky init"` 
### 1.4 lint-staged
> lint-staged可以在代码可以将暂存区的代码进行扫描，相当于是husky与eslint的桥梁。

首先安装lint-staged，命令为：`pnpm install lint-staged -D`，配置lint-staged，在package.json中添加要触发脚本
```json
"lint-staged": {
    "*.{js,jsx,vue,ts,tsx}": [
      "npm run lint",
      "npm run prettier-format"
    ]
  }
```
其中`npm run lint`， `npm run prettier-format` 等在package.json中的配置如下：
```json
"lint": "eslint . --ext ts,tsx --report-unused-disable-directives --max-warnings 0",
"prettier-format": "prettier --config .prettierrc.cjs \"src/**/*.{tsx,js,ts}\" --write",

```
在husky的`pre-commit`钩子中写入回调，以便于在提交前执行`pre-commit`钩子中的回调：执行`echo "npx lint-staged" > .husky/pre-commit` ，即在.husky文件下生成一个pre-commit文件，并写入`npx lint-staged`

### 1.5 commitlint
> 用于对提交信息进行校验，与跟目录中的配置文件commitlint.config.cjs配合使用

1. 安装：
`pnpm install @commitlint/config-conventional @commitlint/cli -D `
2. 将校验动作写入husk钩子函数
`echo "npx --no -- commitlint --edit \$1" > .husky/commit-msg`，即在.husky文件夹下生成commit-msg文件，并写入`npx --no -- commitlint --edit \$1`
3. 将钩子与配置文件进行关联
在跟目录下生成配置文件，配置文件中必须有`extends: ['@commitlint/config-conventional'],`的配置。

以下是和angular相关规范匹配的commitlint.config.cjs文件。

```javascript
module.exports = {
	extends: ['@commitlint/config-conventional'],
	rules: {
		'type-enum': [
			2,
			'always',
			[
				// 编译相关的修改，例如发布版本，对项目构建或者依赖的改动
				'build',
				// 新功能(feature)
				'feat',
				// 修复bug
				'fix',
				// 更新某功能
				'update',
				// 重构
				'refactor',
				// 文档
				'docs',
				// 构建过程或者辅助工具的变动,如增加依赖库等
				'chore',
				// 不影响代码运行的变动
				'style',
				// 撤销commit,回滚到上一个版本
				'revert',
				// 性能优化
				'perf',
				// 测试(单元,集成测试)
				'test',
			],
		],
		'type-case': [0],
		'type-empty': [0],
		'scope-empty': [0],
		'scope-case': [0],
		'subject-full-stop': [0, 'never'],
		'subject-case': [0, 'never'],
		'header-max-length': [0, 'always', 74],
	},
};
```
### 1.6 vite-plugin-checker
> 该插件可以在vite编译过程中将与eslint有关的问题暴露出来，这样可以进一步保证代码的质量，强制开发者在开发过程中发现问题，解决问题。
配置如下：
```javascript
import checker from 'vite-plugin-checker'
 plugins: [
    checker({
    typescript: true,
    eslint: {
      lintCommand: 'eslint "./src/**/*.{ts,tsx}"',
    },
  }),]
```

### 1.7 UnoCss
> 原子化使用方式，对于类名恐惧者来说是福音，可以省去类名的书写，直接使用预设的类名。

* 安装：`pnpm add -D unocss` 
* 引入：在主入口文件中进行引入，react中为main.tsx，`import 'virtual:uno.css'`
> 如果您正在使用 @unocss/preset-attributify，您应该从 build 脚本中删除 tsc。这是官方的原话，在打包的时候应该注意。

#### 1.7.1 @unocss/preset-attributify
安装：`pnpm add -D @unocss/preset-attributify`
> 用于将Unocss书写的类名进行美化

> 如果您正在使用 @vitejs/plugin-react 与 @unocss/preset-attributify，您必须在 @vitejs/plugin-react 之前添加 UnoCSS 插件。

官方是这样进行介绍的
```html
<button class="bg-blue-400 hover:bg-blue-500 text-sm text-white font-mono font-light py-2 px-4 rounded border-2 border-blue-200 dark:bg-blue-500 dark:hover:bg-blue-600">
  Button
</button>
```
使用@unocss/preset-attributify之后

```html
<button
  bg="blue-400 hover:blue-500 dark:blue-500 dark:hover:blue-600"
  text="sm white"
  font="mono light"
  p="y-2 x-4"
  border="2 rounded blue-200"
>
  Button
</button>
```



## 二、项目启动
 项目启动：`pnpm dev`