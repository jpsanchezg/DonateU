
import { StatusBar } from 'expo-status-bar';
import React from 'react';
import MainContainer from './src/navigation/MainContainer';
import { StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import LoginScreen from './src/navigation/screens/LoginScreen';
import SignUpScreen from './src/navigation/screens/SignUpScreen';
import HomeScreen from './src/navigation/screens/homepage/homepageC';
import ProdductInfoScreen from './src/navigation/screens/productinfoscreen';

const Stack = createNativeStackNavigator();

const homeName = 'Home';
const loginName = 'Login';
const signupName = 'Signup';
const chatName = 'Chat';
const chatsName = 'Chats';
const uploadinfoName = 'Upload';
const profileName = 'You';

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen options={{ headerShown: false }} name="Login" component={LoginScreen} />
        <Stack.Screen options={{ headerShown: false }} name="SignUp" component={SignUpScreen} />
        <Stack.Screen options={{ headerShown: false }} name="Home" component={HomeScreen} />
        <Stack.Screen options={{ headerShown: false }} name="Productinfo" component={ProdductInfoScreen} />
      </Stack.Navigator>

    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});