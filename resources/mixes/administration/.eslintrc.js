// http://eslint.org/docs/user-guide/configuring

module.exports = {
    root: true,
    parser: 'babel-eslint',
    parserOptions: {
        sourceType: 'module'
    },
    env: {
        browser: true,
    },
    extends: 'airbnb-base',
    // required to lint *.vue files
    plugins: [
        'html'
    ],
    // check if imports actually resolve
    'settings': {
        'import/resolver': {
            'webpack': {
                'config': 'build/webpack.base.conf.js'
            }
        }
    },
    // add your custom rules here
    'rules': {
        // don't require .vue extension when importing
        'arrow-parens': [2, "as-needed", {
            "requireForBlockBody": false
        }],
        'guard-for-in': 0,
        'indent': ['error', 4, {
            'SwitchCase': 1
        }],
        // don't require .vue extension when importing
        'import/extensions': ['error', 'always', {
            'js': 'never',
            'vue': 'never'
        }],
        // allow optionalDependencies
        'import/no-extraneous-dependencies': ['error', {
            'optionalDependencies': ['test/unit/index.js']
        }],
        // allow console during development
        'no-console': process.env.NODE_ENV === 'production' ? 2 : 0,
        // allow debugger during development
        'no-debugger': process.env.NODE_ENV === 'production' ? 2 : 0,
        'no-param-reassign': ['error', {
            'props': false
        }],
        'no-plusplus': ['error', {
           'allowForLoopAfterthoughts': true
        }],
        'no-restricted-syntax': ['error', 'WithStatement', "BinaryExpression[operator='in']"]
    }
}
