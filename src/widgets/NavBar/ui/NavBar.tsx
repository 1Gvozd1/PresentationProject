import { classNames } from 'shared/lib/classNames/classNames';
import cls from './NavBar.module.scss';

interface NavBarProps {
    className?: string; // для того чтобы извне поправить отступы, изменить размер
}

export function NavBar({ className }:NavBarProps) {
    return (
        <div className={classNames(cls.Navbar, {}, [className])}>

            <div className={cls.links}>
                /
            </div>

        </div>
    );
}
