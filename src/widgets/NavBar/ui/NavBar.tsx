import { classNames } from "shared/lib/classNames/classNames";
import cls from './NavBar.module.scss'
import { AppLink, AppLinkTheme } from "shared/ui/AppLink/AppLink";
import { ThemeSwitcher } from "widgets/ThemeSwitcher";


interface NavBarProps {
    className?: string; //для того чтобы извне поправить отступы, изменить размер
}

export function NavBar({className}:NavBarProps) {
    return(
        <div className={classNames(cls.Navbar, {}, [className])}>
            <ThemeSwitcher />
            <div className={cls.links}>
                <AppLink theme={AppLinkTheme.SECONDARY} to='/' className={cls.mainLink}>
                    Главная
                </AppLink> {/* ссылки для перехода между путями*/}
                <AppLink theme={AppLinkTheme.SECONDARY} to='/about'>
                    О сайте
                </AppLink>
            </div>

        </div>
    )
}