import React, { useState } from 'react'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'

const AddUser = () => {
  const [name,setName]= useState('')
  const [email,setEmail]= useState('')
  const [age,setAge]= useState('')

  const navigate = useNavigate();

  const handleForm = async (e) => {
    e.preventDefault();
    try {
        const response = await axios.post('http://localhost:8080/api/insertuser', { name, email, age });
        if (response) {
            alert('User added successfully');
            navigate(-1) 
        } else {
            alert('Failed to add User');
        }
    } catch (error) {
        console.error('Error adding blog:', error);
        alert('An error occurred while adding the User');
    }
};



  return (
    <section className='mt-5'>
                <div className="container">
                    <h1 className='text-center'>Add New User</h1>
                    <form className="form" onSubmit={handleForm}>
                        <input
                            placeholder="Enter Your Name"
                            onChange={(e) => setName(e.target.value)}
                            className="input"
                            type="text"
                        />
                        <input
                            placeholder="Enter Email"
                            onChange={(e) => setEmail(e.target.value)}
                            className="input"
                            type="email"
                        />
                        <input
                            placeholder="Enter Your Age"
                            onChange={(e) => setAge(e.target.value)}
                            className="input"
                            type="number"
                        />
                        <button type="submit">Add User</button>
                    </form>
                </div>
            </section>
  )
}

export default AddUser