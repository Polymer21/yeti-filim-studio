import React, { Component } from 'react'
import './StudentPortal.css'

import { graphql } from 'react-apollo'


class StudentPortal extends Component {
    render() {

        console.log(this.props.data)
        return (
            <div className='student-portal-container'>
                <div className='login-container'>
                    <div className='login-title'>
                        Login
                    </div>
                    <input type='text' placeholder='username' className='login-user-name'/>
                    <input type='text' placeholder='password' className='login-user-pass'/>
                    <div className='login-buttons-container'>
                        <button className='login-button'>
                            Login
                        </button>
                        <a href='/' className='cancel-button'>
                        <button className='cancel-button'>
                            Cancel
                        </button>
                        </a>
                    </div>
                </div>
            </div>
        )
    }
}

export default StudentPortal