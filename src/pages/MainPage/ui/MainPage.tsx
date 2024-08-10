import { useTranslation } from "react-i18next";

export default function MainPage() { // ОБЯЗАТЕЛЬНО по умолчанию импорт так как по другому Async не будет работать
    const {t} = useTranslation();

    return (
        <div>
            {t('Главная страница')}
        </div>
    )
}