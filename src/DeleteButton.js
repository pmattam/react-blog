import React from 'react';

let DeleteButton = ({ blog, removeBlog }) => 
    <button onClick={() => removeBlog(blog)}>Delete</button>

export default DeleteButton;