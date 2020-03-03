// for debugging purposes
import { Button } from '@blueprintjs/core'
import axios from 'axios'
import React, { useEffect, useState, Fragment } from 'react'
import Space from '../../widgets/layout/Space'
import { toastSuccess } from '../../widgets/layout/toaster'

const initialState = [{ id: '', username: '', email: '', password: '' }]
const AdminPage = () => {
    const [state, setState] = useState(initialState)
    const [user, setUser] = useState({data:[]})
    const [edit, setEdit] = useState(false)

    const getUser = async () => {
        await axios
        .get('http://localhost:5000/users/')
        .then(res => setUser(res))
        .catch(err => console.log(err))
    }

    const editUser = async (id, name) => {
        await axios 
        .post(`http://localhost:5000/users/update/${id}`, {
            username: state.username,
            email: state.email,
            password: state.password
        })
        .then(res => {
            toastSuccess(`username ${name} has succesfully been edited!`)
            setEdit(false)
        })
        .catch(err => console.log(err))
    }

    const deleteUser = async (id, name) => {
        await axios
        .delete(`http://localhost:5000/users/${id}`)
        .then(res => toastSuccess(`username ${name} is succesfully deleted`))
        .catch(err => console.log(err))
    }

    const handleChange = (e) => setState ({...state, [e.target.name]: e.target.value})
    const handleSubmit = () => editUser(state.id, state.name)
    
    useEffect(() => {
        getUser()
    })

    return (<div className='container'>
        <Space marginTop="5em" />
        <h5>Registered user</h5>
        {user.data.map((item, index) => {
            return <ul key={index}>
                <li>id: {item._id}</li>
                <li>username: {item.username}</li>
                <li>email: {item.email}</li>
                <li>
                    <Button 
                        intent='warning' 
                        onClick={() => { 
                            setEdit(prev => !edit)
                            setState({
                                id: item._id,
                                username: item.username,
                                email: item.email,
                                password: item.password
                            })
                        }
                    }>Edit</Button>
                    <Button 
                        intent='danger' 
                        onClick={() => deleteUser(item._id, item.username)
                    }>Delete</Button>
                </li>
            </ul>
        })}

        {edit &&
        <Fragment>
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
            <div className="d-flex justify-content-center">
                <Button type='submit' intent='primary' onClick={handleSubmit}>Submit</Button>
            </div>
        </Fragment>
        }
    </div>
    )
}

export default AdminPage