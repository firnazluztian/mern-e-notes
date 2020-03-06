import React from 'react'
import { navigate } from '@reach/router'
import Space from './Space'
import { toastSuccess } from './toaster'

// const NavList = props => {
//     return (
//       <div>
//         <li className={'nav-item ' + props.isActive}>
//           <Link classNameName="nav-link" to={props.link}>{props.name} <span className="sr-only">(current)</span></Link>
//         </li>
//       </div>
//     );
// }

const EnotesNavbar = () => {
    return <nav className="navbar navbar-expand-lg navbar-light">
        E-NOTES

        <Space marginRight="10px" />
  
        <button
          className="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
        <span className="navbar-toggler-icon" />
        </button>

        <div className="collapse navbar-collapse dropdown-list" id="navbarNav">
          <ul className="navbar-nav mr-auto">
              {/* <NavList name="Profile" link="/profile"/> */}
          </ul>

          <div className="login-container">
              
              <button
                  className='button is-danger'
                  type='submit'
                  onClick={() => {
                    toastSuccess('Successfully logged out')
                    navigate('/home')}
                  }
              >
                LOGOUT
              </button>
          </div>
        </div>
    </nav>
}

export default EnotesNavbar