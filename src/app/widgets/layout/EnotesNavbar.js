import React from 'react'
import { Link } from '@reach/router'
import Space from './Space';

const NavList = props => {
    return (
      <div>
        <li class={'nav-item ' + props.isActive}>
          <Link className="nav-link" to={props.link}>{props.name} <span class="sr-only">(current)</span></Link>
        </li>
      </div>
    );
  };

const EnotesNavbar = () => {
    return <nav class="navbar navbar-expand-lg navbar-light">
        E-NOTES

        <Space marginRight="10px" />
  
        <button
          class="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
        <span class="navbar-toggler-icon" />
        </button>

        <div class="collapse navbar-collapse dropdown-list" id="navbarNav">
          <ul class="navbar-nav mr-auto">
              <NavList name="Profile" isActive="active" link="/profile"/>
          </ul>

          <div className="login-container">
              <Link to='/home'>
              <button
                  className='btn my-2 my-sm-0 is btn-danger'
                  type="submit"
              >
                  LOGOUT
              </button>
              </Link>
          </div>
        </div>
    </nav>
}

export default EnotesNavbar