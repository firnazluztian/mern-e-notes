import React from 'react'
import { navigate, Link } from '@reach/router'

const SignupPage = () => {
    const handleSubmit = () => navigate('/profile')

    const signupFormStyle = {
        width: '400px',
        backgroundColor: '#FAFAFA',
        padding: '1em',
        margin: '1em',
        borderRadius: '5px'
    }
    return <div className='row' style={{height:'100vh'}}>
        <div className='col-sm-12 my-auto'>
            <div className='card mx-auto' style={signupFormStyle}>
                <form onSubmit={handleSubmit}>
                    <p><strong>Sign up or </strong><Link to='/login'>sign in</Link></p>
                    
                    <div className='form-group'>
                        <input type='email' placeholder='email' className='form-control' id='exampleInputEmail1' aria-describedby='emailHelp' />
                    </div>
                    <div className='form-group'>
                        <input type='password' placeholder='password' className='form-control' id='exampleInputPassword1' />
                    </div>
                    <div className='form-group'>
                        <input type='password' placeholder='confirm password' className='form-control' id='exampleInputPassword1' />
                    </div>
                    <div class="d-flex justify-content-center">
                        <button type='submit' className='btn btn-primary'>Submit</button>
                    </div>
                    
                </form>
            </div>
        </div>
    </div>
}

export default SignupPage