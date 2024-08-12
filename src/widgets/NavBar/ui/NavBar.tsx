import { classNames } from 'shared/lib/classNames/classNames';
import { Modal } from 'shared/ui/Modal/Modal';
import { useCallback, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { Button, ButtonTheme } from 'shared/ui/Button/Button';
import cls from './NavBar.module.scss';

interface NavBarProps {
    className?: string; // для того чтобы извне поправить отступы, изменить размер
}

export function NavBar({ className }:NavBarProps) {
    const [isAuthModal, setIsAuthModal] = useState(false);
    const { t } = useTranslation();

    const onToggleModal = useCallback(() => { // так как мы передаем функцию как пропс, нужно обернуть ее в useCallback
        setIsAuthModal((prev) => !prev);
    }, []);
    return (
        <div className={classNames(cls.Navbar, {}, [className])}>

            <Button
                theme={ButtonTheme.CLEAR_INVERTED}
                className={cls.links}
                onClick={onToggleModal}
            >
                {t('Войти')}
            </Button>

            <Modal isOpen={isAuthModal} onClose={onToggleModal}>
                children
            </Modal>

        </div>
    );
}
