import React from 'react'

import { ThemeProvider, createMuiTheme } from '@material-ui/core'
import { Splashscreen } from './lib'


const theme = createMuiTheme()

export function App() {
    return (
        <ThemeProvider theme={theme}>
            <Splashscreen />
        </ThemeProvider>
    )
}