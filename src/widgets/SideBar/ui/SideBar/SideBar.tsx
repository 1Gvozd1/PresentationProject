import { classNames } from 'shared/lib/classNames/classNames';
import { useState } from 'react';
import { ThemeSwitcher } from 'widgets/ThemeSwitcher';
import { LangSwitcher } from 'widgets/LangSwitcher';
import { Button, ButtonSize, ButtonTheme } from 'shared/ui/Button/Button';
import { AppLink, AppLinkTheme } from 'shared/ui/AppLink/AppLink';
import { RoutePath } from 'shared/config/routeConfig/routeConfig';
import { useTranslation } from 'react-i18next';
import AboutIcon from 'shared/assets/icons/about-20-20.svg';
import MainIcon from 'shared/assets/icons/main-20-20.svg';
import cls from './SideBar.module.scss';

interface SideBarProps {
    className?: string; // для того чтобы извне поправить отступы, изменить размер
}

export function SideBar({ className }:SideBarProps) {
    const [collapsed, setCollapsed] = useState(false);
    const { t } = useTranslation();

    const handleToggle = () => {
        setCollapsed(!collapsed);
    };

    return (
        <div
            data-testid="sidebar"
            className={classNames(cls.SideBar, { [cls.collapsed]: collapsed }, [className])}
        >
            <Button
                data-testid="sidebar-toggle"
                onClick={handleToggle}
                className={cls.collapseBtn}
                theme={ButtonTheme.BACKGROUND_INVERTED}
                size={ButtonSize.L}
                square

            >
                {collapsed ? '>' : '<'}
            </Button>
            <div className={cls.items}>

                <AppLink
                    theme={AppLinkTheme.SECONDARY}
                    to={RoutePath.main} // вместо "/"
                    className={cls.item}

                >
                    <MainIcon className={cls.icon} />
                    <span className={cls.link}>{t('Главная')}</span>

                </AppLink>
                {' '}
                {/* ссылки для перехода между путями */}

                <AppLink
                    theme={AppLinkTheme.SECONDARY}
                    to={RoutePath.about} // вместо "/about"
                    className={cls.item}

                >
                    <AboutIcon className={cls.icon} />
                    <span className={cls.link}>{t('О сайте')}</span>

                </AppLink>
                {' '}
                {/* ссылки для перехода между путями */}

            </div>
            <div className={cls.switchers}>
                <ThemeSwitcher />
                <LangSwitcher short={collapsed} className={cls.lang} />
            </div>
        </div>
    );
}
