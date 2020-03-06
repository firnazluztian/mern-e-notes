import React from 'react'
import { Link } from '@reach/router'

const NotFound404Page = () => {
    return <div className='row' style={{height:'100vh'}}>
        <div className='col-sm-12 my-auto'>
            <div className='mx-auto align-items-center'>
                <h1 className='text-center'>Error 404 - Page not found :(</h1>
                <h5 className='text-center'>
                    This might be because: You have typed the web address incorrectly, or<br />
                    the page you were looking for may have been moved, updated or deleted. <Link to='/home'>go back to home page</Link>
                </h5>
            </div>
        </div>
        }
    </div>
}

export default NotFound404Page
