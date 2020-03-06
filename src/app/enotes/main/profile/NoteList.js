import React, { Fragment, useContext } from 'react'
import Space from '../../../widgets/layout/Space'
import { toastSuccess } from '../../../widgets/layout/toaster'
import faker from 'faker';
import { AppContext } from '../../../data/globalState'

const dummAPI = [
    { id: 0, title: 'Biology class', content: faker.lorem.paragraph()},
    { id: 1, title: 'Physics class', content: faker.lorem.paragraph()},
    { id: 2, title: 'Math class', content: faker.lorem.paragraph()},
    { id: 3, title: 'English class', content: faker.lorem.paragraph()}
]

const NotesCard = ({header, content, dateCreated}) => {
    const {state, dispatch} = useContext(AppContext)    

    const handleEdit = () => toastSuccess(`"${header}" is succesfully edited`)
    const handleDelete = () => toastSuccess(`"${header}" is succesfully deleted`)
    const handleOption = () => dispatch({ type: 'UPDATE_INPUT', data: (!state.notePanel)})

    return <Fragment>
        <div className="card">
            <header className="card-header">
            <h5 className="card-header-title">
                {header}
            </h5>
            <button onClick={handleOption} className="button card-header-icon" aria-label="more options">
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
        <Space marginBottom='10px' />
    </Fragment>
}

const NoteList = () => {
    return <Fragment>
        {dummAPI.map((item, index) => {
            return <NotesCard key={index} header={item.title} content={item.content} dateCreated='05/03/2020 | 21.00'/>
        })}
    </Fragment>
} 

export default NoteList