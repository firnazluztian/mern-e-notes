import React from 'react'
import EnotesNavbar from '../../../widgets/layout/EnotesNavbar'
import Space from '../../../widgets/layout/Space'
import { Flex } from '../../../widgets/layout/Allignment'

const ProfilePage = () => {
    return <div>
        <EnotesNavbar />

        <Space marginTop='100px' />

        <div className='container'>
            <Flex>
                <p>hi im profile page</p>
                <Space marginRight='10px' />
                <button className='btn my-2 my-sm-0 is btn-danger'>click me</button>
            </Flex>
            
        </div>
    </div>
}

export default ProfilePage