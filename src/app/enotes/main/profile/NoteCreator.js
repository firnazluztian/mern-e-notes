import React, { Fragment } from 'react'

const NoteCreator = () => {
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
        <button className='button is-success'>Save</button>
    </Fragment>
}

export default NoteCreator