import React, { useContext, useState, useEffect } from 'react'
import Space from '../../../widgets/layout/Space'
import { toastSuccess } from '../../../widgets/layout/toaster'
import { AppContext } from '../../../data/globalState'
import axios from 'axios'
import { parseDate } from '../../../data/helperTools'

const NotesCard = ({id, header, content, dateCreated}) => {
    const {dispatch} = useContext(AppContext)   
    
    const deleteItem = async () => {
        await axios
        .delete(`https://firnaz-enotes.herokuapp.com/items/${id}`)
        .then(res => toastSuccess(`"${header}" has succesfully been deleted`))
        .catch(err => console.log(err))
    }

    // will do in future development!
    // const handleEdit = () => toastSuccess(`"${header}" is succesfully edited`)
    const handleDelete = () => deleteItem()
    const handleOption = () => {
        //dispatch({ type: 'UPDATE_INPUT', data: (!state.notePanel) })
        dispatch({ type: 'NOTE_ID', data: id })
    }

    return <div className='grid-item'>
        <div className="card card-notes">
            <header className="card-header">
            <h5 className="card-header-title text-white">{header}</h5>
            <button onClick={handleOption} className="button card-header-icon" aria-label="more options">
                <span className="icon">
                <i className="fas fa-angle-down" aria-hidden="true"></i>
                </span>
            </button>
            </header>
            <div className="card-content card-content-list">
                <p>{content}</p>
                <p className='text-center text-primary'>Date created: {dateCreated}</p>
            </div>
            <footer className="card-footer">
                {/* will do in future development! */}
                {/* <button onClick={handleEdit} className="button is-info">Edit</button> */}
                <Space marginRight='10px' />
                <button onClick={handleDelete} className="button is-danger">Delete</button>
            </footer>
        </div>
        <Space marginBottom='10px' />
    </div>
}

const NoteList = () => {
    const [item, setItem] = useState({data:[]})

    const getItem = async () => await axios.get('https://firnaz-enotes.herokuapp.com/items/').then(res => setItem(res)).catch(err => console.log(err))

    useEffect(() => {
        getItem()
    }, [item])

    return <div className='grid-container'>
        {item.data.map((item, index) => {
            return <NotesCard key={`item-${index}`} id={item._id} header={item.title} content={item.content} dateCreated={parseDate(item.createdAt)} />
        })}
    </div>
} 

export default NoteList