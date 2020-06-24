import React, { useContext } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { Context } from '../context/BlogContext';

const ShowScreen = ({ navigation }) => {
    const { state } = useContext(Context);

    const id = navigation.getParam('id');
    const blog = state.find(x => x.id === id)
    return <View><Text>{blog.title} - {blog.id}</Text></View>;
}

const styles = StyleSheet.create({

});

export default ShowScreen;