import React, { useState } from 'react'
import { toastSuccess } from '../../../widgets/layout/toaster'
import axios from 'axios'

const NoteCreator = () => {
    const [item, setItem] = useState({ title: '', content: '' })

    const postItem = async () => {
        await axios
        .post('http://localhost:5000/items/add', { 
            title: item.title, 
            content: item.content 
        })
        .then(res => {
            setItem({ title: '', content: '' })
            toastSuccess('Succesfully saved')
        })
        .catch(err => console.log(err))
    } 
    const handleChange = (e) => setItem ({...item, [e.target.name]: e.target.value})
    const handleSubmit = () => postItem()

    return <div className="card">
        <header className="card-header">
            <h5 className="card-header-title text-white">
            Create a new note
            </h5>
        </header>
        <div className="card-content">
            <div className='form-group'>
                <input 
                    name='title'
                    type='text' 
                    placeholder='Title' 
                    className='form-control' 
                    value={item.title}
                    onChange={handleChange}
                />
            </div>
            <div className='form-group'>
                <textarea 
                    name='content'
                    type='text' 
                    placeholder='Write your notes here' 
                    className='textarea form-control' 
                    value={item.content}
                    onChange={handleChange}
                />
            </div>
            <button onClick={handleSubmit} className='button is-success'>Save</button>
        </div>
    </div>
}

export default NoteCreator