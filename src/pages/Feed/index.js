import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View, ImageBackground, Button, TouchableOpacity, Image, SafeAreaView } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';




import backgroundimg from '../../assets/background.jpg'
import logo from '../../assets/logo.png'
import { SafeAreaConsumer } from 'react-native-safe-area-context';
import { ScrollView, TextInput } from 'react-native-gesture-handler';


export default function Feed({ navigation }) {
    const [value, onChangeText] = React.useState('Procure seu artista ou arte favorita!');


    return (
        <>
            <View>

                <ImageBackground source={backgroundimg} style={{ width: "100%", height: "100%" }}>
                    <SafeAreaView style={{}}>
                        <View style={{alignItems: 'center'}}>
                    <Image source={logo} style={{
                            width: 173,
                            height: 52,
                            margin: 5
                        }}
                        />
                        </View>
                        <TextInput
                            style={{ height: 40, width: "99%", borderColor: 'gray', borderBottomWidth: 2, backgroundColor: "#FFF", padding: 10, borderRadius: 24 }}
                            onChangeText={text => onChangeText(text)}
                            value={value}
                        />




                        <ScrollView>
                            <View style={styles.boxPost}>
                                <TouchableOpacity
                                    onPress={() => navigation.navigate('PerfilScreen')}
                                >
                                    <View style={styles.header}>

                                        <Image source={{ uri: 'https://media-exp1.licdn.com/dms/image/C4D03AQGS8d2_Qzq6vA/profile-displayphoto-shrink_200_200/0?e=1599091200&v=beta&t=3_qorLa13Ta-smLcr7oLgp_OTBCDfYEVd7Ont862ZF4' }} style={styles.avatar} />


                                        <View style={{ flexDirection: "column", marginHorizontal: 4 }}>
                                            <View style={{ flexDirection: "row", alignContent: 'space-between' }}>
                                                <Text style={styles.name}>Thiago Watanabe</Text>

                                                <TouchableOpacity>
                                                    <Text>seguir</Text>
                                                </TouchableOpacity>
                                            </View>

                                            <Text style={{ color: "#808080" }}>2h</Text>
                                        </View>


                                    </View>
                                </TouchableOpacity>
                                <View>
                                    <Text style={styles.description}>Foto autoral editada no LightRoom!</Text>
                                </View>
                                <View style={{ alignItems: "center" }}>
                                    <Image source={{ uri: 'https://i0.wp.com/meninaarteirabyeli.com.br/wp-content/uploads/2018/07/Foto-Perfil-1080.jpg' }} style={styles.postimage} />




                                </View>
                                <View style={styles.comment}>
                                    <Text>Like</Text>
                                    <Text>Comentarios</Text>
                                    <Text>Compartilhar</Text>
                                </View>
                            </View>


                            <></>
                            <View style={styles.boxPost}>
                                <TouchableOpacity>
                                    <View style={styles.header}>

                                        <Image source={{ uri: 'https://media-exp1.licdn.com/dms/image/C4D03AQGS8d2_Qzq6vA/profile-displayphoto-shrink_200_200/0?e=1599091200&v=beta&t=3_qorLa13Ta-smLcr7oLgp_OTBCDfYEVd7Ont862ZF4' }} style={styles.avatar} />


                                        <View style={{ flexDirection: "column", marginHorizontal: 4 }}>

                                            <Text style={styles.name}>Thiago Watanabe</Text>

                                            <Text style={{ color: "#808080" }}>2h</Text>
                                        </View>


                                    </View>
                                </TouchableOpacity>
                                <View>
                                    <Text style={styles.description}>Foto autoral editada no LightRoom!</Text>
                                </View>
                                <View style={{ alignItems: "center" }}>
                                    <ScrollView
                                        horizontal={true}
                                    >
                                        <Image source={{ uri: 'https://i0.wp.com/meninaarteirabyeli.com.br/wp-content/uploads/2018/07/Foto-Perfil-1080.jpg' }} style={styles.postimage} />
                                        <Text>teste</Text>
                                    </ScrollView>


                                </View>
                                <View style={styles.comment}>
                                    <Text>Like</Text>
                                    <Text>Comentarios</Text>
                                    <Text>Compartilhar</Text>
                                </View>
                            </View>





                        </ScrollView>

                    </SafeAreaView>

                </ImageBackground>

            </View>
        </>
    )
}


const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#D3D3D3',
        alignItems: 'center',
        justifyContent: 'center',
    },
    header: {
        flexDirection: "row",
        alignItems: "center",
        backgroundColor: "#F1F1",
        alignContent: 'space-between'
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
    boxPost: {
        backgroundColor: "#FFF",
        borderRadius: 24,
        padding: 10,
        marginTop: 15





    },
    logo:{
        width: 100,
        height: 100
    },
    avatar: {
        width: 32,
        height: 32,
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

        fontSize: 20
    },
    description: {
        marginVertical: 5,

    }
});
