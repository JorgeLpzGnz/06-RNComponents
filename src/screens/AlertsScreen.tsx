import React, { useContext } from 'react'
import { Alert, Button, View, Text } from 'react-native';
import prompt from 'react-native-prompt-android';
import { HeaderTitle } from '../components/HeaderTitle'
import { styles } from '../theme/appTheme'
import { TouchableOpacity } from 'react-native-gesture-handler';
import { ThemeContext } from '../context/themeContext/ThemeContext';

export const AlertsScreen = () => {

    const { theme: { colors } } = useContext( ThemeContext )

    const showAlert = () => {
        Alert.alert('Title', 'My Alert Msg', [
            // botones que iran dentro de la alerta
            {
                text: 'Cancel',
                onPress: () => console.log('Cancel Pressed'),
                style: 'cancel',
            },
            { text: 'OK', onPress: () => console.log('OK Pressed') },
        ],
            {
                /**
                 * Habilitar para que cuando se precione afuera se cierre
                 * la ventana esta funcionalidad solo esta en android
                 */
                cancelable: true,
                onDismiss: () => console.log( 'onDismiss')
            });
    }

    
    const showPrompt = () => {

        // Solo disponible en IOS
        
        // Alert.prompt(
        //     '¿Esta seguro?',
        //     'Esta accion no se puede revertir',
        //     ( value: string ) => console.log('info: ', value ),
        //     'plain-text',
        //     'hola mundo',
        //     'email-address'
        // )

        prompt(
            'Enter password',
            'Enter your password to claim your $1.5B in lottery winnings',
            [
             {text: 'Cancel', onPress: () => console.log('Cancel Pressed'), style: 'cancel'},
             {text: 'OK', onPress: password => console.log('OK Pressed, password: ' + password)},
            ],
            {
                type: 'secure-text',
                cancelable: false,
                defaultValue: 'test',
                placeholder: 'placeholder'
            }
        );

    }

    return (
        <View style={styles.globalMargin}>
            <HeaderTitle title="Alerts" />
            <Button
                title="Mostrar Alerta"
                onPress={showAlert}
                color={ colors.primary}
            />

            <View style={{ height: 10 }}/>

            <Button
                title="Mostrar Prompt"
                onPress={showPrompt}
                color={ colors.primary}
            />
            
        </View>
    )
}
