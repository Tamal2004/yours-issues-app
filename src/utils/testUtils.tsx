import React from 'react';
import { render as rtlRender, RenderOptions } from '@testing-library/react';
import { configureStore } from '@reduxjs/toolkit';
import { Provider } from 'react-redux';

import { AppStore, rootReducer, RootState } from 'utils/store';

const render = (
    ui: React.ReactElement,
    {
        preloadedState,
        store = configureStore({ reducer: rootReducer, preloadedState }),
        ...renderOptions
    }: { preloadedState?: RootState; store?: AppStore } & RenderOptions = {}
) => {
    const Wrapper: React.FC = ({ children }) => {
        return <Provider store={store}>{children}</Provider>;
    };
    return rtlRender(ui, { wrapper: Wrapper, ...renderOptions });
};

// Re-export everything
export * from '@testing-library/react';
// Override render method
export { render };
