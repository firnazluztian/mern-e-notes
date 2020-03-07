import React, { Fragment, useContext} from 'react'
import EnotesNavbar from '../../../widgets/layout/EnotesNavbar'
import NoteCreator from './NoteCreator'
import NoteList from './NoteList'
import { AppContext } from '../../../data/globalState'
import NoteDisplayPanel from './NoteDisplayPanel'

const ProfilePage = () => {
    const { state } = useContext(AppContext)
    
    return <Fragment>

        <EnotesNavbar />

        <div className='container-full-width profile-page-container'>
            <div className={state.notePanel ? 'container-full-width card' : 'container card'} style={{backgroundColor: 'white', padding: '1em'}}>
                <div className='columns'>
                    <div className='column'><NoteCreator /></div>
                    <div className='column'><NoteList /></div>
                    {state.notePanel && <div className='column'><NoteDisplayPanel /></div>}
                </div>
            </div>
        </div>
        
    </Fragment>
}

export default ProfilePage