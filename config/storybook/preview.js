import { addDecorator } from '@storybook/react';
import { Theme } from '../../src/app/providers/ThemeProvider';
import { StyleDecorator } from '../../src/shared/config/storybook/StyleDecorator/StyleDecorator.ts';
import { ThemeDecorator } from '../../src/shared/config/storybook/ThemeDecorator/ThemeDecorator.tsx';
import { RouterDecorator } from '../../src/shared/config/storybook/RouterDecorator/RouterDecorator.tsx';

export const parameters = {
    actions: { argTypesRegex: '^on[A-Z].*' },
    controls: {
        matchers: {
            color: /(background|color)$/i,
            date: /Date$/,
        },
    },
};

addDecorator(StyleDecorator); // декоратор для применения глобальных стилей к нашим историям
addDecorator(ThemeDecorator(Theme.LIGHT)); // декоратор для задания глобальной темы для наших историй
addDecorator(RouterDecorator); // декоратор корректной работы роутинга
