import React, { Fragment, useContext} from 'react'
import EnotesNavbar from '../../../widgets/layout/EnotesNavbar'
import Space from '../../../widgets/layout/Space'
import NoteCreator from './NoteCreator'
import NoteList from './NoteList'
import { AppContext } from '../../../App'

const ProfilePage = () => {
    const { state } = useContext(AppContext)
    
    return <Fragment>
        <EnotesNavbar />

        <Space marginTop='5em' />

        <div className={state.notePanel ? 'container-fluid' : 'container'}>
            <h1>Notes</h1>
            <div className='columns'>
                <div className='column'><NoteCreator /></div>
                <div className='column'><NoteList /></div>
                {state.notePanel && <div className='column'><NoteCreator /></div>}
            </div>
        </div>

    </Fragment>
}

export default ProfilePage