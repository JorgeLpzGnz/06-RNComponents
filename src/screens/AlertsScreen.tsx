import React from 'react'
import { Alert, Button, View } from 'react-native'
import prompt from 'react-native-prompt-android';
import { HeaderTitle } from '../components/HeaderTitle'
import { styles } from '../theme/appTheme'

export const AlertsScreen = () => {

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
            />

            <View style={{ height: 10 }}/>

            <Button
                title="Mostrar Prompt"
                onPress={showPrompt}
            />
        </View>
    )
}
