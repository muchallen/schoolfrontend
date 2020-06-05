import React, { Component } from 'react'
import Chat from './content/Chat'
import Barchart from './content/Bar'
import './content/css/main.css'

export class Dash extends Component {
    render() {
        return (
            <div>
<hr></hr>
            
                <div className="row">
                <div className="col-md-3">
                <div class="card card-dash ml-2 card-dash-1" >
                    <div className="card-body card-body-details ">
                    <div className ="card-details">
                    <span className="fas fa-users" style={{
                    color:"#F8F9FA",
                    fontSize:"4em"
                }}></span>
                     <p className="text-white">Students</p>
                    </div>
                <h5 className="text-white card-number card-total">350</h5>
           
                        
                     </div>
                </div>

                    </div>
                    <div className="col-md-3">
                    <div class="card card-dash ml-2 card-dash-2" >
                    <div className="card-body card-body-details">
                    <div className ="card-details">
                    <span className="fas fa-school" style={{
                    color:"#F8F9FA",
                    fontSize:"4em"
                }}></span>
                     <p className="text-white">Classes</p>
                    </div>
                <h5 className="text-white card-number card-total">25</h5>
           
                        
                     </div>
                </div>

                    </div>
                    <div className="col-md-3">
                    <div class="card card-dash ml-2 card-dash-3" >
                    <div className="card-body card-body-details">
                    <div className ="card-details">
                    <span className="fas fa-user" style={{
                    color:"#F8F9FA",
                    fontSize:"4em"
                }}></span>
                     <p className="text-white">Teachers</p>
                    </div>
                <h5 className="text-white card-number card-total">10</h5>
           
                        
                     </div>
                </div>

                    </div>
                    <div className="col-md-3">
                    <div class="card card-dash ml-2 card-dash-4" >
                    <div className="card-body card-body-details">
                    <div className ="card-details">
                    <span className="fas fa-users" style={{
                    color:"#F8F9FA",
                    fontSize:"4em"
                }}></span>
                     <p className="text-white">Data Usage</p>
                    </div>
                <h5 className="text-white card-number card-total">350</h5>
           
                        
                     </div>
                </div>

                    </div>

                </div>
                <hr></hr>
                <div className="row">
                        <div className="col-md-5 m-4">
                        <div class="card " >
                    <div className="card-body ">
                    
                    <Chat />
           
                        
                     </div>
                </div>
                        </div>
                        <div className="col-md-5 m-4">
                        <div class="card " >
                    <div className="card-body ">
                    
                    <Barchart />
           
                        
                     </div>
                </div>
                        </div>
                
                  
                </div>
                
            </div>
        )
    }
}

export default Dash
