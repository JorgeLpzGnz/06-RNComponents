import React, { useRef, useContext } from 'react'
import { Text, StyleSheet, View, Animated, Button, Easing } from 'react-native'
import { useAnimation } from '../Hooks/useAnimation'
import { ThemeContext } from '../context/themeContext/ThemeContext';
import { TouchableOpacity } from 'react-native-gesture-handler';

export const Animation101Screen = () => {

    const { opacity, position, fadeIn, fadeOut, startMovingPosition } = useAnimation()

    const { theme: { colors } } = useContext( ThemeContext )

    return (
        <View style={styles.container}>
            <Animated.View 
                style={{ 
                    ...styles.purpleBox, 
                    opacity, 
                    transform: [{
                        translateX: position
                    } ]
                }} 
                />
            <Button 
                title="FadeIn"
                onPress={ () => {
                    fadeIn()
                    startMovingPosition(100)
                } }
                color={colors.primary}
            />

            <Button
                title="FadeOut"
                onPress={ fadeOut }
                color={ colors.primary }
            />
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    purpleBox: {
        backgroundColor: '#5856d6',
        width: 150,
        height: 150,
    },
    button: {
        width: 150,
        height: 50,
        marginVertical: 10,
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 10,
    }
})
