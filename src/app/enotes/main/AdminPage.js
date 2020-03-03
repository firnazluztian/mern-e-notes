// for debugging purposes
import { Button, Dialog } from '@blueprintjs/core'
import axios from 'axios'
import React, { useEffect, useState, Fragment } from 'react'
import Space from '../../widgets/layout/Space'
import { toastSuccess, toastWarning } from '../../widgets/layout/toaster'
import { Flex } from '../../widgets/layout/Allignment'

const initialState = [{ id: '', username: '', email: '', password: '' }]
const AdminPage = () => {
    const [state, setState] = useState(initialState)
    const [user, setUser] = useState({data:[]})
    const [isAdmin, setIsAdmin] = useState(false)
    const [edit, setEdit] = useState(false)

    const getUser = async () => {
        await axios
        .get('http://localhost:5000/users/')
        .then(res => setUser(res))
        .catch(err => console.log(err))
    }

    const editUser = async (id) => {
        await axios 
        .post(`http://localhost:5000/users/update/${id}`, {
            username: state.username,
            email: state.email,
            password: state.password
        })
        .then(res => {
            toastSuccess(`user has succesfully been edited!`)
            setEdit(false)
        })
        .catch(err => console.log(err))
    }

    const deleteUser = async (id) => {
        await axios
        .delete(`http://localhost:5000/users/${id}`)
        .then(res => toastSuccess(`user has succesfully been deleted`))
        .catch(err => console.log(err))
    }

    const handleChange = (e) => setState ({...state, [e.target.name]: e.target.value})
    const handleSubmit = () => {
        if (!isAdmin) {
            if (state.username === 'admin' && state.password === 'pass') {
                setIsAdmin(true)
            } else {
                toastWarning('wrong credential please try again')
            }
        } else {
            editUser(state.id)   
        }
    }
    
    useEffect(() => {
        getUser()
    })

    return (
        <Fragment>
            {!isAdmin &&
                <Fragment>
                    <div className='row' style={{height:'100vh'}}>
                        <div className='col-sm-12 my-auto'>
                            <div className='card mx-auto forms'>
                                <p>Administrator</p>
                                <div className='form-group'>
                                    <input 
                                        type='username' 
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
                                        onKeyPress={e => ((e.charCode === 13) ? handleSubmit() : console.log())}
                                    />
                                </div>
                                <div class="d-flex justify-content-center">
                                    <Button type='submit' intent='primary' onClick={handleSubmit}>Login</Button>
                                </div>
                            </div>
                        </div>
                    </div>
                </Fragment>
            }

            {/* DISPLAY IF ADMIN */}
            {isAdmin &&
            <div className='container'>
                <Space marginTop="5em" />
                <h5>Registered user</h5>
                {!user
                ? <p>Unable to retreive data, please check your connection</p>
                : <table class="table table-hover">
                    <thead>
                        <tr className="table-success">
                        <th scope="col">id</th>
                        <th scope="col">username</th>
                        <th scope="col">email</th>
                        <th scope="col">action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {user.data.map((item, index) => {
                            return <tr>
                            <th scope="row">{item._id}</th>
                                <td>{item.username}</td>
                                <td>{item.email}</td>
                                <td>
                                    <Flex>
                                    <Button 
                                        intent='primary' 
                                        onClick={() => { 
                                            setEdit(true)
                                            setState({
                                                id: item._id,
                                                username: item.username,
                                                email: item.email,
                                                password: item.password
                                            })
                                        }
                                    }>Edit</Button>
                                    <Space marginRight='1em' />
                                    <Button 
                                        intent='danger' 
                                        onClick={() => deleteUser(item._id)
                                    }>Delete</Button>
                                    </Flex>
                                </td>
                            </tr>
                        })}
                    </tbody>
                </table>
                }
            
                {/* EDIT FORM */}
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
                            onKeyPress={e => ((e.charCode === 13) ? handleSubmit() : console.log())}
                        />
                    </div>
                    <div className="d-flex justify-content-center">
                        <Button type='submit' intent='primary' onClick={handleSubmit}>Submit</Button>
                    </div>
                </Fragment>
                }
            </div>
            }
        </Fragment>
    )
}

export default AdminPage