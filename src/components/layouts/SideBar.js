import React from 'react'
import './content/css/sidebar.css'
import { Link } from 'react-router-dom/cjs/react-router-dom.min'

export default function SideBar() {
    return (
        <div className="sidebar">
            <div className="profile-pic">
                <img className="logo" src={require("../layouts/content/asserts/logo.png")} style={{width:100,height:100}} alt=""/>
                <h5 className="logo-name">E-Learning Academy </h5>
            </div>
            <hr></hr>
            <div className="side-links-1 m-0 p-0">
            <ul className="list-group-1 m-0 p-0">
                <li ><Link className="text-secondary list-group-item" to="/">
                    <span className="fas fa-house-user mr-2" style={{
                    color:"#00bfa0",
                    fontSize:"1.5em"
                }}></span>  Home</Link></li>
                <li ><Link className="text-secondary list-group-item" to="/dash"><span className="fas fa-chart-pie mr-2" style={{
                    color:"#00bfa0",
                    fontSize:"1.5em"
                }}></span> Dashboard</Link></li>
                <li ><Link className="text-secondary list-group-item" to="/news">
                <span className="fas fa-newspaper mr-2" style={{
                    color:"#00bfa0",
                    fontSize:"1.5em"
                }}></span> News</Link></li>
                <li ><Link className="text-secondary list-group-item" to="/staff"><span className="fas fa-users mr-2" style={{
                    color:"#00bfa0",
                    fontSize:"1.5em"
                }}></span> Staff</Link></li>
                
                </ul>

            </div>
            <hr></hr>
            <div className="side-links-1 m-0 p-0">
            <ul className="list-group-1 m-0 p-0">
                
                <li ><Link className="text-secondary list-group-item" to="/classroom"> <span className="fas fa-school mr-2" style={{
                    color:"#00bfa0",
                    fontSize:"1.5em"
                }}></span> Classroom</Link></li>
                <li ><Link className="text-secondary list-group-item" to="/settings"> <span className="fas fa-video mr-2" style={{
                    color:"#00bfa0",
                    fontSize:"1.5em"
                }}></span> Videos</Link></li>
                <li ><Link className="text-secondary list-group-item" to="/settings"> <span className="fas fa-users-cog mr-2" style={{
                    color:"#00bfa0",
                    fontSize:"1.5em"
                }}></span> Settings</Link></li>
                <li ><Link className="text-secondary list-group-item" to="/about">
                <span className="fas fa-thumbtack mr-2" style={{
                    color:"#00bfa0",
                    fontSize:"1.5em"
                }}></span>
                      About</Link></li>
                
                </ul>

            </div>
            <hr></hr>

            <div className="side-links-1 m-0 p-0">
                <p><strong>My Files</strong></p>
            <ul className="list-group-1 m-0 p-0">
                <li ><Link className="text-secondary list-group-item" to="/dash"> 
                <span className="fas fa-folder mr-2" style={{
                    color:"#00bfa0",
                    fontSize:"1.5em"
                }}></span> Assigments</Link></li>
                <li ><Link className="text-secondary list-group-item" to="/lessons"> 
                <span className="fas fa-folder mr-2" style={{
                    color:"#00bfa0",
                    fontSize:"1.5em"
                }}></span>
                Downloads</Link></li>
                
                <li ><Link className="text-secondary list-group-item" to="/chat">
                <span className="fas fa-folder mr-2" style={{
                    color:"#00bfa0",
                    fontSize:"1.5em"
                }}></span>
                    Documents</Link></li>
                    <li ><Link className="text-secondary list-group-item" to="/resources">
                <span className="fas fa-clipboard-list mr-2" style={{
                    color:"#00bfa0",
                    fontSize:"1.5em"
                }}></span>
                    Reports</Link></li>
               
                </ul>

            </div>
        </div>
    )
}
