import { StatusBar } from 'expo-status-bar';
import { useNavigation } from '@react-navigation/core'
import { useState } from 'react';
import { StyleSheet, Text, TextInput, View, FlatList, Image, Button, TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';

const HomeScreen = () => {

    const [items, setItem] = useState([
        { title: 'white shirt', location: 'abc', key: '1' },
        { title: 'brown table', location: 'def', key: '2' },
        { title: 'rice', location: 'ghi', key: '3' },
    ]);
    const [title, setTitle] = useState("");
    const [location, setLocation] = useState("");
    const [firstName, setFirstName] = useState("");
    const [search, setSearch] = useState("");
    const navigation = useNavigation()

    const searchObj = () => {
        console.log("buscando")
    }

    const moreInfo = () => {

        navigation.navigate('Productinfo')
    }


    return (
        <View style={styles.container}>
            <View style={styles.search}>
                <TextInput
                    placeholder="Search"
                    value={search}
                    onChangeText={text => setSearch(text)}
                    style={styles.searchInput} />

            </View>
            <Icon.Button
                name="search-outline"
                onPress={searchObj}
                style={styles.searchbtn}
            ></Icon.Button>
            <FlatList
                numColumns={2}
                data={items}
                renderItem={({ item }) => (

                    <View style={styles.card}>

                        <TouchableOpacity
                            onPress={moreInfo}
                        >
                            <View >
                                <Image style={styles.cardImage} source={{
                                    uri: 'https://reactnative.dev/img/tiny_logo.png',
                                }} />
                            </View>

                            <Text style={styles.cardText}>Title: {item.title} </Text>
                            <Text style={styles.cardText}>Location:  {item.location}</Text>
                        </TouchableOpacity>
                    </View>

                )
                }

            />
            < StatusBar style="auto" />
        </View >
    );
}

export default HomeScreen

const styles = StyleSheet.create({
    container: {
        flex: 1,
        marginTop: 35,
        backgroundColor: '#fff',
    },
    search: {
        height: 50,
        backgroundColor: '#c4c4c4',
    },
    searchInput: {
        top: 5,
        bottom: 5,
        left: 10,
        width: '80%',
        alignItems: 'center',
        position: 'absolute',
        backgroundColor: 'white',
        borderRadius: 10,
        padding: 8,
        fontSize: 24,
    },
    searchbtn: {
        width: 50

    },
    card: {
        height: 200,
        width: 150,
        borderRadius: 15,
        margin: 10,
        backgroundColor: '#c4c4c4',
        shadowColor: 'gray',
        shadowOffset: {
            width: 10,
            height: 10,
        },
        shadowOpacity: 0.75,
        shadowRadius: 5,
        elevation: 9,
    },
    cardImage: {
        height: '75%',
        width: '100%',
        borderTopLeftRadius: 15,
        borderTopRightRadius: 15,
        backgroundColor: 'white',

    },
    cardDescription: {
        margin: 5,
        fontSize: 24,
        fontWeight: '200',

    },
    cardText: {
        paddingLeft: 10,
        textAlign: "left",
        marginTop: -1,

    }
});
