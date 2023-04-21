import React, { useRef } from 'react'
import { Text, StyleSheet, View, Animated, Button, Easing } from 'react-native'
import { useAnimation } from '../Hooks/useAnimation'

export const Animation101Screen = () => {

    const { opacity, position, fadeIn, fadeOut, startMovingPosition } = useAnimation()

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
            />
            <Button 
                title="FadeOut"
                onPress={ fadeOut }
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
    }
})
