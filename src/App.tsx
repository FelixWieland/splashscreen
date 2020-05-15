import React, { useState } from 'react'

import { ThemeProvider, createMuiTheme } from '@material-ui/core'
import { Splashscreen } from './lib'
import { useSplashscreen } from './lib/hooks'


const theme = createMuiTheme()


export function App() {
    const [data, setData] = useState(null)
    const { active, done } = useSplashscreen(async () => {
        fetch('https://jsonplaceholder.typicode.com/todos/1')
            .then(response => response.json())
            .then(setData)
    })

    return (
        <ThemeProvider theme={theme}>
            <Splashscreen active={active} />
        </ThemeProvider>
    )
}

