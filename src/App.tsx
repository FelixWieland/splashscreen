import React, { useState, useEffect } from 'react'

import { ThemeProvider, createMuiTheme } from '@material-ui/core'
import { Splashscreen } from './lib'
import { useSplashscreen } from './lib/hooks'


const theme = createMuiTheme()

function delay(t: number, v=null as any) {
    return new Promise(function(resolve) { 
        setTimeout(resolve.bind(null, v), t)
    });
 }


export function App() {
    const [data, setData] = useState(null) as any
    const { active, done } = useSplashscreen(async () => {
        const json = await delay(3000).then(async () => await fetch('https://jsonplaceholder.typicode.com/todos/2').then(response => response.json()))
        setData(json)
    })

    useEffect(() => {
        console.log(active)
    }, [data, active])

    return (
        <ThemeProvider theme={theme}>
            <Splashscreen active={active} />
            {!active && data !== null && (
                <p>{data.title}</p>
            )}
        </ThemeProvider>
    )
}

