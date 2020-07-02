import React, { useContext, useEffect } from 'react';
import { View, Text, StyleSheet, FlatList, Button, TouchableOpacity } from 'react-native';
import { Context } from '../context/BlogContext';
import { Feather } from '@expo/vector-icons';

const IndexScreen = ({ navigation }) => {
    const { state, getBlogPosts, deleteBlogPost } = useContext(Context);
    useEffect(() => {
        getBlogPosts();

        //const listener = navigation.addListener('didFocus', () => {
        //     getBlogPosts();
        // });
        //return () =>{
        //listener.remove();
        // }
    }, [])

    return (
        <View>
            <FlatList
                data={state}
                keyExtractor={(blogPost) => blogPost.id.toString()}
                renderItem={({ item }) => {
                    return (
                        <TouchableOpacity onPress={() => navigation.navigate('Show', { id: item.id })}>
                            <View style={styles.container}>
                                <Text style={styles.title}>{item.title}-{item.id}</Text>
                                <TouchableOpacity onPress={() => deleteBlogPost(item.id)}>
                                    <Feather name='trash' style={styles.icon} />
                                </TouchableOpacity>
                            </View>
                        </TouchableOpacity>

                    );
                }}
            />
        </View >
    );
}

IndexScreen.navigationOptions = ({ navigation }) => {
    return {
        headerRight: () =>
            <TouchableOpacity onPress={() => navigation.navigate('Create')}>
                <Feather name="plus" style={styles.plusIcon} />
            </TouchableOpacity>
    };
};

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        padding: 5,
        borderWidth: 1,
        borderColor: 'black',
        marginBottom: 5,
        marginLeft: 5,
        marginRight: 5
    },
    title: {
        fontSize: 18
    },
    icon: {
        fontSize: 24
    },
    plusIcon: {
        marginRight: 15,
        fontSize: 30
    }
});

export default IndexScreen;