import React, { useContext, useEffect } from 'react';
import { StyleSheet } from 'react-native';
import { Context } from '../context/BlogContext';
import BlogPostForm from '../components/BlogPostForm';

const EditScreen = ({ navigation }) => {
    const id = navigation.getParam('id');
    const { editBlogPost, state } = useContext(Context);
    const blog = state.find(x => x.id === id)

    return <BlogPostForm initialValues={blog} onSubmit={(title, content) => editBlogPost(id, title, content, () => navigation.pop())} />
}

const styles = StyleSheet.create({
});

export default EditScreen;