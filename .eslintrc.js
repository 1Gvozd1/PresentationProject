module.exports = {
    env: {
        browser: true,
        es2021: true,
        jest: true,
    },
    extends: [
        'plugin:react/recommended',
        'airbnb',
        'plugin:i18next/recommended',
    ],
    parser: '@typescript-eslint/parser',
    parserOptions: {
        ecmaFeatures: {
            jsx: true,
        },
        ecmaVersion: 'latest',
        sourceType: 'module',
    },
    plugins: [
        'react',
        '@typescript-eslint',
        'i18next',
    ],
    rules: {
        'react/jsx-indent': [2, 4], // отступы в jsx
        'react/jsx-indent-props': [2, 4],
        indent: [2, 4], // отступы для обычного кода
        'react/jsx-filename-extension': [2, { extensions: ['.js', '.jsx', '.tsx'] }], // разрешить jsx в .tsx
        'import/no-unresolved': 'off', // для того чтобы абсолютные пути работали
        'import/prefer-default-export': 'off', // лучше именованный экспорт
        'no-unused-vars': 'warn', // неиспользуемые переменные
        'react/require-default-props': 'off', // значения по умолчанию
        'react/react-in-jsx-scope': 'off', // используем jsx без импорта react (с 16 версии так не делают)
        'react/jsx-props-no-spreading': 'warn', // чтобы использовать spread синтаксис для пропсов(практически всегда это не очень)
        'react/function-component-definition': 'off', // использовать не только FD функции
        'no-shadow': 'off',
        'import/extensions': 'off',
        'import/no-extraneous-dependencies': 'off',
        'no-underscore-dangle': 'off', // нижние отступы
        'linebreak-style': 'off',
        'max-len': ['error', { "ignoreComments": true, code: 1000 }],
        'i18next/no-literal-string': ['warn', { markupOnly: true }], // ругается только на отсутствие переводов в jsx
    },
    globals: {
        __IS_DEV__: true, // чтобы не ругался на глоб переменные
    },
};
