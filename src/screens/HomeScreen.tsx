import React from 'react'
import { Text, View } from 'react-native'
import { FlatList } from 'react-native-gesture-handler'
import { styles } from '../theme/appTheme'
import { useSafeAreaInsets } from 'react-native-safe-area-context'
import { FlatListMenuItem } from '../components/FlatListMenuItem'
import { menuItems } from '../data/menuItems'
import { HeaderTitle } from '../components/HeaderTitle'
import { ItemSeparator } from '../components/ItemSeparator'

export const HomeScreen = () => {
    
    return (
        <View style={{ flex: 1, ...styles.globalMargin }}>

            <FlatList
                // arreglo con los elementos a mostrar
                data={menuItems}
                // funcion a la que tocar devolverle un elemento JSX
                // Este elemto en el que va a renderizar la info de la data
                renderItem={({ item }) => <FlatListMenuItem menuItem={ item }/>}
                // llave unica para cada elemnto del flatList ( tipo String )
                keyExtractor={(item) => item.name}
                ListHeaderComponent={ () =>  <HeaderTitle title="Opciones de Menú"/> }
                ItemSeparatorComponent={ () => <ItemSeparator/> }
            />
            
        </View>
    )

}
