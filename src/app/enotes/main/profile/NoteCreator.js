import React from 'react'
import { toastSuccess } from '../../../widgets/layout/toaster'

const NoteCreator = () => {
    const handleSubmit = () => toastSuccess('Succesfully saved')
    return <div className="card">
        <header className="card-header">
            <h5 className="card-header-title text-white">
            Create a new note
            </h5>
        </header>
        <div className="card-content">
            <div className='form-group'>
                <input 
                    type='Title' 
                    placeholder='Title' 
                    className='form-control' 
                />
            </div>
            <div className='form-group'>
                <textarea 
                    type='content' 
                    placeholder='Write your notes here' 
                    className='textarea form-control' 
                />
            </div>
            <button onClick={handleSubmit} className='button is-success'>Save</button>
        </div>
    </div>
}

export default NoteCreator