import { BugButton } from 'app/providers/ErrorBoundary';
import { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { Input } from 'shared/ui/Input/Input';

export default function MainPage() { // ОБЯЗАТЕЛЬНО по умолчанию импорт так как по другому Async не будет работать
    const { t } = useTranslation();
    const [value, setValue] = useState('');

    const onChange = (val:string) => {
        setValue(val);
    };

    return (
        <div>
            <BugButton />
            {t('Главная страница')}

        </div>
    );
}
