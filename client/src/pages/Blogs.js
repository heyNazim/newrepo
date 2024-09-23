import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';

const Blogs = () => {
  const [blogdata, setBlogdata] = useState([]);

  useEffect(() => {
    getAllBlogs();
  }, []);

  const getAllBlogs = async () => {
    try {
      const response = await axios.get('http://localhost:8080/api/allblogs');
      console.log(response.data.bloglist)
      if (response && response.data) {
        setBlogdata(response.data.bloglist);
      }
    } catch (error) {
      console.log(error);
    }
  };

  const deletefunction = async (id) => {
    try {
      const abc = await axios.post(`http://localhost:8080/api/deleteblog/${id}`)
      if (abc) {
        alert("This blog is deleted")
        getAllBlogs();

      }
    } catch (error) {
      console.log(error)
    }
  }

  return (
    <section className='mt-5'>
      <div className="container">
        <h1 className='text-center mb-4'>All Blogs</h1>
        <div className="blog-container d-flex justify-content-between flex-wrap">
          {
            blogdata.map((blog) => (
              <div className="blogcard" key={blog._id}>
                <h2>{blog.title}</h2>
                <p>{blog.content}</p>
                <div className="blog-meta">
                  <span>{new Date(blog.createdAt).toLocaleDateString()}</span>
                  <div className='mt-3'>
                    <Link to={`/updateblog/${blog._id}`}><button className='btn btn-success me-2'>Edit</button></Link>
                    <button onClick={() => deletefunction(blog._id)} className='btn btn-danger me-2'>delete</button>
                  </div>
                </div>
              </div>
            ))
          }
        </div>
     <Link to={'/createblog'}>   <button className='btn btn-primary '>Create New Blog</button></Link>  <br /><br />
        <Link to={'/'}>Go To Home Page</Link>
      </div>
    </section>
  );
};

export default Blogs;
