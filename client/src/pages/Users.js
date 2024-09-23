import React, { useEffect, useState } from 'react';
import axios from 'axios';
import {Link} from 'react-router-dom'
const Users = () => {
    const [users, setUsers] = useState([]);

    useEffect(() => {
        getData();
    }, []);

    const getData = async () => {
        try {
            const response = await axios.get('http://localhost:8080/api/users');
            console.log(response);
            setUsers(response.data.data);
        } catch (error) {
            console.log(error);
        }
    };

    

    return (
        <section className='mt-5'>
            <div className="container">
                <h2 className='text-center'>Users List</h2>
                <table className='table striped bordered mt-3'>
                    <thead>
                        <tr>
                            <th>ID</th>
                            <th>Name</th>
                            <th>Email</th>
                            <th>Age</th>
                            <th>Delete</th>
                        </tr>
                    </thead>
                    <tbody>
                        {users.map((user, index) => (
                            <tr key={index+1}> 
                                <td>{index+1}</td>
                                <td>{user.name}</td>
                                <td>{user.email}</td>
                                <td>{user.age}</td>
                            </tr>
                        ))}
                    </tbody>
                </table>

                <Link to={'/'}>Home Page</Link>
            </div>
        </section>
    );
};

export default Users;
