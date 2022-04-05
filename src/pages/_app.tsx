import React from 'react';
import App, { AppProps } from 'next/app';

import { wrapper } from '../utils/store';

export const getInitialProps = wrapper.getInitialAppProps(
    () => async (context) => {
        const pageProps = {
            ...(await App.getInitialProps(context)).pageProps
        };

        return { pageProps };
    }
);

const WrappedApp: React.FC<AppProps> = ({ Component, pageProps }) => {
    return <Component {...pageProps} />;
};

export default wrapper.withRedux(WrappedApp);
