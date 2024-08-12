import { classNames } from 'shared/lib/classNames/classNames';
import { ButtonHTMLAttributes, FC } from 'react';
import cls from './Button.module.scss';

export enum ButtonTheme { // тема для нашей кнопки (так как для UI кита должны быть разные темы - кнопка с рамкой; кнопка без рамки; кнопка с цветом заднего фона)
    CLEAR = 'clear', // кнопка без ничего
    CLEAR_INVERTED = 'clearInverted',
    OUTLINE = 'outline',
    BACKGROUND = 'background',
    BACKGROUND_INVERTED = 'backgroundInverted',

}

export enum ButtonSize { // размер нашей кнопки
    M = 'size_m',
    L = 'size_l',
    XL = 'size_xl',
}

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> { // для того чтобы передавать пропсы свойственные для кнопки наследуем
    className?: string; // для того чтобы извне поправить отступы, изменить размер
    theme?: ButtonTheme;
    square?: boolean; // квадратная ли кнопка
    size?: ButtonSize
}

export const Button: FC<ButtonProps> = (props) => {
    const {
        className,
        children,
        theme,
        square,
        size = ButtonSize.M,
        ...otherProps
    } = props;

    const mods: Record<string, boolean> = {
        [cls.square]: square,
    };

    return (
        <button
            type="button"
            className={classNames(cls.Button, mods, [className, cls[theme], cls[size]])}
            {...otherProps}
        >
            {children}
        </button>
    );
};
