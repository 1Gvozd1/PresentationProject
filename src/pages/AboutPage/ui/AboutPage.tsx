import { useTranslation } from 'react-i18next';

export default function AboutPage() { // ОБЯЗАТЕЛЬНО по умолчанию импорт так как по другому Async не будет работать
    const { t } = useTranslation('about'); // передаем about чтобы грузился перевод только для about, а нне весь (по умолчанию translation)

    return (
        <div>
            {t('О сайте')}
        </div>
    );
}
