import React, { useState } from 'react'
import { navigate, Link } from '@reach/router'
import { toastSuccess, toastWarning } from '../../widgets/layout/toaster'
import axios from 'axios'

const SignupPage = () => {
    const [state, setState] = useState([{ username: '', email: '', password: ''}])

    const postUser = async () => {
        await axios
        .post('http://localhost:5000/users/add', {
            username: state.username,
            email: state.email,
            password: state.password
        })
        .then(res => {
            console.log('@state', state)
            toastSuccess('You have succesfully been registered! please login to proceed')
            navigate('/login')
        })
        .catch(err => {
            console.log(err)
            if (err.response.status === 400) toastWarning('Error 400 bad request: please check your input format')
            else toastWarning('Something else went wrong, please try again or contact developer if issue persisted')
        })
    }

    const handleChange = (e) => setState ({...state, [e.target.name]: e.target.value})
    const handleSubmit = () => postUser()
    
    return <div className='row' style={{height:'100vh'}}>
        <div className='col-sm-12 my-auto'>
            <div className='card mx-auto forms'>
                <p><strong>Sign up or </strong><Link to='/login'>sign in</Link></p>
                
                <div className='form-group'>
                    <input 
                        type='email' 
                        placeholder='email' 
                        className='form-control' 
                        name='email'
                        value={state.email}
                        onChange={handleChange} 
                    />
                </div>
                <div className='form-group'>
                    <input 
                        type='text' 
                        placeholder='username' 
                        className='form-control' 
                        name='username'
                        value={state.username}
                        onChange={handleChange} 
                    />
                </div>
                <div className='form-group'>
                    <input 
                        type='password' 
                        placeholder='password' 
                        className='form-control' 
                        name='password'
                        value={state.password}
                        onChange={handleChange} 
                    />
                </div>
                <div className='form-group'>
                    <input 
                        type='password' 
                        placeholder='confirm password' 
                        className='form-control' 
                        onKeyPress={e => ((e.charCode === 13) ? handleSubmit() : console.log())}
                    />
                </div>
                <div className="d-flex justify-content-center">
                    <button type='submit' className='button is-info' onClick={handleSubmit}>Submit</button>
                </div>
            </div>
        </div>
    </div>
}

export default SignupPage