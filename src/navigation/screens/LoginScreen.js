import { useNavigation } from '@react-navigation/native'
import React, { useEffect, useState } from 'react'

import { KeyboardAvoidingView, StyleSheet, Text, TextInput, TouchableOpacity, View, Image } from 'react-native'
import { auth } from '../../DB/dbconnection'
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';



const LoginScreen = () => {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    const navigation = useNavigation();





    useEffect(() => {
        const unsubscribe = auth.onAuthStateChanged(user => {
            if (user) {
                navigation.replace("Home")
            }
        })

        return unsubscribe
    }, [])


    const handleLogin = () => {
        auth
            .signInWithEmailAndPassword(email, password)
            .then(userCredentials => {
                const user = userCredentials.user;
                console.log('Logged in with:', user.email);
            })
            .catch(error => alert(error.message))
    }

    return (
        <KeyboardAwareScrollView

            behavior="padding" enabled
        >
            <View style={styles.container}>
                <Image
                    style={styles.logoDonateu}
                    source={require('../../assets/logo-donateU.png')}
                />
                <View style={styles.inputContainer}>
                    <TextInput
                        placeholder="Email"
                        value={email}
                        onChangeText={text => setEmail(text)}
                        style={styles.input}
                    />
                    <TextInput
                        placeholder="Password"
                        value={password}
                        onChangeText={text => setPassword(text)}
                        style={styles.input}
                        secureTextEntry
                    />
                </View>

                <View style={styles.buttonContainer}>
                    <TouchableOpacity
                        onPress={handleLogin}
                        style={styles.button}
                    >
                        <Text style={styles.buttonText}>Login</Text>
                    </TouchableOpacity>
                    <TouchableOpacity
                        onPress={() => navigation.navigate('SignUp')}
                        style={[styles.button, styles.buttonOutline]}
                    >
                        <Text style={styles.buttonOutlineText}>Register</Text>
                    </TouchableOpacity>
                </View>
                <View style={styles.login_social}>
                    <View style={styles.login_social_separator}>
                        <View style={styles.login_social_separator_line} />
                        <Text style={styles.login_social_separator_text}>{'or'}</Text>
                        <View style={styles.login_social_separator_line} />
                    </View>
                    <View style={styles.login_social_buttons}>
                        <TouchableOpacity>
                            <View
                                style={[
                                    styles.login_social_button,
                                    styles.login_social_facebook,
                                ]}>
                                <Image
                                    style={styles.login_social_icon}
                                    source={require('../../assets/facebook-logo.png')}
                                />
                            </View>
                        </TouchableOpacity>
                        <TouchableOpacity>
                            <View style={styles.login_social_button}>
                                <Image
                                    style={styles.login_social_icon}
                                    source={require('../../assets/Google-Logo.png')}
                                />
                            </View>
                        </TouchableOpacity>
                        <TouchableOpacity>
                            <View style={styles.login_social_button}>
                                <Image
                                    style={styles.login_social_icon}
                                    source={require('../../assets/twitter-logo.png')}
                                />
                            </View>
                        </TouchableOpacity>
                    </View>
                </View>
            </View>
        </KeyboardAwareScrollView>
    )
}

export default LoginScreen

const styles = StyleSheet.create({
    container: {
        marginTop: 110,
        alignItems: 'center',
        flex: 1,
        justifyContent: 'center',
    },
    inputContainer: {
        width: '70%'
    },
    input: {
        backgroundColor: 'white',
        paddingHorizontal: 15,
        paddingVertical: 10,
        borderRadius: 10,
        marginTop: 5,
    },
    buttonContainer: {
        width: '60%',
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 40,
    },
    button: {
        backgroundColor: '#0782F9',
        width: '100%',
        padding: 15,
        borderRadius: 10,
        alignItems: 'center',
    },
    buttonOutline: {
        backgroundColor: 'white',
        marginTop: 5,
        borderColor: '#0782F9',
        borderWidth: 2,
    },
    buttonText: {
        color: 'white',
        fontWeight: '700',
        fontSize: 16,
    },
    buttonOutlineText: {
        color: '#0782F9',
        fontWeight: '700',
        fontSize: 16,
    },
    login_social: {
        width: '100%',
        maxWidth: 280,
        marginTop: 20,
    },
    login_social_separator: {
        flexDirection: 'row',
        alignItems: 'center',
    },
    login_social_separator_line: {
        flex: 1,
        width: '100%',
        height: 1,
        backgroundColor: '#E0E0E0',
    },
    login_social_separator_text: {
        marginHorizontal: 10,
        color: '#808080',
        fontSize: 16,
    },
    login_social_buttons: {
        flexDirection: 'row',
        justifyContent: 'center',
        marginTop: 20,
    },
    login_social_button: {
        alignItems: 'center',
        justifyContent: 'center',
        width: 60,
        height: 60,
        marginHorizontal: 12,
        borderWidth: 1,
        borderColor: '#E7E7E7',
        borderRadius: 60,
    },
    login_social_icon: {
        width: 38,
        height: 38,
        resizeMode: 'contain',
    },
    login_social_facebook: {
        backgroundColor: '#4267B2',
        borderColor: '#4267B2',
    },
    login_footer_text: {
        flexDirection: 'row',
        alignItems: 'center',
        color: '#808080',
        fontSize: 15,
    },
    login_footer_link: {
        color: '#208AEC',
        fontSize: 15,
        fontWeight: 'bold',
    },
    logoDonateu: {
        width: 150,
        height: 150,
        padding: 24,
    }
})