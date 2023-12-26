"use client"
import * as React from 'react';
import { createTheme } from '@mui/material/styles';

const theme = createTheme({
    palette: {
        primary: {
            main: '#3D0000',
        },
        secondary: {
            main: '#ff4081',
        },
    },
    typography: {
        fontFamily: 'Josefin Sans, sans-serif',
    },
});

export default theme;
