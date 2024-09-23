import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const CreateBlog = () => {
    const [title, setTitle] = useState('');
    const [content, setContent] = useState('');
    const navigate = useNavigate()

    const handleForm = async (e) => {
        e.preventDefault();
        try {
            const response = await axios.post('http://localhost:8080/api/createblog', { title, content });
            if (response) {
                alert('Blog added successfully');
                navigate(-1) 
            } else {
                alert('Failed to add blog');
            }
        } catch (error) {
            console.error('Error adding blog:', error);
            alert('An error occurred while adding the blog');
        }
    };

    return (
        <>
            <section className='mt-5'>
                <div className="container">
                    <h1 className='text-center'>Add New Blog</h1>
                    <form className="form" onSubmit={handleForm}>
                        <input
                            placeholder="Enter Blog Title"
                            onChange={(e) => setTitle(e.target.value)}
                            className="input"
                            type="text"
                            value={title}
                        />
                        <input
                            placeholder="Enter Blog Content"
                            onChange={(e) => setContent(e.target.value)}
                            className="input"
                            type="text"
                            value={content}
                        />
                        <button type="submit">Add Blog</button>
                    </form>
                </div>
            </section>
        </>
    );
};

export default CreateBlog;
