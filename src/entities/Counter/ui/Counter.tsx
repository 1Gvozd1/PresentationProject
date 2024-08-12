import { useDispatch, useSelector } from 'react-redux';
import { Button } from 'shared/ui/Button/Button';
import { StateSchema } from 'app/providers/StoreProvider/config/StateSchema';
import { useTranslation } from 'react-i18next';
import { counterActions } from '../model/slice/counterSlice';
import { getCounter } from '../model/selectors/getCounter/getCounter';
import { getCounterValue } from '../model/selectors/getCounterValue/getCounterValue copy';

export function Counter() {
    const dispatch = useDispatch();
    const counterValue = useSelector(getCounterValue); // такой синтаксис благодаря createSelector в getCounterValue.ts
    const { t } = useTranslation();

    const increment = () => {
        dispatch(counterActions.increment());
    };

    const decrement = () => {
        dispatch(counterActions.decrement());
    };

    return (
        <div>
            <h1 data-testid="value-title">

                {counterValue}
            </h1>
            <Button onClick={increment} data-testid="increment-btn">
                {t('increment')}
            </Button>
            <Button onClick={decrement} data-testid="decrement-btn">
                {t('decrement')}

            </Button>
        </div>
    );
}
