import React, { useState } from 'react';

const BlogContext = React.createContext();

export const BlogProvider = ({ children }) => {
    const [blogPosts, SetBlogPosts] = useState([]);

    const addBlogPost = () => {
        SetBlogPosts([...blogPosts, { title: `Blog Post#${blogPosts.length + 1}` }])
    }
    return (<BlogContext.Provider value={{ data: blogPosts, addBlogPost }}>
        {children}
    </BlogContext.Provider>);
}

export default BlogContext;
