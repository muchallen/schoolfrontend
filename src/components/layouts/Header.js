import React from 'react'
import {Link} from 'react-router-dom'
import './content/css/header.css'

export default function Header() {
    return (
    
            
  <div className="nav-div">
  <div class="input-group mr-5 search-div mt-3 mb-3" >
  <input type="text" class="form-control" placeholder="Search Here" aria-label="Search" />
  <div class="input-group-append" >
    <button className=" btn " style={{
                    backgroundColor:"#00bfa0"
                }}> 
                <span className="fas fa-search mr-2" style={{
                    color:"#ffffff"
                }}></span>
                    </button>
  </div>
</div>

<div className="div-icons-1 mr-4 mb-3">
<span className="fas fa-bell " style={{
                    color:"#00bfa0",
                    fontSize:"1.5em"
                }}></span>
</div>
<div className="div-icons-2 mr-4 mb-3">
<span className="fas fa-envelope" style={{
                    color:"#00bfa0",
                    fontSize:"1.5em"
                }}></span>
</div>
<div className="div-icons-3 mr-3 mb-3">
<span className="fas fa-user-circle" style={{
                    color:"#00bfa0",
                    fontSize:"1.5em"
                }}></span>
</div>
</div>


    
    )
}
