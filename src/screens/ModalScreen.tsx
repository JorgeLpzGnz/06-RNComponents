import React, { useState, useContext } from 'react'
import { Button, Modal, Text, View } from 'react-native'
import { HeaderTitle } from '../components/HeaderTitle'
import { styles } from '../theme/appTheme'
import { ThemeContext } from '../context/themeContext/ThemeContext'
import { TouchableOpacity } from 'react-native-gesture-handler'

export const ModalScreen = () => {

    const [isVisible, setIsVisible] = useState( false )

    const { theme: { colors } } = useContext( ThemeContext )

    return (
        <View style={ styles.globalMargin}>
            <HeaderTitle title="Modal Screen"/>
            <Button
                title="Abrir modal"
                onPress={() => setIsVisible( true ) }
                color={ colors.primary }
            />

            <Modal
                animationType="fade"
                visible={ isVisible }
                transparent
            >
                {/* Background negro */}
                <View style={{
                    flex: 1,
                    // height: 100,
                    // width: 100,
                    backgroundColor: 'rgba(0,0,0,0.3)',
                    justifyContent: 'center',
                    alignItems: 'center',
                }}>
                    {/* Contenido del modal */}
                    <View style={{
                        backgroundColor: 'white',
                        width: 200,
                        height: 200,
                        justifyContent: 'center',
                        alignItems: 'center',
                        shadowOffset: {
                            width: 0,
                            height: 10,
                        },
                        shadowOpacity: 0.25,
                        elevation: 10,
                        borderRadius: 5,
                    }}>
                        <Text style={{ fontSize: 20, fontWeight: 'bold',}}>Modal</Text>
                        <Text style={{ fontSize: 16, fontWeight: '300', marginBottom: 20 }}>Cuerpo del modal</Text>
                        <Button
                            title="Cerrar"
                            onPress={ () => setIsVisible(false)}
                        />
                    </View>
                </View>

            </Modal>
        </View>
    )

}
