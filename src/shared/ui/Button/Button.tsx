import { classNames } from 'shared/lib/classNames/classNames';
import { ButtonHTMLAttributes, FC } from 'react';
import cls from './Button.module.scss';

export enum ButtonTheme { // тема для нашей кнопки (так как для UI кита должны быть разные темы - кнопка с рамкой; кнопка без рамки; кнопка с цветом заднего фона)
    CLEAR = 'clear', // кнопка без ничего
}

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> { // для того чтобы передавать пропсы свойственные для кнопки наследуем
    className?: string; // для того чтобы извне поправить отступы, изменить размер
    theme?: ButtonTheme;
}

export const Button: FC<ButtonProps> = (props) => {
    const {
        className,
        children,
        theme,
        ...otherProps
    } = props;
    return (
        <button
            type="button"
            className={classNames(cls.Button, {}, [className, cls[theme]])}
            {...otherProps}
        >
            {children}
        </button>
    );
};
