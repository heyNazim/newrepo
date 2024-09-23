import express from 'express'
import { allBlogs, createBlog, deleteBlogs, singleBlog, updateBlog } from '../controllers/blogController.js';
const blogrouter =  express.Router();




blogrouter.post('/createblog', createBlog);
blogrouter.get('/allblogs', allBlogs);
blogrouter.get('/singleblog/:id', singleBlog);
blogrouter.put('/updateblog/:id', updateBlog);
blogrouter.post('/deleteblog/:id', deleteBlogs);


export default blogrouter