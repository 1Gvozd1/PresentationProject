import { classNames } from "shared/lib/classNames/classNames";
import cls from './Button.module.scss'
import { ButtonHTMLAttributes, FC } from "react";

export enum ButtonTheme { // тема для нашей кнопки (так как для UI кита должны быть разные темы - кнопка с рамкой; кнопка без рамки; кнопка с цветом заднего фона)
    CLEAR = 'clear', // кнопка без ничего
}

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> { // для того чтобы передавать пропсы свойственные для кнопки наследуем
    className?: string; //для того чтобы извне поправить отступы, изменить размер
    theme?: ButtonTheme;
}

export const Button: FC<ButtonProps> = (props) => {
    const {
    className, 
    children,
    theme = ButtonTheme.CLEAR,
    ...otherProps
    } = props;
    return(
        <button className={classNames(cls.Button, {}, [className, cls[theme]])} {...otherProps}>
            {children}
	    </button>
    )
}