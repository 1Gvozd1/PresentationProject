import { classNames } from 'shared/lib/classNames/classNames';
import { AppLink, AppLinkTheme } from 'shared/ui/AppLink/AppLink';
import cls from './NavBar.module.scss';

interface NavBarProps {
    className?: string; // для того чтобы извне поправить отступы, изменить размер
}

export function NavBar({ className }:NavBarProps) {
    return (
        <div className={classNames(cls.Navbar, {}, [className])}>

            <div className={cls.links}>
                <AppLink theme={AppLinkTheme.SECONDARY} to="/" className={cls.mainLink}>
                    Главная
                </AppLink>
                {' '}
                {/* ссылки для перехода между путями */}
                <AppLink theme={AppLinkTheme.SECONDARY} to="/about">
                    О сайте
                </AppLink>
            </div>

        </div>
    );
}
