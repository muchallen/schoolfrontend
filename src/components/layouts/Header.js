import React from 'react'

export default function Header() {
    return (
    
            <nav className="navbar navbar-expand-lg navbar-light bg-light">
  <a className="navbar-brand" href>Navbar</a>
  <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
    <span className="navbar-toggler-icon"></span>
  </button>

  <div className="collapse navbar-collapse" id="navbarSupportedContent">
    <ul className="navbar-nav mr-auto">
      <li className="nav-item active">
        <a className="nav-link" href>Home <span className="sr-only">(current)</span></a>
      </li>

      <li className="nav-item dropdown">
        <a className="nav-link dropdown-toggle" href id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
          Online Learning
        </a>
        <div className="dropdown-menu" aria-labelledby="navbarDropdown">
          <a className="dropdown-item" href>Class Room</a>
          <a className="dropdown-item" href>Calender</a>
          <div className="dropdown"></div>
          <a className="dropdown-item" href>Examination Results</a>
        </div>
      </li>
      <li className="nav-item">
        <a className="nav-link" href>News</a>
      </li>
      <li className="nav-item">
        <a className="nav-link" href>Events</a>
      </li>
      <li className="nav-item">
        <a className="nav-link" href>Staff</a>
      </li>
      <li className="nav-item">
        <a className="nav-link" href>About</a>
      </li>
   
      
    </ul>
    
  </div>
</nav>
    
    )
}