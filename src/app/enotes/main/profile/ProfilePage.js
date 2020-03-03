import React, { Fragment, useEffect } from 'react'
import EnotesNavbar from '../../../widgets/layout/EnotesNavbar'
import Space from '../../../widgets/layout/Space'
import { toastPrimary } from '../../../widgets/layout/toaster'

const ProfilePage = () => {
    useEffect(() => {
        toastPrimary('logged in')
    })
    return <Fragment>
        <EnotesNavbar />

        <Space marginTop='5em' />

        <div className='container'>
            <h1>Notes</h1>
        </div>

    </Fragment>
}

export default ProfilePage