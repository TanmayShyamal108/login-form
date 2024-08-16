
import { Link } from 'react-router-dom'
import React from 'react'
import { useFormik } from 'formik'

const Login = () => {

    let formik = useFormik({
        initialValues: {
            name: '',
            password: ''
        },
        onSubmit: (values) => {
            //   alert(JSON.stringify(values))
            if (values.name === 'radha' && values.password === 'radha') {
                window.location.href = '/home'
            } else {
                alert('invalid username or password')
            }

        },
        validate: (values) => {
            let errors = {}
            if (!values.name) {
                errors.name = 'please enter username'
            }
            if (!values.password) {
                errors.password = 'please enter password'
            }
            return errors
        }

    })
    return (
        <div className='d-flex justify-content-center align-items-center' style={{ height: '100vh' }}>
            <main className='p-3 border border-dark rounded'>
                <h1>Login Page</h1>
                <form onSubmit={formik.handleSubmit}>
                    <dl>
                        <dt>Name </dt>
                        <dd>
                            <input type="text" name="name" className='form-control' onChange={formik.handleChange} />
                        </dd>
                        
                        <dt>
                        Password</dt>
                        <dd><input type="password" name='password' className='form-control' onChange={formik.handleChange} on /></dd>
                        <dt><button className='btn btn-primary' type='submit'>Login</button></dt>
                        <dt>< Link className='text-decoration-none' to="/register">New user login</Link></dt>
                    </dl>
                </form>
            </main>
        </div>
    )
}

export default Login