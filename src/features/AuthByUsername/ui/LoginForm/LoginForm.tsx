import { classNames } from 'shared/lib/classNames/classNames';
import { useTheme } from 'app/providers/ThemeProvider';
import { useTranslation } from 'react-i18next';
import { Button } from 'shared/ui/Button/Button';
import { Input } from 'shared/ui/Input/Input';
import cls from './LoginForm.module.scss';

interface LoginFormProps {
    className?: string; // для того чтобы извне поправить отступы, изменить размер
}

export function LoginForm({ className }:LoginFormProps) {
    const { t } = useTranslation();
    return (
        <div className={classNames(cls.LoginForm, {}, [className])}>
            <Input type="text" className={cls.input} placeholder={t('Введите username')} autofocus />
            <Input type="text" className={cls.input} placeholder={t('Введите пароль')} />
            <Button className={cls.loginBtn}>
                {t('Войти')}
            </Button>
        </div>
    );
}
