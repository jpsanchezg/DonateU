import { StatusBar } from 'expo-status-bar';
import { useNavigation } from '@react-navigation/core'
import React, { useEffect, useState } from 'react'
import { KeyboardAvoidingView, Button, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native'
import LoginScreen from './LoginScreen';
import { auth, signOutUser } from '../../DB/dbconnection'

const ProfileScreen = () => {
    const [user, setUser] = useState();




    return (
        <View style={styles.buttonContainer}>
            <Button
                title="Sign out"
                onPress={signOutUser}
            />
        </View>

    );
}

export default ProfileScreen

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    },
});
