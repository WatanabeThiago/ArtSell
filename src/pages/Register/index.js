import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import { StyleSheet, Text, View, ImageBackground, Button, TouchableOpacity, Image, TextInput, Picker } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';


import backgroundimg from '../../assets/background.jpg'
import logo from '../../assets/logo.png'
import { FlatList } from 'react-native-gesture-handler';

export default function Register() {
    const [selectedValue, setSelectedValue] = useState("java");
    return (
        <>
            <View style={styles.container}>
                <StatusBar style="light" />
                <ImageBackground source={backgroundimg} style={styles.background} >
                    
                    <Image source={logo} style={{
                        width: 346,
                        height: 107,
                        marginBottom: 60
                    }}
                    />
                    <Text style={styles.text}>Email *</Text>
                    <TextInput style={styles.input}
                        placeholder="example@gmail.com"
                        returnKeyType="next"
                        keyboardType="email-address">
                    </TextInput>

                    <Text style={styles.text}>Password *</Text>
                    <TextInput style={styles.input}
                        placeholder="************"
                        returnKeyType="next">
                    </TextInput>

                    <Text style={styles.text}>CPF *</Text>
                    <TextInput style={styles.input}
                        placeholder="071.123.456-78"
                        returnKeyType="next">
                    </TextInput>

                    <Text style={styles.text}>Nome *</Text>
                    <TextInput style={styles.input}
                        placeholder="071.123.456-78"
                        returnKeyType="next">
                    </TextInput>

            
                    <TouchableOpacity style={styles.button}>
                        <Text>Register</Text>
                    </TouchableOpacity>
                </ImageBackground>
            </View>

        </>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        flexDirection: 'column',
        justifyContent: 'center',
    },
    background: {
        width: '100%',
        height: '100%',
        flex: 1,
        resizeMode: "cover",
        justifyContent: "center",
        alignItems: 'center'
    },
    button: {
        backgroundColor: "#FFF",
        height: 40,
        width: "41%",
        borderRadius: 10,

        alignItems: 'center',
        justifyContent: 'center',
        margin: 15

    },
    tab: {

        width: "100%",
        height: "15%",
        flexDirection: "row",
        justifyContent: 'center',
        backgroundColor: "#FFFFFF",

    },
    text: {
        color: "#FFF",
        fontSize: 20,
        fontWeight: "400",
        margin: 10
    },
    input: {
        backgroundColor: "#FFF",
        width: "80%",
        height: 40,
        borderRadius: 10
    },
    viewInputs: {
        flex: 1,
        flexDirection: "column",
        justifyContent: "center"

    }
});
