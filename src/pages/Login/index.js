import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View, ImageBackground, Button, TouchableOpacity, Image, TextInput, KeyboardAvoidingView } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';


import backgroundimg from '../../assets/background.jpg'
import logo from '../../assets/logo.png'

export default function Login() {
    return (
        <>

            <View style={styles.container}>
                <StatusBar style="light" />
                <ImageBackground source={backgroundimg} style={styles.background} >

                    <KeyboardAvoidingView
                        behavior={Platform.OS == "ios" ? "padding" : "height"}
                        style={styles.viewKeyboard}
                    >
                        <Image source={logo} style={{
                            width: 346,
                            height: 107,
                            marginBottom: 16
                        }}
                        />

                        <TextInput style={styles.input}
                            placeholder="example@gmail.com"
                            returnKeyType="done"
                            keyboardType="email-address"
                            
                            >

                        </TextInput>

                        <TextInput style={styles.input}
                            placeholder="************"
                            returnKeyType="join">
                        </TextInput>
                        <TouchableOpacity style={styles.button}>
                            <Text>Login</Text>
                        </TouchableOpacity>
                        <TouchableOpacity >
                            <Text style={styles.text}>Esqueci minha senha</Text>
                        </TouchableOpacity>
                    </KeyboardAvoidingView>
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
        alignItems: 'center',
        marginTop: 30
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
        width: 100,
        borderRadius: 10,

        alignItems: 'center',
        justifyContent: 'center',
        margin: 8,
        marginTop: 16


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

        fontWeight: "400",


    },
    input: {
        backgroundColor: "#FFF",
        width: 300,
        height: 40,
        borderRadius: 10,
        margin: 8,
        marginStart: 8,
        padding: 10
        
    },
    viewInputs: {
        flex: 1,
        flexDirection: "column",
        justifyContent: "center"

    },
    viewKeyboard:{
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center'
    }
});
