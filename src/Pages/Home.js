import React, { Component } from 'react'
import './Home.css' 
import Welcome from './Welcome'
import Calendar from './Calendar'
import HomeClasses from './HomeClasses'


class Home extends Component {
    render() {
        return (
            <div className='home-container'>
                <Welcome/>
                <Calendar/>
                <HomeClasses/>
            </div>
        )
    }
}

export default Home