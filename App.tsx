import 'react-native-gesture-handler';
import React from 'react'
import { DarkTheme, DefaultTheme, NavigationContainer, Theme } from '@react-navigation/native';
import { Navigator } from './src/navigator/Navigator';

const customTheme: Theme = {
    dark: true,
    colors: {
        ...DarkTheme.colors
        // primary: "",
        // background: "",
        // card: "",
        // text: "",
        // border: "",
        // notification: "",
    }
}

const App = () => {
    return (
        <NavigationContainer
            theme={ customTheme }
        >
            <Navigator />
        </NavigationContainer>
    );
}

export default App
