// for debugging purposes
import { Button } from '@blueprintjs/core'
import axios from 'axios'
import React, { useEffect, useState } from 'react'
import Space from '../../widgets/layout/Space'
import { toastSuccess } from '../../widgets/layout/toaster'

const AdminPage = () => {
    const [user, setUser] = useState({data:[]})
    const getUser = async () => {
        await axios
        .get('http://localhost:5000/users/')
        .then(res => setUser(res))
        .catch(err => console.log(err))
    }

    const deleteUser = async (id, name) => {
        await axios
        .delete(`http://localhost:5000/users/${id}`)
        .then(res => toastSuccess(`username ${name} is succesfully deleted`))
        .catch(err => console.log(err))
    }

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
                <li>date created: {item.createdAt}</li>
                <li><Button intent='danger' onClick={() => deleteUser(item._id, item.username)}>Delete</Button></li>
            </ul>
        })}
    </div>
    )
}

export default AdminPage