import React, { Component } from 'react'
import Header from './Header'
import Home from './content/Home'
import Classroom from './content/Classroom'
import Calendar from './content/Calender'
import Examination from './content/Examination'
import About from './content/About'
import Staff from './content/Staff'
import News from './content/News'
import SideBar from './SideBar'
import './content/css/dashboard.css'
import {
    BrowserRouter as Router,
    Switch,
    Route,
  } from "react-router-dom";
import Dash from './Dash'
export class Dashboard extends Component {
    render() {
        return (
            <Router>
            <div className="container-fluid dash">
                
                <div className="row">
                    <div className="col-md-2 m-0 p-0">
                    
                    <SideBar />
                    </div>
                    <div className="col-md-9 m-0 p-0 container">
                        <Header/>
                        <Switch>
                            <Route exact path="/">
                            <Home/>
                            </Route>
                            <Route path="/classroom">
                            <Classroom />
                            </Route>
                            <Route path="/calendar">
                            <Calendar />
                            </Route>
                            <Route path="/examination">
                            <Examination />
                            </Route>
                            <Route path="/news">
                            <News />
                            </Route>
                            <Route path="/staff">
                            <Staff />
                            </Route>
                            <Route path="/dash">
                            <Dash />
                            </Route>
                            <Route path="/about">
                            <About />
                            </Route>        
                        </Switch>
                        
                    </div>


                </div>
                
            </div>
            
            </Router>
        )
    }
}

export default Dashboard
