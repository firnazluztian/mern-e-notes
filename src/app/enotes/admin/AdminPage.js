// for debugging purposes
import axios from 'axios'
import React, { useEffect, useState, Fragment } from 'react'
import Space from '../../widgets/layout/Space'
import { toastSuccess, toastWarning } from '../../widgets/layout/toaster'
import { Flex } from '../../widgets/layout/Allignment'

const AdminLogin = ({state, handleChange, handleSubmit}) => {
    return <Fragment>
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
                <div className="d-flex justify-content-center">
                    <button type='submit' className='button is-primary' onClick={handleSubmit}>Login</button>
                </div>
            </div>
        </div>
    </div>
</Fragment>
}

const initialState = [{ id: '', username: '', email: '', password: '' }]
const AdminPage = () => {
    const [isAdmin, setIsAdmin] = useState(false) // handle auth admin
    const [input, setInput] = useState(initialState)
    const [user, setUser] = useState({data:[]})
    const [edit, setEdit] = useState(false)

    const getUser = async () => await axios.get('https://firnaz-enotes.herokuapp.com/users/').then(res => setUser(res)).catch(err => console.log(err))
    const deleteUser = async (id) => await axios.delete(`https://firnaz-enotes.herokuapp.com/users/${id}`).then(res => toastSuccess(`user has succesfully been deleted`)).catch(err => console.log(err))
    const editUser = async (id) => {
        await axios 
        .post(`https://firnaz-enotes.herokuapp.com/users/update/${id}`, {
            username: input.username,
            email: input.email,
            password: input.password
        })
        .then(res => {
            toastSuccess(`user has succesfully been edited!`)
            setEdit(false)
        })
        .catch(err => console.log(err))
    }

    const handleChange = (e) => setInput ({...input, [e.target.name]: e.target.value})
    const handleSubmit = () => {
        if (!isAdmin) {
            if (input.username === 'admin' && input.password === 'pass') setIsAdmin(true)
            else toastWarning('wrong credential please try again')
        } else {
            editUser(input.id)   
        }
    }
    
    useEffect(() => {
        getUser()
    }, [user])

    return (
        <Fragment>

            {/* LOGIN AS ADMIN */}
            {!isAdmin && <AdminLogin state={input} handleChange={handleChange} handleSubmit={handleSubmit} />}

            {/* DISPLAY IF ADMIN */}
            {isAdmin &&
            <div className='container'>
                <Space marginTop="5em" />
                <h5>Registered user</h5>
                {!user
                ? <p>Unable to retreive data, please check your connection</p>
                : <table className="table table-hover">
                    <thead>
                        <tr className="table-success">
                        <th scope="col">id</th>
                        <th scope="col">username</th>
                        <th scope="col">email</th>
                        <th scope="col">password</th>
                        <th scope="col">action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {user.data.map((item, index) => {
                            return <tr key={`user-${index}`}>
                            <th scope="row">{item._id}</th>
                                <td>{item.username}</td>
                                <td>{item.email}</td>
                                <td>{item.password}</td>
                                <td>
                                    <Flex>
                                        <button 
                                            className='button is-primary' 
                                            onClick={() => { 
                                                setEdit(true)
                                                setInput({
                                                    id: item._id,
                                                    username: item.username,
                                                    email: item.email,
                                                    password: item.password
                                                })
                                            }}>Edit
                                        </button>

                                        <Space marginRight='1em' />
                                        
                                        <button 
                                            className='button is-danger' 
                                            onClick={() => deleteUser(item._id)}>Delete
                                        </button>
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
                            value={input.email}
                            onChange={handleChange} 
                        />
                    </div>
                    <div className='form-group'>
                        <input 
                            type='text' 
                            placeholder='username' 
                            className='form-control' 
                            name='username'
                            value={input.username}
                            onChange={handleChange} 
                        />
                    </div>
                    <div className='form-group'>
                        <input 
                            type='password' 
                            placeholder='password' 
                            className='form-control' 
                            name='password'
                            value={input.password}
                            onChange={handleChange} 
                            onKeyPress={e => ((e.charCode === 13) ? handleSubmit() : console.log())}
                        />
                    </div>
                    <div className="d-flex justify-content-center">
                        <button type='submit' className='button is-primary' onClick={handleSubmit}>Submit</button>
                    </div>
                </Fragment>
                }
            </div>
            }

        </Fragment>
    )
}

export default AdminPage