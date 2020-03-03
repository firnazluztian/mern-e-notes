import { Button } from '@blueprintjs/core'
import { Link, navigate } from '@reach/router'
import React from 'react'

const LoginPage = () => {
    const handleSubmit = () => navigate('/profile')

    return <div className='row' style={{height:'100vh'}}>
        <div className='col-sm-12 my-auto'>
            <div className='card mx-auto forms'>
                <p><strong>Sign in or </strong><Link to='/signup'>or create an account</Link></p>
                
                <div className='form-group'>
                    <input 
                        type='username' 
                        placeholder='username' 
                        className='form-control' 
                    />
                </div>
                <div className='form-group'>
                    <input 
                        type='password' 
                        placeholder='password' 
                        className='form-control' 
                        onKeyPress={e => ((e.charCode === 13) ? handleSubmit() : console.log())}
                    />
                </div>
                <div class="d-flex justify-content-center">
                    <Button type='submit' intent='primary' onClick={handleSubmit}>Login</Button>
                </div>
            </div>
        </div>
    </div>
}

export default LoginPage