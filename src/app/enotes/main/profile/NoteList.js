import React, { Fragment, useContext } from 'react'
import Space from '../../../widgets/layout/Space'
import { toastSuccess } from '../../../widgets/layout/toaster'
import faker from 'faker';
import { AppContext } from '../../../data/globalState'

const dummAPI = [
    { id: 0, title: 'Biology class', content: faker.lorem.paragraph(), dateCreated: '10.00pm 05/03/2020'},
    { id: 1, title: 'Physics class', content: faker.lorem.paragraph(), dateCreated: '10.00pm 05/03/2020'},
    { id: 2, title: 'Math class', content: faker.lorem.paragraph(), dateCreated: '10.00pm 05/03/2020'},
    { id: 3, title: 'English class', content: faker.lorem.paragraph(), dateCreated: '10.00pm 05/03/2020'}
]

const NotesCard = ({header, content, dateCreated}) => {
    const {state, dispatch} = useContext(AppContext)    

    const handleEdit = () => toastSuccess(`"${header}" is succesfully edited`)
    const handleDelete = () => toastSuccess(`"${header}" is succesfully deleted`)
    const handleOption = () => dispatch({ type: 'UPDATE_INPUT', data: (!state.notePanel)})

    return <Fragment>
        <div className="card card-notes">
            <header className="card-header">
            <h5 className="card-header-title text-white">{header}</h5>
            <button onClick={handleOption} className="button card-header-icon" aria-label="more options">
                <span className="icon">
                <i className="fas fa-angle-down" aria-hidden="true"></i>
                </span>
            </button>
            </header>
            <div className="card-content">
                <p>{content}</p>
                <p>Date created: {dateCreated}</p>
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
            return <NotesCard key={index} header={item.title} content={item.content} dateCreated={item.dateCreated}/>
        })}
    </Fragment>
} 

export default NoteList