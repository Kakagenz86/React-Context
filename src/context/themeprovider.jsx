import { createContext, useState } from "react";

export const ThemeContext = createContext()

export const ThemeProvider = ({children}) => {
    const [isLightTheme, setIsLightTheme] = useState(true)

    return (
        <ThemeContext.Provider value={{isLightTheme}}>
            {children}
        </ThemeContext.Provider>
    )
}