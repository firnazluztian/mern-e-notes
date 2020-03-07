import { Link, navigate } from '@reach/router'
import React, { useState, useEffect } from 'react'
import { toastSuccess, toastDanger } from '../../widgets/layout/toaster'
import axios from 'axios'

const LoginPage = () => {
    const [user, setUser] = useState({data:[]})
    const [input, setInput] = useState({username: '', password: ''})

    const getUser = async () => await axios.get('http://localhost:5000/users/').then(res => setUser(res)).catch(err => console.log(err))
    useEffect(() => {
        getUser()
    },[input])

    const handleChange = (e) => setInput ({...input, [e.target.name]: e.target.value})
    const handleSubmit = () => {
        let isAuth = user.data.map(item => {
            if (item.username === input.username && item.password === input.password) return true 
            else return false
        }) 
        if (!isAuth.every((checkAuth) => { return checkAuth === false })) {
            navigate('/profile')
            toastSuccess('You are logged in')
        } else toastDanger('incorrect user credentials or user credentials does not exist. please try again')
    }

    return <div className='row' style={{height:'100vh'}}>
        <div className='col-sm-12 my-auto'>
            <div className='card mx-auto forms'>
                <p><strong>Sign in or </strong><Link to='/signup'>or create an account</Link></p>
                
                <div className='form-group'>
                    <input 
                        name='username'
                        type='text' 
                        placeholder='username' 
                        className='form-control' 
                        value={input.username}
                        onChange={handleChange} 
                    />
                </div>
                <div className='form-group'>
                    <input 
                        name='password'
                        type='password' 
                        placeholder='password' 
                        className='form-control' 
                        value={input.password}
                        onChange={handleChange} 
                        onKeyPress={e => ((e.charCode === 13) ? handleSubmit() : console.log())}
                    />
                </div>
                <div className="d-flex justify-content-center">
                    <button type='submit' className='button is-info' onClick={handleSubmit}>Login</button>
                </div>
            </div>
        </div>
    </div>
}

export default LoginPage