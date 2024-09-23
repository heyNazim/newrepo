import express from 'express'
import {  insertUser, singleUser, updateUser, users } from '../controllers/userController.js';

const router = express.Router();

router.get('/users', users);
router.get('/singleuser', singleUser);
router.post('/insertuser', insertUser);
router.post('/updateuser/:id', updateUser);

export default router