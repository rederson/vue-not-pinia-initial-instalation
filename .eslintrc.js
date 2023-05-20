module.exports = {
    'env': {
        'browser': true,
        'es2021': true
    },
    'extends': [
        'eslint:recommended',
        'plugin:vue/vue3-recommended'
    ],
    'overrides': [
    ],
    'parserOptions': {
        'ecmaVersion': 'latest',
        'sourceType': 'module'
    },
    'plugins': [
        'vue'
    ],
    'rules': {
        semi: ['error', 'always'],
        quotes: ['error', 'single'],
        indent: ['error', 4 ], // de acordo com sua preferência
        'comma-spacing': ['error', { before: false, after: true}],
        'vue/html-quotes': [ 'error', 'single', { 'avoidEscape': false }]

    }
};
