import  baseStyled, {
    css,
    ThemedStyledInterface
} from 'styled-components';

export const theme = {
    colors: {
        primary: {
            light: '#4689ED',
            main: '#186CE8',
            dark: '#1356BA'
        },
        grey: { light: '#EEEEEE', main: '#E0E0E0', dark: '#BDBDBD' }
    },
    typography: {
        headline: css`
            font-size: 12rem;
            line-height: 1.25;
            font-weight: 700;
        `
    }
};

export type Theme = typeof theme;
export const styled: ThemedStyledInterface<Theme> = baseStyled;

