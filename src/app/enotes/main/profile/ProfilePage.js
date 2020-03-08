import React, { Fragment, useContext, useEffect} from 'react'
// import { navigate } from '@reach/router'
import EnotesNavbar from '../../../widgets/layout/EnotesNavbar'
import NoteCreator from './NoteCreator'
import NoteList from './NoteList'
import { AppContext } from '../../../data/globalState'
import NoteDisplayPanel from './NoteDisplayPanel'

const ProfilePage = () => {
    const { state } = useContext(AppContext)
    
    useEffect(() => {
        // NEED FIXING
        // Expected: state.isUserLoggedIn will stay to forbid user from accessing profile page before login
        // Actually Happened: working as expected but state.isUserLoggedIn is reset on refresh. will need to be fixed and only change to false on logout
        console.log('@state.isUserLoggedIn', state.isUserLoggedIn)
        // if (!state.isUserLoggedIn) navigate('/home')
    },[state.isUserLoggedIn])

    return <Fragment>

        <EnotesNavbar />

        <div className='container-full-width profile-page-container'>
            {/* <div className={state.notePanel ? 'container-full-width card' : 'container card'} style={{backgroundColor: 'white', padding: '1em'}}> */}
            <div className={'container-full-width card'} style={{backgroundColor: 'white', padding: '1em'}}>
                <div className='columns'>
                    <div className='column'><NoteCreator /></div>
                    <div className='column'><NoteList /></div>
                    <div className='column'><NoteDisplayPanel /></div>
                    {/* {state.notePanel && <div className='column'><NoteDisplayPanel /></div>} */}
                </div>
            </div>
        </div>
        
    </Fragment>
}

export default ProfilePage