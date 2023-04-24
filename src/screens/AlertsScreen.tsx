import React from 'react'
import { Alert, Button, View } from 'react-native'
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

    return (
        <View style={styles.globalMargin}>
            <HeaderTitle title="Alerts" />
            <Button
                title="Mostrar Alerta"
                onPress={showAlert}
            />
        </View>
    )
}
