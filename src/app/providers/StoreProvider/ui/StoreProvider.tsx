import { classNames } from 'shared/lib/classNames/classNames';
import { ReactNode } from 'react';
import { Provider } from 'react-redux';
import { DeepPartial } from '@reduxjs/toolkit';
import cls from './StoreProvider.module.scss';
import { createReduxStore } from '../config/store';
import { StateSchema } from '../config/StateSchema';

interface StoreProviderProps {
    children?: ReactNode;
    initialState?: DeepPartial<StateSchema>;
}

export function StoreProvider(props:StoreProviderProps) {
    const {
        children,
        initialState,
    } = props;

    const store = createReduxStore(initialState as StateSchema);

    return (
        <Provider store={store}>
            {children}
        </Provider>
    );
}
