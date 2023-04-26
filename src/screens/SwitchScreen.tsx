import React, { useState, useContext } from 'react'
import { Platform, StyleSheet, Text, View } from 'react-native'
import { Switch } from 'react-native-gesture-handler'
import { HeaderTitle } from '../components/HeaderTitle';
import { CustomSwitch } from '../components/CustomSwitch'
import { ThemeContext } from '../context/themeContext/ThemeContext';

export const SwitchScreen = () => {

    const [state, setState] = useState({
        isActive: true,
        isHungry: false,
        isHappy: true
    })

    const { theme: { colors } } = useContext( ThemeContext )

    const { isActive, isHungry, isHappy } = state

    // keyof typeof dice que el field debe ser una llave del tipo tipo state

    const onChange = ( value: boolean, field: keyof typeof state ) => {
        setState({
            ...state,
            [ field ]: value
        })
    }

    return (
        <View style={{ marginHorizontal: 20, }}>

            <HeaderTitle title="Switches" />

            <View style={ styles.switchRow }>
                <Text style={{ 
                    ...styles.switchText,
                    color: colors.text 
                }}>isActive</Text>
                <CustomSwitch 
                    isOn={ isActive } 
                    onChange={( value ) => onChange( value, 'isActive') } 
                />

            </View>

            <View style={ styles.switchRow }>
                <Text style={{ 
                    ...styles.switchText,
                    color: colors.text 
                }}>isHungry</Text>
                <CustomSwitch 
                    isOn={ isHungry } 
                    onChange={( value ) => onChange( value, 'isHungry') } 
                />

            </View>

            <View style={ styles.switchRow }>
                <Text style={{ 
                    ...styles.switchText,
                    color: colors.text 
                }}>isHappy</Text>
                <CustomSwitch 
                    isOn={ isHappy } 
                    onChange={( value ) => onChange( value, 'isHappy') } 
                />

            </View>


            <Text style={{ ...styles.switchText, color: colors.text }}>
                {JSON.stringify(state, null, 5)}
            </Text>

        </View>
    )

}

const styles = StyleSheet.create({
    switchRow: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginVertical: 10,
    },
    switchText: {
        fontSize: 25
    },
})
