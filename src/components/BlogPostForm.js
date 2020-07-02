import React, { useState } from 'react';
import { View, Text, TextInput, StyleSheet, Button } from 'react-native';

const BlogPostForm = ({ onSubmit, initialValues }) => {
    const [title, setTitle] = useState(initialValues.title);
    const [content, setContent] = useState(initialValues.content);

    return (
        <View style={styles.mainContainer}>
            <View style={styles.inputcontainer}>
                <Text style={styles.label}>Enter Title:</Text><TextInput style={styles.Input} value={title} onChangeText={(text) => { setTitle(text) }} />
            </View>
            <View style={styles.inputcontainer}>
                <Text style={styles.label}>Enter Content</Text><TextInput style={styles.Input} value={content} onChangeText={(text) => { setContent(text) }} />
            </View>
            <Button title='Save'
                onPress={() => onSubmit(title, content)}
            />
        </View>
    );
};

BlogPostForm.defaultProps = {
    initialValues: {
        title: '',
        content: ''
    }
}

const styles = StyleSheet.create({
    Input: {
        borderColor: 'black',
        borderWidth: 1,
        flex: 1
    },
    mainContainer: {
        justifyContent: 'center',
        alignItems: 'center',
        borderColor: 'black',
        borderWidth: 1,
        flex: 1
    },
    inputcontainer: {
        flexDirection: 'row',
        marginHorizontal: 15,
        marginTop: 10
    },
    label: {
        width: 150,
        fontSize: 18
    }
})

export default BlogPostForm;