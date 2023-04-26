import React, { useState, useContext } from 'react'
import { RefreshControl, SafeAreaView, StyleSheet, View } from 'react-native'
import { HeaderTitle } from '../components/HeaderTitle'
import { styles } from '../theme/appTheme'
import { ScrollView } from 'react-native-gesture-handler'
import { useSafeAreaInsets } from 'react-native-safe-area-context'
import { ThemeContext } from '../context/themeContext/ThemeContext'

export const PullToRefresh = () => {

    const { top } = useSafeAreaInsets()

    const [refreshing, setRefreshing] = useState(false)

    const [data, setData] = useState<string>()

    const { theme: { colors, dividerColor } } = useContext( ThemeContext )

    const onRefresh = () => {
        setRefreshing(true)

        setTimeout(() => {
            console.log('Terminamos')
            setRefreshing(false)
            setData('hola mundo')
        }, 1500);
    }

    return (
        <ScrollView
            style={{
                ...StyleSheet.absoluteFillObject,
                marginTop: refreshing ? top : 0,
            }}
            refreshControl={
                <RefreshControl
                    refreshing={refreshing}
                    onRefresh={onRefresh}
                    progressViewOffset={10}
                    progressBackgroundColor={ dividerColor }
                    // is cambiando el color ( Solo android )
                    colors={[ colors.background ]}
                    // Solo IOS
                    style={{ backgroundColor: '#5856d6'}}
                    // Solo IOS
                    tintColor={ colors.text }
                    // title="white"
                />
            }
        >
            <View style={styles.globalMargin}>
                <HeaderTitle title="Pull To Refresh" />
                {
                    data && <HeaderTitle title={ data } />
                }
            </View>
        </ScrollView>
    )
}
