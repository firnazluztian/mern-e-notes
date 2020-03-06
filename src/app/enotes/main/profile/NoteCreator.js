import React, { Fragment } from 'react'
import { toastSuccess } from '../../../widgets/layout/toaster'

const NoteCreator = () => {
    const handleSubmit = () => toastSuccess('Succesfully saved')
    return <Fragment>
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
    </Fragment>
}

export default NoteCreator