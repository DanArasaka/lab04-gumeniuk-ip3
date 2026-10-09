import js from '@eslint/js';
import globals from 'globals';
import eslintConfigPrettier from 'eslint-config-prettier/flat';

export default [
	{
		ignores: ['node_modules/**', 'legacy/**', 'reports/**']
	},
	js.configs.recommended,
	{
		languageOptions: {
			ecmaVersion: 'latest',
			sourceType: 'module',
			globals: {
				...globals.node
			}
		},
		rules: {
			'arrow-body-style': ['error', 'as-needed'],
			'no-unused-expressions': 'warn',
			'eqeqeq': ['warn', 'always'],
			'no-use-before-define': ['error', { functions: false }],
			'prefer-template': 'error',
			'default-case': 'warn'
		}
	},
	eslintConfigPrettier
];
