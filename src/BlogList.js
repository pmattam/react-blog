import React from 'react';
import BlogRow from './BlogRow';

let BlogList = ({ blogs, currentlyEditingBlog, removeBlog, changeEditBlogState, updateBlogTitle, updateBlogBody, saveUpdatedBlog }) =>
    <div>
        {
            blogs.map(blog =>
            <BlogRow 
                blog={blog}
                currentlyEditingBlog={currentlyEditingBlog}
                removeBlog={removeBlog}
                changeEditBlogState={changeEditBlogState}
                updateBlogTitle={updateBlogTitle}
                updateBlogBody={updateBlogBody}
                saveUpdatedBlog={saveUpdatedBlog}    
            />)
        }        
    </div>

export default BlogList;