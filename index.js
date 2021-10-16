module.exports = {
	parserOptions: {
		ecmaVersion: 2021,
		sourceType: 'module',
		ecmaFeatures: {
			jsx: true,
		},
	},
	env: {
		es2021: true,
		node: true,
	},
	parser: '@typescript-eslint/parser',
	plugins: [
		'@typescript-eslint',
		'no-use-extend-native',
		'unicorn',
		'promise',
		'import',
		'node',
		'eslint-comments',
		'jest',
		'prettier',
	],
	extends: [
		'plugin:unicorn/recommended',
		'plugin:prettier/recommended',
        'plugin:@typescript-eslint/eslint-recommended',
	],
	reportUnusedDisableDirectives: true,
	overrides: [{
		files: ['src/**/*.ts', 'src/**/*.tsx'],
        excludedFiles: '*.d.ts',
        extends: [
            'plugin:@typescript-eslint/recommended-requiring-type-checking',
        ],
		parserOptions: {
		  project: ['./tsconfig.json'],
		},
	},{
		files: ['test/**/*.test.ts', 'test/**/*.test.tsx'],
		env: {
			es2021: true,
			node: true,
			jest: true,
		},
		extends: [
			'plugin:jest/recommended',
			'plugin:jest/style',
            'plugin:@typescript-eslint/recommended',
		]
	}],
	rules: {
		'comma-dangle': 'off',
		'for-direction': 'error',
		'getter-return': 'error',
		'no-async-promise-executor': 'error',
		'no-await-in-loop': 'error',
		'no-compare-neg-zero': 'error',
		'no-cond-assign': 'error',
		'no-constant-condition': 'error',
		'no-control-regex': 'error',
		'no-debugger': 'error',
		'no-dupe-args': 'error',
		'no-dupe-else-if': 'error',
		'no-dupe-keys': 'error',
		'no-duplicate-case': 'error',
		'no-empty-character-class': 'error',
		'no-empty': [
			'error',
			{
				allowEmptyCatch: true
			}
		],
		'no-ex-assign': 'error',
		'no-extra-boolean-cast': 'error',
		// Disabled because of https://github.com/eslint/eslint/issues/6028
		// 'no-extra-parens': [
		// 	'error',
		// 	'all',
		// 	{
		// 		conditionalAssign: false,
		// 		nestedBinaryExpressions: false,
		// 		ignoreJSX: 'multi-line'
		// 	}
		// ],
		'no-extra-semi': 'error',
		'no-func-assign': 'error',
		'no-import-assign': 'error',
		'no-inner-declarations': 'error',
		'no-invalid-regexp': 'error',
		'no-irregular-whitespace': 'error',
		'no-loss-of-precision': 'error',
		'no-misleading-character-class': 'error',
		'no-obj-calls': 'error',
		'no-promise-executor-return': 'error',
		'no-prototype-builtins': 'error',
		'no-regex-spaces': 'error',
		'no-setter-return': 'error',
		'no-sparse-arrays': 'error',
		'no-template-curly-in-string': 'error',
		'no-unreachable': 'error',
		'no-unreachable-loop': 'error',
		'no-unsafe-finally': 'error',
		'no-unsafe-negation': [
			'error',
			{
				enforceForOrderingRelations: true
			}
		],
		'no-unsafe-optional-chaining': [
			'error',
			{
				disallowArithmeticOperators: true
			}
		],
		'no-useless-backreference': 'error',
		'use-isnan': 'error',
		'valid-typeof': [
			'error',
			{
				requireStringLiterals: false
			}
		],
		'no-unexpected-multiline': 'error',
		'accessor-pairs': [
			'error',
			{
				enforceForClassMembers: true
			}
		],
		'array-callback-return': [
			'error',
			{
				allowImplicit: true
			}
		],
		'block-scoped-var': 'error',
		complexity: 'warn',
		curly: 'error',
		'default-case': 'error',
		'default-case-last': 'error',
		'default-param-last': 'error',
		'dot-notation': 'error',
		'dot-location': [
			'error',
			'property'
		],
		eqeqeq: 'error',
		'grouped-accessor-pairs': [
			'error',
			'getBeforeSet'
		],
		'guard-for-in': 'error',
		'no-alert': 'error',
		'no-caller': 'error',
		'no-case-declarations': 'error',
		'no-constructor-return': 'error',
		'no-else-return': [
			'error',
			{
				allowElseIf: false
			}
		],
		'no-empty-pattern': 'error',
		'no-eq-null': 'error',
		'no-eval': 'error',
		'no-extend-native': 'error',
		'no-extra-bind': 'error',
		'no-extra-label': 'error',
		'no-fallthrough': 'error',
		'no-floating-decimal': 'error',
		'no-global-assign': 'error',
		'no-implicit-coercion': 'error',
		'no-implicit-globals': 'error',
		'no-implied-eval': 'error',
		'no-iterator': 'error',
		'no-labels': 'error',
		'no-lone-blocks': 'error',
		'no-multi-spaces': 'error',
		'no-multi-str': 'error',
		'no-new-func': 'error',
		'no-new-wrappers': 'error',
		'no-nonoctal-decimal-escape': 'error',
		'no-new': 'error',
		'no-octal-escape': 'error',
		'no-octal': 'error',
		'no-proto': 'error',
		'no-redeclare': 'error',
		'no-return-assign': [
			'error',
			'always'
		],
		'no-return-await': 'error',
		'no-script-url': 'error',
		'no-self-assign': [
			'error',
			{
				props: true
			}
		],
		'no-self-compare': 'error',
		'no-sequences': 'error',
		'no-throw-literal': 'error',
		'no-unmodified-loop-condition': 'error',
		'no-unused-expressions': [
			'error',
			{
				enforceForJSX: true
			}
		],
		'no-unused-labels': 'error',
		'no-useless-call': 'error',
		'no-useless-catch': 'error',
		'no-useless-concat': 'error',
		'no-useless-escape': 'error',
		'no-useless-return': 'error',
		'no-void': 'error',
		'no-warning-comments': 'warn',
		'no-with': 'error',

		// Disabled for now as Firefox doesn't support named capture groups and I'm tired of getting issues about the use of named capture groups...
		// 'prefer-named-capture-group': 'error'

		'prefer-promise-reject-errors': [
			'error',
			{
				allowEmptyReject: true
			}
		],
		'prefer-regex-literals': 'error',
		radix: 'error',

		// Disabled for now as it causes too much churn
		// TODO: Enable it in the future when I have time to deal with
		// the churn and the rule is stable and has an autofixer.
		// Still doesn't have a fixer as of ESLint 7.24.0.
		// 'require-unicode-regexp': 'error',

		'wrap-iife': [
			'error',
			'inside',
			{
				functionPrototypeMethods: true
			}
		],
		yoda: 'error',
		'no-delete-var': 'error',
		'no-label-var': 'error',
		'no-restricted-globals': [
			'error',
			'event'
		],
		'no-shadow-restricted-names': 'error',
		'no-undef-init': 'error',
		'no-undef': [
			'error',
			{
				typeof: true
			}
		],
		'no-unused-vars': 'off',
        '@typescript-eslint/no-unused-vars': [
            'error',
			{
				vars: 'all',
				args: 'after-used',
				ignoreRestSiblings: true,
				argsIgnorePattern: /^_/.source,
				caughtErrors: 'all',
				caughtErrorsIgnorePattern: /^_$/.source
			}
        ],
		'no-buffer-constructor': 'error',
		'no-restricted-imports': [
			'error',
			'domain',
			'freelist',
			'smalloc',
			'punycode',
			'sys',
			'querystring',
			'colors'
		],
		'array-bracket-newline': [
			'error',
			'consistent'
		],
		'array-bracket-spacing': [
			'error',
			'never'
		],
		'array-element-newline': [
			'error',
			'consistent'
		],
		'brace-style': [
			'error',
			'1tbs',
			{
				allowSingleLine: false
			}
		],
		camelcase: [
			'error',
			{
				properties: 'always'
			}
		],
		'capitalized-comments': [
			'error',
			'always',
			{
				// You can also ignore this rule by wrapping the first word in quotes.
				// c8 => https://github.com/bcoe/c8
				ignorePattern: /pragma|ignore|prettier-ignore|webpack\w+:|c8/.source,
				ignoreInlineComments: true,
				ignoreConsecutiveComments: true
			}
		],
		'comma-spacing': [
			'error',
			{
				before: false,
				after: true
			}
		],
		'comma-style': [
			'error',
			'last'
		],
		'computed-property-spacing': [
			'error',
			'never',
			{
				enforceForClassMembers: true
			}
		],
		'eol-last': 'error',
		'func-call-spacing': [
			'error',
			'never'
		],
		'func-name-matching': [
			'error',
			{
				considerPropertyDescriptor: true
			}
		],
		'func-names': [
			'error',
			'never'
		],
		'function-call-argument-newline': [
			'error',
			'consistent'
		],
		indent: [
			'error',
			'tab',
			{
				SwitchCase: 1
			}
		],
		'jsx-quotes': 'error',
		'key-spacing': [
			'error',
			{
				beforeColon: false,
				afterColon: true
			}
		],
		'keyword-spacing': 'error',
		'linebreak-style': [
			process.platform === 'win32' ? 'off' : 'error',
			'unix'
		],
		'lines-between-class-members': [
			'error',
			'always',
			{
				// Workaround to allow class fields to not have lines between them.
				// TODO: Get ESLint to add an option to ignore class fields.
				exceptAfterSingleLine: true
			}
		],
		'max-depth': 'warn',
		'max-nested-callbacks': [
			'warn',
			4
		],
		'max-params': [
			'warn',
			{
				max: 4
			}
		],
		'max-statements-per-line': 'error',
		'new-parens': 'error',
		'no-array-constructor': 'error',
		'no-bitwise': 'error',
		'no-lonely-if': 'error',
		'no-mixed-operators': 'off',
		'no-mixed-spaces-and-tabs': 'error',
		'no-multi-assign': 'error',
		'no-multiple-empty-lines': [
			'error',
			{
				max: 1
			}
		],
		'no-negated-condition': 'error',
		'no-new-object': 'error',
		'no-whitespace-before-property': 'error',
		'no-trailing-spaces': 'error',
		'no-unneeded-ternary': 'error',
		// Disabled because of https://github.com/xojs/eslint-config-xo/issues/27
		// 'object-property-newline': 'error',
		'one-var': [
			'error',
			'never'
		],
		'one-var-declaration-per-line': 'error',
		'operator-assignment': [
			'error',
			'always'
		],
		'operator-linebreak': [
			'error',
			'before'
		],
		'padded-blocks': [
			'error',
			'never',
			{
				allowSingleLineBlocks: false
			}
		],
		'padding-line-between-statements': [
			'error',
			{
				blankLine: 'always',
				prev: 'multiline-block-like',
				next: '*'
			}
		],
		'prefer-exponentiation-operator': 'error',
		'prefer-object-spread': 'error',
		'quote-props': [
			'error',
			'as-needed'
		],
		quotes: [
			'error',
			'single'
		],
		'semi-spacing': [
			'error',
			{
				before: false,
				after: true
			}
		],
		'semi-style': [
			'error',
			'last'
		],
		'space-before-blocks': [
			'error',
			'always'
		],
		'space-before-function-paren': [
			'error',
			{
				anonymous: 'always',
				named: 'never',
				asyncArrow: 'always'
			}
		],
		'space-in-parens': [
			'error',
			'never'
		],
		'space-infix-ops': 'error',
		'space-unary-ops': 'error',
		'spaced-comment': [
			'error',
			'always',
			{
				line: {
					exceptions: [
						'-',
						'+',
						'*'
					],
					markers: [
						'!',
						'/',
						'=>'
					]
				},
				block: {
					exceptions: [
						'-',
						'+',
						'*'
					],
					markers: [
						'!',
						'*'
					],
					balanced: true
				}
			}
		],
		'switch-colon-spacing': [
			'error',
			{
				after: true,
				before: false
			}
		],
		'template-tag-spacing': [
			'error',
			'never'
		],
		'unicode-bom': [
			'error',
			'never'
		],
		'arrow-body-style': 'error',
		'arrow-parens': [
			'error',
			'as-needed'
		],
		'arrow-spacing': [
			'error',
			{
				before: true,
				after: true
			}
		],
		'constructor-super': 'error',
		'generator-star-spacing': [
			'error',
			'both'
		],
		'no-class-assign': 'error',
		'no-const-assign': 'error',
		'no-dupe-class-members': 'error',
		'no-new-symbol': 'error',
		'no-this-before-super': 'error',
		'no-useless-computed-key': [
			'error',
			{
				enforceForClassMembers: true
			}
		],
		'no-useless-constructor': 'error',
		'no-useless-rename': 'error',
		'no-var': 'error',
		'object-shorthand': [
			'error',
			'always'
		],
		'prefer-arrow-callback': [
			'error',
			{
				allowNamedFunctions: true
			}
		],
		'prefer-const': [
			'error',
			{
				destructuring: 'all'
			}
		],
		'prefer-destructuring': [
			'error',
			{
				// `array` is disabled because it forces destructuring on
				// stupid stuff like `foo.bar = process.argv[2];`
				// TODO: Open ESLint issue about this
				VariableDeclarator: {
					array: false,
					object: true
				},
				AssignmentExpression: {
					array: false,

					// Disabled because object assignment destructuring requires parens wrapping:
					// `let foo; ({foo} = object);`
					object: false
				}
			},
			{
				enforceForRenamedProperties: false
			}
		],
		'prefer-numeric-literals': 'error',
		'prefer-rest-params': 'error',
		'prefer-spread': 'error',
		'require-yield': 'error',
		'rest-spread-spacing': [
			'error',
			'never'
		],
		'symbol-description': 'error',
		'template-curly-spacing': 'error',
		'yield-star-spacing': [
			'error',
			'both'
		],

		'no-use-extend-native/no-use-extend-native': 'error',

        'unicorn/no-array-for-each': 'off',

		// TODO: Remove this override at some point.
		// It's just here to ease users into readable variable names.
		'unicorn/prevent-abbreviations': [
			'error',
			{
				checkFilenames: false,
				checkDefaultAndNamespaceImports: false,
				checkShorthandImports: false,
				extendDefaultReplacements: false,
				replacements: {
					// https://thenextweb.com/dd/2020/07/13/linux-kernel-will-no-longer-use-terms-blacklist-and-slave/
					whitelist: {
						allowList: true,
					},
					blacklist: {
						denyList: true,
					},
					master: {
						main: true,
					},
					slave: {
						secondary: true,
					},

					// Not part of `eslint-plugin-unicorn`
					application: {
						app: true,
					},
					applications: {
						apps: true,
					},

					// Part of `eslint-plugin-unicorn`
					arr: {
						array: true,
					},
					e: {
						error: true,
						event: true,
					},
					el: {
						element: true,
					},
					elem: {
						element: true,
					},
					len: {
						length: true,
					},
					msg: {
						message: true,
					},
					num: {
						number: true,
					},
					obj: {
						object: true,
					},
					opts: {
						options: true,
					},
					param: {
						parameter: true,
					},
					params: {
						parameters: true,
					},
					prev: {
						previous: true,
					},
					req: {
						request: true,
					},
					res: {
						response: true,
						result: true,
					},
					ret: {
						returnValue: true,
					},
					str: {
						string: true,
					},
					temp: {
						temporary: true,
					},
					tmp: {
						temporary: true,
					},
					val: {
						value: true,
					},
					err: {
						error: true,
					},
				},
			},
		],
        'unicorn/filename-case': 'off',

		// TODO: Restore when it becomes safer: https://github.com/sindresorhus/eslint-plugin-unicorn/issues/681
		// 'unicorn/string-content': [
		// 	'error',
		// 	{
		// 		patterns: {
		// 			'': '’',
		// 			[/\.\.\./.source]: '…',
		// 			'->': '→',
		// 			[/^http:\/\//.source]: 'http://'
		// 		}
		// 	}
		// ],

		// The character class sorting is a bit buggy at the moment.
		'unicorn/better-regex': [
			'error',
			{
				sortCharacterClasses: false,
			},
		],

		// TODO: Disabled for now until it becomes more stable: https://github.com/sindresorhus/eslint-plugin-unicorn/search?q=consistent-destructuring+is:issue&state=open&type=issues
		'unicorn/consistent-destructuring': 'off',

		// TODO: Disabled for now as I don't have time to deal with the backslash that might come from this. Try to enable this rule in 2021.
		'unicorn/no-null': 'off',

		// We only enforce it for single-line statements to not be too opinionated.
		'unicorn/prefer-ternary': [
			'error',
			'only-single-line',
		],

		// TODO: Remove this override when the rule is more stable.
		'unicorn/consistent-function-scoping': 'off',

		// TODO: Temporarily disabled until it becomes more mature.
		'unicorn/no-useless-undefined': 'off',

		// TODO: Temporarily disabled as the rule is buggy.
		'function-call-argument-newline': 'off',

		'promise/param-names': 'error',
		'promise/no-return-wrap': [
			'error',
			{
				allowReject: true,
			},
		],
		'promise/no-new-statics': 'error',
		'promise/no-return-in-finally': 'error',
		'promise/valid-params': 'error',
		'promise/prefer-await-to-then': 'error',
		'import/default': 'error',
		'import/export': 'error',
		'import/first': 'error',

		// Disabled as it doesn't work with TypeScript.
		// This issue and some others: https://github.com/benmosher/eslint-plugin-import/issues/1341
		// 'import/named': 'error',

		'import/namespace': [
			'error',
			{
				allowComputed: true,
			},
		],
		'import/no-absolute-path': 'error',
		'import/no-anonymous-default-export': 'error',
		'import/no-named-default': 'error',
		'import/no-webpack-loader-syntax': 'error',
		'import/no-self-import': 'error',
		'import/no-cycle': [
			'error',
			{
				ignoreExternal: true,
			},
		],
		'import/no-useless-path-segments': 'error',
		'import/newline-after-import': 'error',
		'import/no-amd': 'error',
		'import/no-duplicates': 'error',

		// We use `unicorn/prefer-module` instead.
		// 'import/no-commonjs': 'error',

		// Looks useful, but too unstable at the moment
		// 'import/no-deprecated': 'error',

		'import/no-extraneous-dependencies': 'error',
		'import/no-mutable-exports': 'error',
		'import/no-named-as-default-member': 'error',
		'import/no-named-as-default': 'error',

		// Disabled because it's buggy and it also doesn't work with TypeScript
		// 'import/no-unresolved': [
		// 	'error',
		// 	{
		// 		commonjs: false
		// 	}
		// ],

		'import/order': 'error',
		'import/no-unassigned-import': [
			'error',
			{
				allow: [
					'@babel/polyfill',
					'**/register',
					'**/register.*',
					'**/register/**',
					'**/register/**.*',
					'**/*.css',
					'**/*.scss',
					'**/*.sass',
					'**/*.less',
				],
			},
		],

		// Redundant with `import/no-extraneous-dependencies`.
		// 'node/no-extraneous-import': 'error',
		// 'node/no-extraneous-require': 'error',

		// Redundant with `import/no-unresolved`.
		// 'node/no-missing-import': 'error', // This rule is also buggy and doesn't support `node:`.
		// 'node/no-missing-require': 'error',

		'node/no-unpublished-bin': 'error',

		// We have this enabled in addition to `import/extensions` as this one has an auto-fix.
		'node/file-extension-in-import': [
			'error',
			'always',
			{
				// TypeScript doesn't yet support using extensions and fails with error TS2691.
				'.ts': 'never',
				'.tsx': 'never',
			},
		],
		'node/no-mixed-requires': [
			'error',
			{
				grouping: true,
				allowCall: true,
			},
		],
		'node/no-new-require': 'error',
		'node/no-path-concat': 'error',

		// Disabled because they're too annoying, see:
		// https://github.com/mysticatea/eslint-plugin-node/issues/105
		// 'node/no-unpublished-import': [
		// 	'error',
		// 	{
		// 		allowModules: [
		// 			'electron',
		// 			'atom'
		// 		]
		// 	}
		// ],
		// 'node/no-unpublished-require': [
		// 	'error',
		// 	{
		// 		allowModules: [
		// 			'electron',
		// 			'atom'
		// 		]
		// 	}
		// ],

		'node/process-exit-as-throw': 'error',

		// Disabled as the rule doesn't exclude scripts executed with `node` but not referenced in 'bin'. See https://github.com/mysticatea/eslint-plugin-node/issues/96
		// 'node/shebang': 'error',

		'node/no-deprecated-api': 'error',
		'node/prefer-global/buffer': [
			'error',
			'never',
		],
		'node/prefer-global/console': [
			'error',
			'always',
		],
		'node/prefer-global/process': [
			'error',
			'always',
		],
		'node/prefer-global/text-decoder': [
			'error',
			'always',
		],
		'node/prefer-global/text-encoder': [
			'error',
			'always',
		],
		'node/prefer-global/url-search-params': [
			'error',
			'always',
		],
		'node/prefer-global/url': [
			'error',
			'always',
		],
		'node/prefer-promises/dns': 'error',
		'node/prefer-promises/fs': 'error',
		'eslint-comments/disable-enable-pair': [
			'error',
			{
				allowWholeFile: true,
			},
		],
		'eslint-comments/no-aggregating-enable': 'error',
		'eslint-comments/no-duplicate-disable': 'error',

		// Disabled as it's already covered by the `unicorn/no-abusive-eslint-disable` rule.
		// 'eslint-comments/no-unlimited-disable': 'error',
		'eslint-comments/no-unused-disable': 'error',
		'eslint-comments/no-unused-enable': 'error',

		'unicorn/prefer-module': 'off',
		'unicorn/prefer-node-protocol': 'off',
		'operator-linebreak': 'off',
		'semi-style': 'off',
        'prettier/prettier': ['error', {
            arrowParens: 'avoid',
			bracketSpacing: true,
			printWidth: 120,
			semi: false,
			singleQuote: true,
			tabs: true,
			tabWidth: 4,
			trailingComma: 'es5',
        }]
	},
};
