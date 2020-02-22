import React from 'react'
import { navigate, Link } from '@reach/router'

const LoginPage = () => {
    const handleSubmit = () => navigate('/profile')

    const loginFormStyle = {
        width: '400px',
        backgroundColor: '#FAFAFA',
        padding: '1em',
        margin: '1em',
        borderRadius: '5px'
    }
    return <div className='row' style={{height:'100vh'}}>
        <div className='col-sm-12 my-auto'>
            <div className='card mx-auto' style={loginFormStyle}>
                <form onSubmit={handleSubmit}>
                    <p><strong>Sign in or </strong><Link to='/signup'>or create an account</Link></p>
                    
                    <div className='form-group'>
                        <input type='email' placeholder='email' className='form-control' id='exampleInputEmail1' aria-describedby='emailHelp' />
                    </div>
                    <div className='form-group'>
                        <input type='password' placeholder='password' className='form-control' id='exampleInputPassword1' />
                    </div>
                    <div class="d-flex justify-content-center">
                        <button type='submit' className='btn btn-primary'>Login</button>
                    </div>
                    
                </form>
            </div>
        </div>
    </div>
}

export default LoginPage