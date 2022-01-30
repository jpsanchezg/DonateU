import React, { useEffect, useState, Component } from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { useNavigation } from '@react-navigation/native';
import {
    Image,
    StyleSheet,
    Text,
    TextInput,
    TouchableOpacity,
    View,
    ActivityIndicator,
    Button,
    Share,
    StatusBar,
    LogBox,
} from 'react-native';
import SelectDropdown from 'react-native-select-dropdown';
import { auth, db, donateProductsxUser, storage } from '../../DB/dbconnection';
import * as ImagePicker from 'expo-image-picker';

//screens
import LoginScreen from './LoginScreen';
LogBox.ignoreLogs([`Setting a timer for a long period`]);
const ProfileScreen = () => {
    const [user, loading, error] = useAuthState(auth);
    const [title, setTitle] = useState("");
    const [photo, setPhoto] = useState("");
    const [location, setLocation] = useState("");
    const [category, setCategory] = useState("");
    const [description, setDescription] = useState("");
    const [imagea, setImagea] = useState();
    const [uid, setUid] = useState("");
    const [currentDate, setCurrentDate] = useState("");
    const navigation = useNavigation();
    const categories = ["food", "clothing", "furniture", "tools"]

    const uploadInfo = () => {
        if (!title || !location || !category || !description) {
            recuerderellenartodo();
        } else {
            donateProductsxUser(photo, title, location, category, description, uid);

        }
    };
    useEffect(() => {
        if (loading) return;
        if (!user) {
            navigation.push('Login')
        }

        fetchUserdata();
    }, [user, loading]);

    const fetchUserdata = async () => {
        const query = await db
            .collection("users")
            .where("uid", "==", user?.uid)
            .get();
        const data = await query.docs[0].data();
        setUid(data.uid);
    }



    const pickImage = async () => {
        let result = await ImagePicker.launchImageLibraryAsync({
            mediaTypes: ImagePicker.MediaTypeOptions.All,
            allowsEditing: true,
            aspect: [4, 3],
            quality: 1,
        });
        const date = new Date().getDate(); //Current Date
        const month = new Date().getMonth() + 1; //Current Month
        const year = new Date().getFullYear(); //Current Year
        const hours = new Date().getHours(); //Current Hours
        const min = new Date().getMinutes(); //Current Minutes
        const sec = new Date().getSeconds(); //Current Seconds
        setCurrentDate(
            date + ':' + month + ':' + year
            + ' ' + hours + ':' + min + ':' + sec
        );
        console.log(currentDate);
        console.log(result)
        setImagea(result.uri);
        async function pathToImageFile(data) {

            try {
                const response = await fetch(data);
                console.log(data.uri)
                const blob = await response.blob();
                const uploadTask = storage.ref(`imagtes/${currentDate}`).put(blob);
                uploadTask.on(
                    "state_changed",
                    snapshot => {
                        const progress = Math.round(
                            (snapshot.bytesTransferred / snapshot.totalBytes) * 100
                        );
                        setProgress(progressBar);
                    },
                    error => {
                        console.log(error);
                    },
                    () => {
                        storage
                            .ref("images")
                            .child(image.name)
                            .getDownloadURL()
                            .then(photo => {
                                setPhoto(photo);
                            });
                    }
                );
            } catch (error) {
                console.log(error);
                errorPhoto();
            }
        }
        // later
        pathToImageFile(result.uri);
    }


    return (
        <View style={styles.container}>
            <TouchableOpacity
                onPress={pickImage}
            >
                <View >
                    <Image source={{ uri: photo }} style={{ width: 200, height: 200 }} />
                </View>
            </TouchableOpacity>
            <TouchableOpacity
                onPress={pickImage}
                style={styles.button}
            >
                <Text style={styles.buttonText}>Upload Photo</Text>
            </TouchableOpacity>
            <Text style={styles.headertext}>Your Donation</Text>

            <View style={styles.inputContainer}>



                <TextInput
                    placeholder="Title"
                    value={title}
                    onChangeText={text => setTitle(text)}
                    style={styles.input}
                />
                <TextInput
                    placeholder="Location"
                    value={location}
                    onChangeText={text => setLocation(text)}
                    style={styles.input}
                />
                <SelectDropdown
                    data={categories}
                    onSelect={(selectedItem, index) => {
                        console.log(selectedItem, index)
                        setCategory(selectedItem)
                    }}
                    buttonTextAfterSelection={(selectedItem, index) => {
                        // text represented after item is selected
                        // if data array is an array of objects then return selectedItem.property to render after item is selected

                        return selectedItem
                    }}
                    rowTextForSelection={(item, index) => {
                        // text represented for each item in dropdown
                        // if data array is an array of objects then return item.property to represent item in dropdown
                        return item
                    }}
                />
                <TextInput
                    placeholder="Description"
                    value={description}
                    onChangeText={text => setDescription(text)}
                    style={styles.input}
                />
                <View style={styles.buttonContainer}>
                    <TouchableOpacity
                        onPress={uploadInfo}
                        style={styles.button}
                    >
                        <Text style={styles.buttonText}>Upload Info</Text>
                    </TouchableOpacity>
                </View>
            </View>
        </View>
    );
}

export default ProfileScreen

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
        width: 250,
        height: 250,
        padding: 40,
    }, headertext: {
        fontSize: 20,
        fontWeight: 'bold',
    }
});
