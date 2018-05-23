import React, { Component } from 'react' 
import {BrowserRouter as Router, Route} from 'react-router-dom'
import About from './Pages/About'
import Blog from './Pages/Blog'
import Classes from './Pages/Classes'
import Gallery from './Pages/Gallery'
import Home from './Pages/Home'
import StudentPortal from './Pages/StudentPortal'
import {Callback} from './Pages/Callback'



class Routes extends Component {
    render() {
        return(
            <main>
            <Router>
                <div>
                    <Route exact path='/' component={Home}/>
                    <Route path='/about' component={About}/>
                    <Route path='/classes' component={Classes}/>
                    <Route path='/gallery' component={Gallery}/>
                    <Route path='/blog' component={Blog}/>
                    <Route exact path='/student-portal' component={StudentPortal}/>
                    <Route exact path='/callback' component={Callback}/>
                </div> 
            </Router>
        </main>
        )
    }
}

export default Routes