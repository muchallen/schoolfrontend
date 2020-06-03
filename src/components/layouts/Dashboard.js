import React, { Component } from 'react'
import Header from './Header'
import Home from './content/Home'
import SideBar from './SideBar'
import './content/css/dashboard.css'

export class Dashboard extends Component {
    render() {
        return (
            <div className="">
                
                <div className="row">
                    <div className="col-md-3 m-0 p-0">
                    
                    <SideBar />
                    </div>
                    <div className="col-md-9 m-0 p-0 container">
                        <Header/>
                        <Home/>
                    </div>


                </div>
                
            </div>
        )
    }
}

export default Dashboard
