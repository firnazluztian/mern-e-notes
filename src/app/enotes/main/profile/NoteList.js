import React, { Fragment } from 'react'
import Space from '../../../widgets/layout/Space'
import { toastSuccess } from '../../../widgets/layout/toaster'

const NotesCard = ({header, content, dateCreated}) => {
    const handleEdit = () => toastSuccess('Succesfully edited')
    const handleDelete = () => toastSuccess('Succesfully deleted')
    return <div className="card">
        <header className="card-header">
        <h5 className="card-header-title">
            {header}
        </h5>
        <button className="button card-header-icon" aria-label="more options">
            <span className="icon">
            <i className="fas fa-angle-down" aria-hidden="true"></i>
            </span>
        </button>
        </header>
        <div className="card-content">
            <p>{content}</p>
            <p>{dateCreated}</p>
        </div>
        <footer className="card-footer">
            <button onClick={handleEdit} className="button is-info">Edit</button>
            <Space marginRight='10px' />
            <button onClick={handleDelete} className="button is-danger">Delete</button>
        </footer>
  </div>
}

const NoteList = () => {
    return <Fragment>
        <NotesCard header='Biology class' content='lorem ipsum blabla' dateCreated='05/03/2020 | 21.00'/>
    </Fragment>
}

export default NoteList