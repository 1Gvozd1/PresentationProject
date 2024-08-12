// не в shared слое потому что это тоже корректная форма расположения конфига рядом с местом его инициализации
import { configureStore } from '@reduxjs/toolkit';
import { counterReducer } from 'entities/Counter';
import { StateSchema } from './StateSchema';

export function createReduxStore(initialState?: StateSchema) { // вынесли в отдельную функцию для дальнейшего использования в jest, storybook
    return configureStore<StateSchema>({
        reducer: {
            counter: counterReducer,
        },
        devTools: __IS_DEV__,
        preloadedState: initialState,

    });
}
