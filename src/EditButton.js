import React from 'react';

let EditButton = ({ blog, changeEditBlogState }) => 
    <button onClick={() => changeEditBlogState(blog)}>Edit</button>

export default EditButton;