import React from 'react'
import './content/css/sidebar.css'

export default function SideBar() {
    return (
        <div className="sidebar">
            <div class="profile-pic">

            </div>
            <div class="side-links">
            <ul class="list-group">
                <li class="list-group-item active">Dashboard</li>
                <li class="list-group-item">Lessons</li>
                <li class="list-group-item">Resources</li>
                <li class="list-group-item">Chat</li>
                <li class="list-group-item">Settings</li>
                </ul>

            </div>

        </div>
    )
}
