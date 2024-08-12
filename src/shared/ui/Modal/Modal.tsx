import { classNames } from 'shared/lib/classNames/classNames';
import React, {
    ReactNode, useCallback, useEffect, useRef, useState,
} from 'react';
import { Portal } from 'shared/ui/Portal/Portal';
import { useTheme } from 'app/providers/ThemeProvider/lib/useTheme';
import cls from './Modal.module.scss';

interface ModalProps {
    className?: string; // для того чтобы извне поправить отступы, изменить размер
    children?: ReactNode;
    isOpen?: boolean;
    onClose?: () => void;
}

const ANIMATION_DELAY = 300;

export function Modal(props: ModalProps) {
    const {
        className,
        children,
        isOpen,
        onClose,
    } = props;

    const [isClosing, setIsClosing] = useState(false);
    const timerRef = useRef<ReturnType<typeof setTimeout>>(); // чтобы не тащить в код NodeJS.Timeout
    const { theme } = useTheme();

    const closeHandler = useCallback(() => {
        if (onClose) {
            setIsClosing(true);
            timerRef.current = setTimeout(() => {
                onClose();
                setIsClosing(false);
            }, ANIMATION_DELAY);
        }
    }, [onClose]);

    const onKeyDown = useCallback((e: KeyboardEvent): void => { // чтобы в зависимостях не создавались новые ссылки на функции
        if (e.key === 'Escape') {
            closeHandler();
        }
    }, [closeHandler]);

    function onContentClick(e: React.MouseEvent) {
        e.stopPropagation();
    }

    useEffect(() => {
        if (isOpen) {
            window.addEventListener('keydown', onKeyDown);
        }

        return () => {
            clearTimeout(timerRef.current);
            window.removeEventListener('keydown', onKeyDown);
        };
    }, [isOpen, onKeyDown]);

    const mods: Record<string, boolean> = {
        [cls.opened]: isOpen,
        [cls.isClosing]: isClosing,

    };

    return (
        <Portal>
            <div className={classNames(cls.Modal, mods, [className, theme, 'app_modal'])}>
                <div className={cls.overlay} onClick={closeHandler}>
                    {' '}
                    {/* подложка под нашу модалку */}
                    <div className={cls.content} onClick={onContentClick}>
                        {children}
                    </div>

                </div>
            </div>
        </Portal>
    );
}
