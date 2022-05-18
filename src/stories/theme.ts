import { createTheme } from '@mui/material/styles';

declare module '@mui/material/styles' {

    interface Palette {
        card: {
            active: string,
            checked: string,
            border: string,
        },
        checkbox: {
            default: string,
            checked: string,
        },
    }

    interface PaletteOptions {
        card: {
            active: string,
            checked: string,
            border: string,
        }
        checkbox: {
            default: string,
            checked: string,
        }
    }

    interface Theme {
        customShadows: string[],
        customBorderRadiuses: string[],
    }

    interface ThemeOptions {
        customShadows: string[],
        customBorderRadiuses: string[],
    }
}

export const theme = createTheme({
    palette: {
        card: {
            active: '#65E9D9',
            checked: '#65E9D9',
            border: '#3D8479',
        },
        checkbox: {
            default: '#616161',
            checked: '#21B6A8',
        }
    },
    customBorderRadiuses: ['10px'],
    customShadows: [
        "none", '0px 0px 0px 2px']
});