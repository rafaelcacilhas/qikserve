import { createTheme}     from '@mui/material/styles';

import {DarkPeach}           from "./colors";
import {PaleLilac, BlueGrey} from "./colors";

import '@fontsource/roboto/500.css';
import '@fontsource/roboto/300.css';



const theme = createTheme({
    typography: {
        fontFamily: 'Roboto',
        body1: {
            fontSize: 16,
        },
        body2: {
            fontSize: 14,
            textTransform: 'none',
            fontWeight: 300
        },
        bold: {
            fontWeight: 500,
        },
        button: {
            textTransform: 'none',
            fontSize: 16,
            fontWeight: 600,
        },

    },

    palette: {

        primary: {
            main:           DarkPeach,
            contrastText:   '#000000',
            cinza: BlueGrey,
        },

        secondary: {
            main:           '#000000',
        },


        text: {
            primary: '#000000'
        },

        grayBack: {
            main: PaleLilac,
            contrastText:  BlueGrey,
        }
    }



})

export default theme;
