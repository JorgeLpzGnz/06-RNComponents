import React from 'react'
import { StyleSheet, Text } from 'react-native';
import { View } from 'react-native';
import { MenuItem } from '../interfaces/appInterfaces';
import Icon from 'react-native-vector-icons/Ionicons';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { useNavigation } from '@react-navigation/native';

interface Props {
    menuItem: MenuItem
}

export const FlatListMenuItem = ({ menuItem }: Props) => {

    const navigation = useNavigation()
    return (
        <TouchableOpacity 
            activeOpacity={ 0.8 }
            onPress={() => navigation.navigate( menuItem.component as never )}
        >
            <View style={styles.container}>
                <Icon
                    name={menuItem.icon}
                    color="grey"
                    size={23}
                />
                <Text style={styles.itemText}>
                    {menuItem.name}
                </Text>

                <Icon
                    name="chevron-forward-outline"
                    color="grey"
                    size={23}
                    style={{ position: 'absolute', right: 0 }}
                />
            </View>
        </TouchableOpacity>
    )
}


const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
    },
    itemText: {
        marginLeft: 10,
        fontSize: 19,
    }
});