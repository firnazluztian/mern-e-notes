import React, { useState, useEffect, Fragment, useContext } from 'react'
import axios from 'axios'
import { AppContext } from '../../../data/globalState'
import { parseDate } from '../../../data/helperTools'

// const dummyAPI = { id: 0, title: 'Biology class', content: faker.lorem.paragraphs() + faker.lorem.paragraphs(), dateCreated: '10.00pm 05/03/2020'}

const NoteDisplayPanel = () => {
    const {state} = useContext(AppContext)   
    const [noteData, setNoteData] = useState({data:[]})

    const getNoteByID = async (id) => await axios.get(`https://firnaz-enotes.herokuapp.com/items/${id}`).then(res => setNoteData(res)).catch(err => console.log(err))

    useEffect(() => { getNoteByID(state.note_id) }, [state.note_id])

    return <Fragment>
        {Object.keys(noteData).slice(0,1).map((item, index) => {
            return <div className="card card-notes card-display-panel" key='index'>
                <header className="card-header">
                    <h5 className="card-header-title text-white">{noteData[item].title}</h5>
                </header>
                <div className="card-content">
                    <div className="content">
                        {state.note_id !== '' ? null : '( click the icon on top right of a note to enlarge )'}
                        <p>{noteData[item].content}</p>
                        <p className='text-center text-primary'>{state.note_id !== '' ? `Date created: ${parseDate(noteData[item].createdAt)}` : ''}</p>
                    </div>
                </div>
            </div>
        })}
    </Fragment>
}

export default NoteDisplayPanel