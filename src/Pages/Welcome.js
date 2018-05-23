import React, { Component } from 'react'
import './Welcome.css'
import Nav from '../components/Nav'
import iceage from './Home-photo.png'

class Welcome extends Component {
    render() {
        return (
            <div className='welcome-container'>
                <Nav/>
                <img src={iceage} className='home-photo'/>
                <div className='button-container'>
                <a href='/classes' className='apply-now-link'>
                    <button className='apply-now-button'>
                    apply now
                </button>
                </a>
                <a href='/classes' className='get-more-link'>
                    <button className='get-more-button'>
                    get more info
                    </button>
                </a>
                </div>
            </div>
        )
    }
}

export default Welcome