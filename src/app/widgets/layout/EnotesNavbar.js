import React from 'react'
import { Link } from '@reach/router'

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
        <img
          src="https://static.thenounproject.com/png/105260-200.png"
          width="30"
          height="30"
          class="d-inline-block align-top"
          alt=""
          style={{marginRight: 10 + 'px'}}
        />
        E-NOTES
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
              <NavList name="Setting" isActive="active" link="/"/>
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