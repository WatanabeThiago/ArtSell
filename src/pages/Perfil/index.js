import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View, ImageBackground, Button, TouchableOpacity, Image, SafeAreaView, ScrollView, TextInput } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';


import backgroundimg from '../../assets/background.jpg'
import logo from '../../assets/logo.png'

export default function Perfil({ navigation }) {
    const [value, onChangeText] = React.useState('Procure seu artista ou arte favorita!');
    return (
        <>
            <View>

                <ImageBackground source={backgroundimg} style={{ width: "100%", height: "100%" }}>
                    <SafeAreaView>






                        <View style={styles.boxPerfil}>

                            <View style={styles.header}>

                                <Image source={{ uri: 'https://media-exp1.licdn.com/dms/image/C4D03AQGS8d2_Qzq6vA/profile-displayphoto-shrink_200_200/0?e=1599091200&v=beta&t=3_qorLa13Ta-smLcr7oLgp_OTBCDfYEVd7Ont862ZF4' }} style={styles.avatar} />


                                <View style={{ flexDirection: "column", marginHorizontal: 4 }}>

                                    <Text style={styles.name}>Thiago Watanabe</Text>

                                    <Text style={{ color: "#808080" }}>2h</Text>
                                </View>


                            </View>
                            <View>
                                <Text style={styles.arroba}>@watanabethiago</Text>
                                <Text style={styles.description}>Apaixonado por desenvolvimento mobile!</Text>
                            </View>
                        <View>
                            <ScrollView
                            >
                            <Text>teste</Text>
                            <Text>teste</Text>
                            <Text>teste</Text>


                            </ScrollView>
                        </View>
                        </View>









                    </SafeAreaView>

                </ImageBackground>

            </View>
        </>
    );
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center'

    },
    header: {
        flexDirection: "row",
        alignItems: "center"
    },
    background: {
        width: '100%',
        height: '100%',
        flex: 1,
        resizeMode: "cover",
        justifyContent: "center",
        alignItems: 'center'
    },


    text: {
        color: "#FFF",
        fontSize: 32,
        fontWeight: "400"
    },
    boxPerfil: {
        backgroundColor: "#FFF",
        borderRadius: 24,
        padding: 10,
        marginTop: 15





    },
    avatar: {
        width: 100,
        height: 100,
        borderRadius: 360
    },
    postimage: {
        width: 400,
        height: 400,
        borderColor: "#000",
        margin: 3,
        alignItems: "center",
        borderRadius: 24,

    },
    name: {
        fontWeight: "bold",
        marginRight: 3,

        fontSize: 30
    },
    arroba: {
        color: "gray",
        marginTop: 3
    },
    description: {
        marginVertical: 3,

    }
});
