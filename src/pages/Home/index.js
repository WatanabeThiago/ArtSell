import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View, ImageBackground, Button, TouchableOpacity, Image } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';


import backgroundimg from '../../assets/background.jpg'
import logo from '../../assets/logo.png'

export default function Home({ navigation }) {
    return (
        <>
            <View style={styles.container}>
                <StatusBar style="light" />
                <ImageBackground source={backgroundimg} style={styles.background} >
                    <TouchableOpacity
                    onPress= {() => navigation.navigate('FeedScreen')}
                    >
                        <Image source={logo} style={{
                            width: 346,
                            height: 107
                        }}
                        />
                    </TouchableOpacity>
                </ImageBackground>

                <View style={styles.tab}>
                    <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('LoginScreen')}>
                        <Text style={styles.text}>Login</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('RegisterScreen')}>
                        <Text style={styles.text}>Register</Text>
                    </TouchableOpacity>
                </View>
            </View>

        </>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
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
        backgroundColor: "#000",
        height: "70%",
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
        fontSize: 32,
        fontWeight: "400"
    }
});
