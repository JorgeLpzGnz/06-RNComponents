import React from 'react'
import { Text, View } from 'react-native'
import { FlatList } from 'react-native-gesture-handler'

interface MenuItem {
    name: string
    icon: string
    components: string
}

const menuItems = [
    {
        name: 'Animation 101',
        icon: 'cube-outline',
        components: 'Animation101Screen'
    }
]

export const HomeScreen = () => {

    const renderMenuItem = ( menuItem: MenuItem) => {
        return (
            <View>
                <Text>{ menuItem.name } - { menuItem.icon }</Text>
            </View>
        )
    }
    return (
        <View style={{ flex: 1 }}>
            <FlatList
                // arreglo con los elementos a mostrar
                data={menuItems}
                // funcion a la que tocar devolverle un elemento JSX
                // Este elemto en el que va a renderizar la info de la data
                renderItem={ ({item}) => renderMenuItem( item ) }
                // llave unica para cada elemnto del flatList ( tipo String )
                keyExtractor={ (item) => item.name }
            />
        </View>
    )
}
