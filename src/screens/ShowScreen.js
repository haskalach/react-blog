import React, { useContext } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { Context } from '../context/BlogContext';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { EvilIcons } from '@expo/vector-icons';

const ShowScreen = ({ navigation }) => {
    const { state } = useContext(Context);

    const id = navigation.getParam('id');
    const blog = state.find(x => x.id === id)
    return <View><Text>{blog.title} - {blog.id}</Text></View>;
}

ShowScreen.navigationOptions = ({ navigation }) => {
    const id = navigation.getParam('id');
    return {
        headerRight: () => <TouchableOpacity onPress={() => navigation.navigate('Edit', { id })}>
            <EvilIcons name="pencil" style={styles.editIcon} />
        </TouchableOpacity>
    };
};

const styles = StyleSheet.create({
    editIcon: {
        fontSize: 35,
        marginRight: 10
    }
});

export default ShowScreen;