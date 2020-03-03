import React, { Fragment } from 'react'
import EnotesNavbar from '../../../widgets/layout/EnotesNavbar'
import Space from '../../../widgets/layout/Space'

const ProfilePage = () => {
    return <Fragment>
        <EnotesNavbar />

        <Space marginTop='5em' />

        <div className='container'>
            <h1>Notes</h1>
        </div>

    </Fragment>
}

export default ProfilePage