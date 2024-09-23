import axios from 'axios';
import React, { useState, useEffect } from 'react';
import { useNavigate, useParams } from 'react-router-dom';

const UpdateBlog = () => {
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');
  const navigate = useNavigate()

  const { id } = useParams(); // Grabbing blog ID from URL params

  useEffect(() => {
    getsingleBlog();
  },[]);

  const getsingleBlog = async () => {
    try {
      const result = await axios.get(`http://localhost:8080/api/singleblog/${id}`);
      setTitle(result.data.blog[0].title);
      setContent(result.data.blog[0].content);
    } catch (error) {
      alert('Failed to fetch blog details', error);
    }
  };

  const handleForm = async (e) => {
    e.preventDefault(); 
    try {
      console.log("Blog ID:", id);
      await axios.put(`http://localhost:8080/api/updateblog/${id}`, {title,content });
      alert('Blog updated successfully');
      navigate(-1); 

    } catch (error) {
      console.log('Error:', error.response?.data || error.message);
      alert(`Failed to update blog: ${error.response?.data.message || error.message}`);
    }
  };

  return (
    <section>
      <div className="container">
        <h1>Update Blog</h1>
        <form className="form" onSubmit={handleForm}>
          <input
            onChange={(e) => setTitle(e.target.value)}
            className="input"
            type="text"
            value={title}
          />
          <input
            onChange={(e) => setContent(e.target.value)}
            className="input"
            type="text"
            value={content}
          />
          <button type="submit">Update Blog</button>
        </form>
      </div>
    </section>
  );
};

export default UpdateBlog;
