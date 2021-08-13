import React from 'react'
import { View, Text } from 'react-native'

const Home = ({ route }) => {
    const { name } = route.params
    return (
        <View>
            <Text>Hoş geldin : {name}</Text>
        </View>
    )
}

export default Home
