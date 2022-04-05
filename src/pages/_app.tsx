import React from 'react';
import App, { AppProps } from 'next/app';
import { ThemeProvider } from 'styled-components';

import { theme } from 'theme';

import { wrapper } from 'utils/store';

export const getInitialProps = wrapper.getInitialAppProps(
    () => async (context) => {
        const pageProps = {
            ...(await App.getInitialProps(context)).pageProps
        };

        return { pageProps };
    }
);

const WrappedApp: React.FC<AppProps> = ({ Component, pageProps }) => {
    return (
        <ThemeProvider theme={theme}>
                <Component {...pageProps} />
        </ThemeProvider>
    );
};

export default wrapper.withRedux(WrappedApp);
