module.exports = {
    "env": {
        "browser": true,
        "es2021": true
    },
    "extends": [
        "plugin:react/recommended",
        'plugin:@typescript-eslint/recommended',
        "airbnb",
        'plugin:prettier/recommended'
    ],
    // ：ESLint的解析器，用于解析typescript，从而检查和规范Typescript代码
    "parser": "@typescript-eslint/parser",
    //指定ESLint可以解析JSX语法
    "parserOptions": {
        "ecmaFeatures": {
            "jsx": true
        },
        "ecmaVersion": "latest",
        "sourceType": "module"
    },
    "plugins": [
        "react",
        "@typescript-eslint", // 这是一个ESLint插件，包含了各类定义好的检测Typescript代码的规范
        'react-hooks'
    ],
    // 在Rules中可以自定义你的React代码编码规范
    "rules": {
        "no-unused-vars": 'warn',
        "no-console": "off",
        "no-undef": "off",
        "no-shadow": "off",
        'import/extensions': [
            'error',
            'ignorePackages',
            {
              js: 'never',
              jsx: 'never',
              ts: 'never',
              tsx: 'never',
            },
          ],
        "react/jsx-filename-extension": [1,{extensions: [".tx", ".tsx"]}],
        "no-empty-function": "off",
        "@typescript-eslint/no-empty-function": ["off"],
        // "prettier/prettier": ["off", { "singleQuote": true, "parser": "flow" }]
    },
    settings: {
        "import/resolver": {
            node: {
                extensions: ['.tx','.tsx']
            }
        }
    }
}
