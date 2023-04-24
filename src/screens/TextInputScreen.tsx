import React, { useState } from 'react'
import { Keyboard, KeyboardAvoidingView, Platform, ScrollView, StyleSheet, Text, TextInput, TouchableWithoutFeedback, View } from 'react-native'
import { HeaderTitle } from '../components/HeaderTitle'
import { styles } from '../theme/appTheme'
import { CustomSwitch } from '../components/CustomSwitch'
import { useForm } from '../Hooks/useForm'

export const TextInputScreen = () => {

    const { form, isSubscribed, onChange, } = useForm({
        name: '',
        email: '',
        phone: '',
        isSubscribed: true,
    })

    return (
        <KeyboardAvoidingView
            // esta configuracion de behavior es necesaria
            behavior={ Platform.OS === 'ios' ? 'padding' : 'height' }
        >
            <ScrollView>

                <TouchableWithoutFeedback
                    onPress={ Keyboard.dismiss }
                >

                    <View style={ styles.globalMargin }>
                        <HeaderTitle title="TextInputs"/>

                        <TextInput
                            style={ stylesScreen.inputStyle }
                            placeholder="Ingrese su nombre"
                            autoCorrect={ false }
                            autoCapitalize="words"
                            onChangeText={( value ) => onChange( value, 'name' )}
                        />
                        <TextInput
                            style={ stylesScreen.inputStyle }
                            placeholder="Ingrese su email"
                            autoCorrect={ false }
                            autoCapitalize="none"
                            onChangeText={( value ) => onChange( value, 'email' )}
                            keyboardType="email-address"
                            // Disponible en IOS
                            keyboardAppearance="dark"
                        />

                        <View style={{ flexDirection: 'row',}}>
                            <Text style={{ flex: 1,}}>Suscribirse</Text>
                            <CustomSwitch 
                                isOn={ isSubscribed }
                                onChange={ ( value ) => onChange( value, 'isSubscribed') }
                            />
                        </View>

                        <HeaderTitle title={ JSON.stringify( form, null, 3 )}/>
                        <HeaderTitle title={ JSON.stringify( form, null, 3 )}/>

                        <TextInput
                            style={ stylesScreen.inputStyle }
                            placeholder="Ingrese su telefono"
                            onChangeText={( value ) => onChange( value, 'phone' )}
                            keyboardType="phone-pad"

                        />

                    </View>

                </TouchableWithoutFeedback>


                <View style={{ height: 100 }}/>
            </ScrollView>

        </KeyboardAvoidingView>
    )
}


const stylesScreen = StyleSheet.create({
    inputStyle: {
        borderWidth: 1,
        borderColor: 'rgba( 0, 0, 0, 0.3 )',
        height: 50,
        paddingHorizontal: 10,
        borderRadius: 10,
        marginVertical: 10,
    }
});
