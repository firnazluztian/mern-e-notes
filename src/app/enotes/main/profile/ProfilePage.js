import React, { Fragment, useEffect } from 'react'
import EnotesNavbar from '../../../widgets/layout/EnotesNavbar'
import Space from '../../../widgets/layout/Space'
import { toastPrimary } from '../../../widgets/layout/toaster'
import NoteCreator from './NoteCreator'
import NoteList from './NoteList'

const ProfilePage = () => {
    useEffect(() => toastPrimary('logged in'))
    return <Fragment>
        <EnotesNavbar />

        <Space marginTop='5em' />

        <div className='container'>
            <h1>Notes</h1>
            <div className='columns'>
                <div className='column'><NoteCreator /></div>
                <div className='column'><NoteList /></div>
            </div>
        </div>

    </Fragment>
}

export default ProfilePage