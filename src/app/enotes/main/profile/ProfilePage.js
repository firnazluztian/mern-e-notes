import React, { Fragment } from 'react'
import EnotesNavbar from '../../../widgets/layout/EnotesNavbar'
import Space from '../../../widgets/layout/Space'
import { Flex } from '../../../widgets/layout/Allignment'
import { toaster } from '../../../widgets/layout/toaster'
import { Intent, Button } from '@blueprintjs/core'

const ProfilePage = () => {
    return <Fragment>
        <EnotesNavbar />

        <Space marginTop='100px' />

        <div className='container'>
            <Flex>
                <p>hi im profile page</p>
                <Space marginRight='10px' />
                <button className='btn my-2 my-sm-0 is btn-danger'
                    onClick={() => toaster.show({message:'babi', intent: 'primary', timeout: 1000})}
                >
                    click me
                </button>
            </Flex>
            <Button large intent={Intent.PRIMARY}>success</Button>
            
        </div>
    </Fragment>
}

export default ProfilePage