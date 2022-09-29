export const eslintConfig = {
  root: true,
  parser: '@typescript-eslint/parser',
  parserOptions: {
    project: './tsconfig.eslint.json',
    sourceType: 'module',
    ecmaVersion: 2020,
    warnOnUnsupportedTypeScriptVersion: false
  },
  extends: ['plugin:@typescript-eslint/recommended', 'plugin:prettier/recommended'],
  env: {
    node: true,
    es6: true,
    es2017: true,
    es2020: true,
    commonjs: true
  },
  rules: {
    '@typescript-eslint/adjacent-overload-signatures': 'error',
    '@typescript-eslint/array-type': [
      'error',
      {
        default: 'array-simple',
        readonly: 'generic'
      }
    ],
    '@typescript-eslint/ban-ts-comment': [
      'error',
      {
        minimumDescriptionLength: 3,
        'ts-check': true,
        'ts-expect-error': 'allow-with-description',
        'ts-ignore': {
          descriptionFormat: '^: \\(TS\\d+\\) .+$'
        },
        'ts-nocheck': true
      }
    ],
    '@typescript-eslint/class-literal-property-style': 'error',
    // Note: (Sayakie) Review 'comma-dangle'
    '@typescript-eslint/comma-dangle': 'error',
    '@typescript-eslint/consistent-generic-constructors': ['error', 'type-annotation'],
    // Note: (Sayakie) Review 'consistent-indexed-object-style', 'consistent-type-assertions'
    '@typescript-eslint/consistent-indexed-object-style': ['warn', 'record'],
    '@typescript-eslint/consistent-type-assertions': [
      'error',
      {
        assertionStyle: 'as',
        objectLiteralTypeAssertions: 'allow-as-parameter'
      }
    ],
    '@typescript-eslint/consistent-type-definitions': 'error',
    '@typescript-eslint/consistent-type-exports': [
      'error',
      {
        fixMixedExportsWithInlineTypeSpecifier: true
      }
    ],
    '@typescript-eslint/consistent-type-imports': 'error',
    '@typescript-eslint/default-param-last': 'error',
    '@typescript-eslint/dot-notation': [
      'error',
      {
        allowPattern: '(^[A-Z])|(^[a-z]+(_[a-z]+)+$)',
        allowPrivateClassPropertyAccess: true
      }
    ],
    // NOTE: (Sayakie) Review 'explicit-function-return-type'
    '@typescript-eslint/explicit-function-return-type': [
      'error',
      {
        allowExpressions: true,
        allowConciseArrowFunctionExpressionsStartingWithVoid: true
      }
    ],
    '@typescript-eslint/explicit-member-accessibility': 'error',
    '@typescript-eslint/explicit-module-boundary-types': [
      'error',
      {
        allowDirectConstAssertionInArrowFunctions: false,
        allowTypedFunctionExpressions: false
      }
    ],
    '@typescript-eslint/member-delimiter-style': [
      'error',
      {
        multiline: {
          delimiter: 'none'
        }
      }
    ],
    '@typescript-eslint/member-ordering': [
      'error',
      {
        default: {
          memberTypes: [
            // Index signature
            'signature',

            // Fields
            'public-static-field',
            'protected-static-field',
            'private-static-field',

            'public-decorated-field',
            'protected-decorated-field',
            'private-decorated-field',

            'public-instance-field',
            'protected-instance-field',
            'private-instance-field',

            'public-abstract-field',
            'protected-abstract-field',
            'private-abstract-field',

            'public-field',
            'protected-field',
            'private-field',

            'static-field',
            'instance-field',
            'abstract-field',

            'decorated-field',

            'field',

            // Static initialization
            'static-initialization',

            // Constructors
            'public-constructor',
            'protected-constructor',
            'private-constructor',

            'constructor',

            // Getters
            'public-static-get',
            'protected-static-get',
            'private-static-get',

            'public-decorated-get',
            'protected-decorated-get',
            'private-decorated-get',

            'public-instance-get',
            'protected-instance-get',
            'private-instance-get',

            'public-abstract-get',
            'protected-abstract-get',
            'private-abstract-get',

            'public-get',
            'protected-get',
            'private-get',

            'static-get',
            'instance-get',
            'abstract-get',

            'decorated-get',

            'get',

            // Setters
            'public-static-set',
            'protected-static-set',
            'private-static-set',

            'public-decorated-set',
            'protected-decorated-set',
            'private-decorated-set',

            'public-instance-set',
            'protected-instance-set',
            'private-instance-set',

            'public-abstract-set',
            'protected-abstract-set',
            'private-abstract-set',

            'public-set',
            'protected-set',
            'private-set',

            'static-set',
            'instance-set',
            'abstract-set',

            'decorated-set',

            'set',

            // Methods
            'public-static-method',
            'protected-static-method',
            'private-static-method',

            'public-decorated-method',
            'protected-decorated-method',
            'private-decorated-method',

            'public-instance-method',
            'protected-instance-method',
            'private-instance-method',

            'public-abstract-method',
            'protected-abstract-method',
            'private-abstract-method',

            'public-method',
            'protected-method',
            'private-method',

            'static-method',
            'instance-method',
            'abstract-method',

            'decorated-method',

            'method'
          ],
          order: 'alphabetically'
        }
      }
    ],
    '@typescript-eslint/naming-convention': [
      'error',
      {
        // Enforce that boolean variables are prefixed with an allowed verbs
        format: ['StrictPascalCase'],
        prefix: ['is', 'should', 'has', 'can', 'did', 'will'],
        selector: 'variable',
        types: ['boolean']
      },
      {
        // Enforce that typeLike names always fit 'StrictPascalCase'
        format: ['StrictPascalCase'],
        selector: 'typeLike'
      },
      {
        // Enforce that interface names do not begin with an 'I'
        custom: {
          regex: '^I[A-Z]',
          match: false
        },
        format: ['StrictPascalCase'],
        selector: 'interface'
      },
      {
        custom: {
          regex: '[- ]',
          match: false
        },
        format: ['strictCamelCase'],
        selector: ['variable', 'parameter', 'property']
      },
      {
        format: null,
        modifiers: ['requiresQuotes'],
        selector: ['property', 'method', 'accessor', 'enumMember']
      },
      {
        // Enforce that declared as being `const` in the top-level scope
        // variable should be upper-cased
        format: ['strictCamelCase', 'UPPER_CASE'],
        modifiers: ['const', 'global'],
        selector: ['variable', 'enumMember']
      },
      {
        // Enforce that enum declaration should be not end with '(e)s'
        format: ['StrictPascalCase'],
        selector: 'enum',
        custom: {
          regex: '(e)?s$',
          match: false
        }
      },
      {
        // Enforce that unused variableLike names leading with an underscore(_)
        format: ['strictCamelCase'],
        modifiers: ['unused'],
        leadingUnderscore: 'require',
        selector: 'variableLike'
      },
      {
        format: ['strictCamelCase'],
        selector: 'default',
        leadingUnderscore: 'forbid',
        trailingUnderscore: 'forbid'
      }
    ],
    '@typescript-eslint/no-base-to-string': 'error',
    '@typescript-eslint/no-confusing-non-null-assertion': 'error',
    '@typescript-eslint/no-confusing-void-expression': [
      'error',
      {
        ignoreArrowShorthand: true,
        ignoreVoidOperator: true
      }
    ],
    '@typescript-eslint/no-dupe-class-members': 'error',
    '@typescript-eslint/no-duplicate-enum-values': 'error',
    '@typescript-eslint/no-empty-function': [
      'error',
      {
        allow: ['setters', 'protected-constructors', 'decoratedFunctions', 'overrideMethods']
      }
    ],
    '@typescript-eslint/no-empty-interface': [
      'error',
      {
        allowSingleExtends: true
      }
    ],
    // Note: (Sayakie) Should be used very carefully about 'any' type
    '@typescript-eslint/no-explicit-any': 'off',
    '@typescript-eslint/no-extra-parens': [
      'error',
      'all',
      {
        returnAssign: false
      }
    ],
    '@typescript-eslint/no-extraneous-class': 'error',
    '@typescript-eslint/no-invalid-this': 'error',
    '@typescript-eslint/no-invalid-void-type': 'error',
    '@typescript-eslint/no-magic-numbers': [
      'error',
      {
        enforceConst: true,
        ignoreDefaultValues: true,
        ignoreEnums: true,
        ignoreNumericLiteralTypes: true,
        ignoreReadonlyClassProperties: true
      }
    ],
    '@typescript-eslint/no-meaningless-void-operator': 'error',
    '@typescript-eslint/no-namespace': 'off',
    '@typescript-eslint/no-non-null-asserted-nullish-coalescing': 'error',
    '@typescript-eslint/no-non-null-assertion': 'error',
    '@typescript-eslint/no-redundant-type-constituents': 'error',
    '@typescript-eslint/no-throw-literal': 'error',
    '@typescript-eslint/no-unnecessary-boolean-literal-compare': 'error',
    '@typescript-eslint/no-unnecessary-condition': 'error',
    '@typescript-eslint/no-unnecessary-qualifier': 'error',
    '@typescript-eslint/no-unnecessary-type-arguments': 'error',
    '@typescript-eslint/no-unused-vars': [
      'error',
      {
        args: 'all',
        argsIgnorePattern: '^_',
        caughtErrors: 'all',
        ignoreRestSiblings: true
      }
    ],
    '@typescript-eslint/no-use-before-define': [
      'error',
      {
        ignoreTypeReferences: false
      }
    ],
    '@typescript-eslint/no-useless-constructor': 'error',
    '@typescript-eslint/no-useless-empty-export': 'error',
    '@typescript-eslint/non-nullable-type-assertion-style': 'error',
    '@typescript-eslint/prefer-enum-initializers': 'error',
    '@typescript-eslint/prefer-for-of': 'error',
    '@typescript-eslint/prefer-literal-enum-member': [
      'error',
      {
        allowBitwiseExpressions: true
      }
    ],
    '@typescript-eslint/prefer-nullish-coalescing': 'error',
    '@typescript-eslint/prefer-optional-chain': 'error',
    '@typescript-eslint/prefer-readonly': 'error',
    '@typescript-eslint/prefer-reduce-type-parameter': 'error',
    '@typescript-eslint/prefer-regexp-exec': 'error',
    '@typescript-eslint/prefer-return-this-type': 'error',
    '@typescript-eslint/prefer-string-starts-ends-with': 'error',
    '@typescript-eslint/promise-function-async': 'error',
    '@typescript-eslint/require-array-sort-compare': [
      'error',
      {
        ignoreStringArrays: true
      }
    ],
    '@typescript-eslint/restrict-plus-operands': [
      'error',
      {
        checkCompoundAssignments: true
      }
    ],
    '@typescript-eslint/sort-type-union-intersection-members': 'error',
    '@typescript-eslint/strict-boolean-expressions': [
      'error',
      {
        allowString: false,
        allowNumber: false
      }
    ],
    '@typescript-eslint/switch-exhaustiveness-check': 'error',
    '@typescript-eslint/unified-signatures': [
      'error',
      {
        ignoreDifferentlyNamedParameters: true
      }
    ],
    '@typescript-eslint/lines-between-class-members': [
      'error',
      'always',
      {
        exceptAfterOverload: true,
        exceptAfterSingleLine: true
      }
    ],
    '@typescript-eslint/object-curly-spacing': ['error', 'always'],
    '@typescript-eslint/padding-line-between-statements': [
      'error',
      {
        blankLine: 'always',
        prev: ['const', 'let', 'var'],
        next: '*'
      },
      {
        blankLine: 'any',
        prev: ['const', 'let', 'var'],
        next: ['const', 'let', 'var']
      },
      {
        blankLine: 'always',
        prev: '*',
        next: ['class', 'default', 'function', 'interface', 'return', 'type']
      }
    ],
    '@typescript-eslint/space-infix-ops': [
      'error',
      {
        int32Hint: true
      }
    ],
    'comma-dangle': 'off',
    'default-param-last': 'off',
    'dot-notation': 'off',
    'no-dupe-class-members': 'off',
    'no-empty-function': 'off',
    'no-extra-parens': 'off',
    'no-invalid-this': 'off',
    'no-magic-numbers': 'off',
    'no-throw-literal': 'off',
    'no-unused-vars': 'off',
    'no-use-before-define': 'off',
    'no-useless-constructor': 'off',
    'lines-between-class-members': 'off',
    'object-curly-spacing': 'off',
    'padding-line-between-statements': 'off',
    'space-infix-ops': 'off'
  },
  overrides: [
    {
      files: 'test/**/*.{test,spec}.{js,mjs,ts}',
      rules: {}
    }
  ]
}

export default eslintConfig
