import React from 'react'
import { Link } from 'react-router-dom'

const Home = () => {
    return (
        <>
            <section>
                <div className="container">
                    <h1 className='text-center mt-5'>Home Page</h1>
                    <div className="d-flex justify-content-around mt-5">
                      <Link to={'users'}>  <div class="maincard">Users </div></Link>
                      <Link to={'blogs'}>  <div class="maincard">Blogs </div></Link>
                    </div>
                </div>
            </section>
        </>
    )
}

export default Home