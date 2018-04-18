import React from 'react';

let EditBlogForm = ({ blog, currentlyEditingBlog, updateBlogTitle, updateBlogBody, saveUpdatedBlog }) => 
    <form>
        <input key="1" value={currentlyEditingBlog.title} onChange={(event) => updateBlogTitle(currentlyEditingBlog, event.target.value)} />
        <input key="2" value={currentlyEditingBlog.body} onChange={(event) => updateBlogBody(currentlyEditingBlog, event.target.value)} />
        <button onClick={() => saveUpdatedBlog(currentlyEditingBlog)}>Save</button>
    </form>

export default EditBlogForm;