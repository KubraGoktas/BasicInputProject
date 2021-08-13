import React from 'react'
import { View, Text, SafeAreaView, TextInput, StyleSheet, TouchableOpacity } from 'react-native'
import { CommonActions } from '@react-navigation/native'


const Start = ({ navigation }) => {
    const [text, onChangeText] = React.useState("");


    const onPress = () => {
        navigation.navigate({
            name: 'MyTabs',
            params: { name: text }
          });
    }



    return (
        <SafeAreaView>
            <View style={styles.form}>
                <Text style={styles.text}>Adınız?</Text>
                <TextInput
                    style={styles.input}
                    onChangeText={onChangeText}
                />
            </View>
            <Text> Hoşgeldin {text}</Text>
            <TouchableOpacity
                style={styles.button}
                onPress={()=>onPress()}
            >
                <Text>Anasayfaya Git</Text>
            </TouchableOpacity>
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    input: {
        height: 40,
        width: 200,
        margin: 12,
        borderWidth: 1,
        padding: 10,
    },
    form: {
        flexDirection: 'row'
    },
    text: {
        marginTop: 25
    },
    button: {
        alignItems: "center",
        backgroundColor: "#DDDDDD",
        padding: 10
    },

});

export default Start
