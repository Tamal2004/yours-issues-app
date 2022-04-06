import React from 'react';
import { render as rtlRender, RenderOptions } from '@testing-library/react';
import { configureStore } from '@reduxjs/toolkit';
import { Provider } from 'react-redux';
import { ThemeProvider } from 'styled-components';

import { AppStore, rootReducer, RootState } from 'utils/store';
import { theme } from 'theme';

const render = (
    ui: React.ReactElement,
    {
        preloadedState,
        store = configureStore({ reducer: rootReducer, preloadedState }),
        ...renderOptions
    }: { preloadedState?: RootState; store?: AppStore } & RenderOptions = {}
) => {
    const Wrapper: React.FC = ({ children }) => {
        return (
            <Provider store={store}>
                <ThemeProvider theme={theme}>{children}</ThemeProvider>
            </Provider>
        );
    };
    return rtlRender(ui, { wrapper: Wrapper, ...renderOptions });
};

// Re-export everything
export * from '@testing-library/react';
// Override render method
export { render };
