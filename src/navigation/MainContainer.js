import * as React from 'react';
import { View, Text } from 'react-native';

import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Ionicons from 'react-native-vector-icons/Ionicons';

// screens
import HomeScreen from './screens/homepage/component/HomeScreen';
import LoginScreen from './screens/LoginScreen';
import SignupScreen from './screens/SignUpScreen';
import ChatScreen from './screens/chatScreen';
import ChatsScreen from './screens/chatsScreen';
import UploadInfoScreen from './screens/UploadInfoScreen';
import ProfileScreen from './screens/profileScreen';

// screens names

const homeName = 'Home';
const loginName = 'Login';
const signupName = 'Signup';
const chatName = 'Chat';
const chatsName = 'Chats';
const uploadinfoName = 'Upload';
const profileName = 'You';

const Tab = createBottomTabNavigator();

export default function MainContainer() {
    return (
        <Tab.Navigator
            initialRouteName={homeName}
            screenOptions={({ route }) => ({
                tabBarIcon: ({ focused, color, size }) => {
                    let iconName;
                    let rn = route.name;

                    if (rn === homeName) {
                        iconName = focused ? 'home' : 'home-outline'
                    } else if (rn === chatName) {
                        iconName = focused ? 'chatbubbles' : 'ios-chatbubbles-outline'
                    }
                    else if (rn === uploadinfoName) {
                        iconName = focused ? 'add-circle' : 'add-circle-outline'
                    } else if (rn === profileName) {
                        iconName = focused ? 'happy' : 'happy-outline'
                    }

                    return <Ionicons name={iconName} size={size} color={color} />

                }
            })}>

            <Tab.Screen options={{ headerShown: false }} name={homeName} component={HomeScreen} />
            <Tab.Screen options={{ headerShown: false }} name={chatName} component={ChatScreen} />
            <Tab.Screen options={{ headerShown: false }} name={uploadinfoName} component={UploadInfoScreen} />
            <Tab.Screen options={{ headerShown: false }} name={profileName} component={ProfileScreen} />

        </Tab.Navigator>

    );
}