// Яркий пример shared
import { classNames } from 'shared/lib/classNames/classNames';
import { Link, LinkProps } from 'react-router-dom';
import { FC } from 'react';
import cls from './AppLink.module.scss';

export enum AppLinkTheme { // тема для нашей ссылки (так как для UI кита должны быть разные темы - кнопка с рамкой; кнопка без рамки; кнопка с цветом заднего фона)
    PRIMARY = 'primary',
    SECONDARY = 'secondary',
    RED = 'red'
}

interface AppLinkProps extends LinkProps { // так как у самого Link есть свои встроенные пропсы, наследуем
    className?: string; // для того чтобы извне поправить отступы, изменить размер
    theme?: AppLinkTheme;
}

export const AppLink: FC<AppLinkProps> = (props) => {
    const {
        to,
        className,
        children,
        theme = AppLinkTheme.PRIMARY,
        ...otherProps
    } = props;

    return (
        <Link
            to={to}
            className={classNames(cls.AppLink, {}, [className, cls[theme]])} // передаем дополнительно вместе с className извне в массив еще и тему
            {...otherProps}
        >
            {children}
        </Link>
    );
};
