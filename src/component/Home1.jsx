

import React from 'react'
import { Link } from 'react-router-dom'

const Home1 = () => {
    return (
        <div>
            <header className='d-flex justify-content-center mt-20 p-3'>
                <Link className='btn btn-primary me-3' to={'/register'}>Register</Link>
                <Link className='btn btn-danger' to={'/login'}> Login</Link>
            </header>
        </div>
    )
}

export default Home1