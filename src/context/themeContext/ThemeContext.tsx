import { createContext, useReducer, useEffect } from 'react'
import { useColorScheme, AppState, Appearance } from 'react-native';
import { ThemeState, lightTheme, themeReducer, darkTheme } from './themeReducer';

interface ThemeContextProps {
    theme: ThemeState
    setDarkTheme: () => void
    setLightTheme: () => void
}



export const ThemeContext = createContext( {} as ThemeContextProps )


export const ThemeProvider = ({ children}: any) => {

    const colorScheme = useColorScheme()

    // si el useColorScheme no se dispara automaticamente usar este codigo
    // useEffect(() => {
    //     // añadir event listener a las interacciones con la App
    //     AppState.addEventListener('change', ( status ) => {
    //         if ( status === 'active' ) {
    //             (Appearance.getColorScheme()) === 'light'
    //                 ? setLightTheme()
    //                 : setDarkTheme()
    //         }
    //     })
    // }, [])
    

    const [
        theme,
        dispatch
    ] = useReducer( themeReducer, colorScheme === 'dark' ? darkTheme : lightTheme )

    const setDarkTheme = () => {
        dispatch({ type: 'set_dark_theme'})
    }

    const setLightTheme = () => {
        dispatch({ type: 'set_light_theme'})
    }

    return (
        <ThemeContext.Provider value={{
            theme,
            setDarkTheme,
            setLightTheme,
        }}>
            { children }
        </ThemeContext.Provider>
    )
}
