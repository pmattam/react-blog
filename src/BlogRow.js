import React from 'react';
import EditBlogForm from './EditBlogForm';
import EditButton from './EditButton';
import DeleteButton from './DeleteButton';

let BlogRow = ({ blog, currentlyEditingBlog, removeBlog, changeEditBlogState, updateBlogTitle, updateBlogBody, saveUpdatedBlog }) =>
    <div>
        <h2>{blog.title}</h2>
        <h3>{blog.author}</h3>
        <p>{blog.body}</p>
        <DeleteButton 
            blog={blog}
            removeBlog={removeBlog}
        />
        <EditButton 
            blog={blog}
            changeEditBlogState={changeEditBlogState}
        />
        {
            currentlyEditingBlog && blog.id === currentlyEditingBlog.id && 
            <EditBlogForm 
                blog={blog}
                currentlyEditingBlog={currentlyEditingBlog}
                updateBlogTitle={updateBlogTitle}
                updateBlogBody={updateBlogBody}
                saveUpdatedBlog={saveUpdatedBlog}
            />
        }
    </div>

export default BlogRow;