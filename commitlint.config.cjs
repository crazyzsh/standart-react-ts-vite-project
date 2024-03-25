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
//   prompt: {
// 		questions: {
// 			type: {
// 				description: "Select the type of change that you're committing",
// 				enum: {
// 					feat: {
// 						description: 'A new feature',
// 						title: 'Features',
// 						emoji: '✨',
// 					},
// 					fix: {
// 						description: 'A bug fix',
// 						title: 'Bug Fixes',
// 						emoji: '🐛',
// 					},
// 					docs: {
// 						description: 'Documentation only changes',
// 						title: 'Documentation',
// 						emoji: '📚',
// 					},
// 					style: {
// 						description:
// 							'Changes that do not affect the meaning of the code (white-space, formatting, missing semi-colons, etc)',
// 						title: 'Styles',
// 						emoji: '💎',
// 					},
// 					refactor: {
// 						description:
// 							'A code change that neither fixes a bug nor adds a feature',
// 						title: 'Code Refactoring',
// 						emoji: '📦',
// 					},
// 					perf: {
// 						description: 'A code change that improves performance',
// 						title: 'Performance Improvements',
// 						emoji: '🚀',
// 					},
// 					test: {
// 						description: 'Adding missing tests or correcting existing tests',
// 						title: 'Tests',
// 						emoji: '🚨',
// 					},
// 					build: {
// 						description:
// 							'Changes that affect the build system or external dependencies (example scopes: gulp, broccoli, npm)',
// 						title: 'Builds',
// 						emoji: '🛠',
// 					},
// 					ci: {
// 						description:
// 							'Changes to our CI configuration files and scripts (example scopes: Travis, Circle, BrowserStack, SauceLabs)',
// 						title: 'Continuous Integrations',
// 						emoji: '⚙️',
// 					},
// 					chore: {
// 						description: "Other changes that don't modify src or test files",
// 						title: 'Chores',
// 						emoji: '♻️',
// 					},
// 					revert: {
// 						description: 'Reverts a previous commit',
// 						title: 'Reverts',
// 						emoji: '🗑',
// 					},
// 				},
// 			},}
// }
}