import { configureStore, ThunkAction } from '@reduxjs/toolkit';
import { createWrapper } from 'next-redux-wrapper';

import * as issuesSlice from '../features/issues/issuesSlice';

import type { Action } from 'redux';

const makeStore = () =>
    configureStore({
        reducer: {
            [issuesSlice.name]: issuesSlice.reducer
        },
        devTools: true
    });

export type AppStore = ReturnType<typeof makeStore>;
export type RootState = ReturnType<AppStore['getState']>;
export type AppDispatch = AppStore['dispatch'];
export type AppThunk<ReturnType = void> = ThunkAction<
    ReturnType,
    RootState,
    unknown,
    Action
>;

export const wrapper = createWrapper<AppStore>(makeStore);
