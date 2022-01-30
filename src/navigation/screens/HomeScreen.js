import { StatusBar } from 'expo-status-bar';
import {useState} from 'react';
import { StyleSheet, Text, TextInput, View, FlatList } from 'react-native';

export default function App() {
    const [items, setItem] = useState([
        {title: 'white shirt', location: 'abc', key: '1'},
        {title: 'brown table',  location: 'def', key: '2'},
        {title: 'rice',  location: 'ghi', key: '3'},
    ]);
    return (
        <View style={styles.container}>
            <View style={styles.search}>
            <TextInput placeholer='Search'  style={styles.searchInput}></TextInput>
            </View>
            <FlatList 
                numColumns={2}
                data={items}
                renderItem={({item}) => (
                    <View style={styles.card}>
                    {/* <Image source={require('../../../assets/download.jpg')} /> */}
                    <View style={styles.cardImage}> </View>
                    
                    <Text style={styles.cardText}>Title: {item.title} </Text>
                    <Text style={styles.cardText}>Location:  {item.location}</Text>
                </View>
                    // <Text style={styles.cardImage}>{item.title}</Text>
                )}
            />          
            
            
            {/* <Text>home page lel</Text> */}
            <StatusBar style="auto" />
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
    },
    search : {
        height: 50,
        backgroundColor: '#c4c4c4',
    },
    searchInput:{
        top:5,
        bottom:5,
        left:40,
        width: '95%',
        alignItems: 'centre',
        position:'absolute',
        backgroundColor: 'white',
        borderRadius: 10,
        padding: 8,
        color: 'black',
        fontSize : 24,
    },
    card: {
        height:350,
        width: 350,
        borderRadius: 15,
        margin : 40,
        backgroundColor: '#c4c4c4',
        shadowColor:'gray',
        shadowOffset: {
            width:5,
            height:5,
        },
        shadowOpacity: 0.75,
        shadowRadius: 5,
        elevation:9,
    },
    cardImage: {
        height:'70%',
        width: '100%',
        borderTopLeftRadius :15,
        borderTopRightRadius: 15,
        backgroundColor: 'white',

    },
    cardDescription: {
        margin:15,
        fontSize:24,
        fontWeight: '200',
        
    }
});
