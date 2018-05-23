import React, { Component } from 'react'
import './Nav.css'
import {BrowserRouter as Router, Link} from 'react-router-dom'
import Auth from '../Services/Auth'
const auth = new Auth();

class Nav extends Component {
    render() {
        return(
            <Router>
            <div className='nav-container'>
                    <Link to='/about' className='about-link'> about </Link>
                    <Link to='/blog' className='blog-link'>  blog </Link>
                    <Link to='/classes' className='classes-link'> classes </Link>
                    <Link to='/gallery' className='gallery-link'> gallery </Link>
                    <div className="navbar-item join" onClick={() => {auth.login()}}/>
                    {/* <Link to='/home' className='home-link'>   </Link> */}
                    <a href='/student-portal' className='studentPortal-link'>  
                        <button className='student-portal-button'>
                            Student Portal
                        </button>
                    </a>
            </div>
            </Router>
        )
    }
}

export default Nav