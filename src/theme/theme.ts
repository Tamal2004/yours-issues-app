import baseStyled, {
    css as baseCss,
    ThemedCssFunction,
    ThemedStyledInterface
} from 'styled-components';

export const theme = {
    colors: {
        primary: {
            light: 'rgba(50, 103, 240, 0.17)',
            main: '#3267F0'
        },
        secondary: {
            main: '#9A41EA'
        },
        error: {
            light: 'rgba(255, 0, 0, 0.15)',
            main: '#FF0000',
            dark: 'rgba(200, 10, 16, 0.28)'
        },
        background: {
            light: 'rgba(255, 255, 255, 0.12)',
            main: 'rgba(255, 255, 255, 0.1)',
            dark: '#040C28'
        },
        grey: {
            lightest: 'rgba(230, 231, 233, 0.5)',
            light: 'rgba(230, 231, 233, 0.8)',
            main: '#E6E7E9',
        },
        border: {
            light: 'rgba(255, 255, 255, 0.2)'
        }
    },
    typography: {
        input: baseCss`
            font-size: 2.5rem;
            line-height: 1.2;
            font-weight: 400;
        `,
        tooltip: baseCss`
            font-size: 1.5rem;
            line-height: 1.2;
            font-weight: 400;
        `,
        button: baseCss`
            font-size: 1.75rem;
            line-height: 1.29;
            font-weight: 600;
        `,
    }
};

export type Theme = typeof theme;
export const styled: ThemedStyledInterface<Theme> = baseStyled;
export const css: ThemedCssFunction<Theme> = baseCss;
