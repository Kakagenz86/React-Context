import { createContext, useState } from "react";

export const ThemeContext = createContext()

export const ThemeProvider = ({children}) => {
    const [isLightTheme, setIsLightTheme] = useState(true)

    const handleTheme = () => {
        setIsLightTheme(!isLightTheme)
    }

    return (
        <ThemeContext.Provider value={{isLightTheme, handleTheme}}>
            {children}
        </ThemeContext.Provider>
    )
}