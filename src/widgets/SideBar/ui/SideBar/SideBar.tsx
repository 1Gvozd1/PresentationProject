import { classNames } from 'shared/lib/classNames/classNames';
import cls from './SideBar.module.scss'
import { useState } from "react";
import { ThemeSwitcher } from 'widgets/ThemeSwitcher';

interface SideBarProps {
    className?: string; //для того чтобы извне поправить отступы, изменить размер
}

export function SideBar({className}:SideBarProps) {
    const [collapsed, setCollapsed] = useState(false);

    function handleToggle() {
        setCollapsed(!collapsed)
    }

    return(
        <div className={classNames(cls.SideBar, {[cls.collapsed]: collapsed}, [className])}>
            <button onClick={handleToggle}>toggle2</button>   
            <div className={cls.switchers}>
                <ThemeSwitcher />    
            </div> 
	    </div>
    )
}