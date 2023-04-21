import React, { useRef } from 'react'
import { Text, StyleSheet, View, Animated } from 'react-native'

export const Animation101Screen = () => {

    const opacity = useRef( new Animated.Value(0.4) ).current


    return (
      <View style={ styles.container }>
        <Animated.View style={{ ...styles.purpleBox, opacity }}/>
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