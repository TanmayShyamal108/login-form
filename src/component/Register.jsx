

import React from 'react'

const Register = () => {
    return (
        <div className='d-flex justify-content-center align-items-center' style={{ height: '100vh' }} >

            <form>
                <h1>New User Register</h1>
                <dl>
                    <dt>Name</dt>
                    <dd>
                        <input type="text" name="name" className='form-control' />
                    </dd>
                    <dt>
                        Email
                    </dt>
                    <dd>
                        <input type="text" name="email" className='form-control' />
                    </dd>
                    <dt>Mobile</dt>
                    <dd><input type="text" name="mobile" className='form-control' /></dd>
                    <dt>Password</dt>
                    <dd><input type="password" className='form-control' /></dd>
                    <dt><button className='btn btn-primary'>Register</button></dt>

                </dl>
            </form>
        </div>
    )
}

export default Register