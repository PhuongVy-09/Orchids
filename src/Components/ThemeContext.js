import React from 'react'
import { useEffect, useState } from "react"

const themes = {
    drak: {
        backgrroundColor: 'black',
        color: 'white'
    },
    light: {
        backgrroundColor: 'white',
        color: 'black'
    }
}
const initialState = {
    dark: false,
    theme: themes.light,
    toggle: () => {}
}

const ThemContext = React.createContext(initialState)

function ThemeProvider({ children }) {
    const [dark, setDark] = useState(false)

    useEffect(() => {
        const isDark = localStorage.getItem('dark') === 'true'
        setDark(isDark)

    }, [dark])

    const toggle = () => {
        const isDark = !dark
        localStorage.setItem('dark', JSON.stringify(isDark))
        setDark(isDark)
    }
    const theme = dark ? themes.drak : themes.light
    return (
        <ThemContext.Provider value={{theme, dark, toggle}}>
            {children}
        </ThemContext.Provider>
    )
}
export { ThemeProvider, ThemContext }



