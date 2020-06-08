import React, { Component } from 'react'
import Chat from './content/Chat'
import Barchart from './content/Dounant'
import Linechart from './content/Linechart'
import './content/css/main.css'

export class Dash extends Component {
    render() {
        return (
            <div>
<hr></hr>
            
                <div className="row">
                <div className="col-md-3 m-5">
                <div className="card card-dash ml-2 card-dash-1" >
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
                    <div className="col-md-3 m-5">
                    <div className="card card-dash ml-2 card-dash-2" >
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
                    <div className="col-md-3 m-5">
                    <div class="card card-dash ml-2 card-dash-4" >
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
                    

                </div>
                <hr></hr>
                <div className="row">
                    <div className="col-md-8">
                        <div className="row">
                        <div className="col-md-6 pb-0 mb-0 ">
                        <div class="card "  >
                    <div className="card-body ">
                    
                    <Chat />
           
                        
                     </div>
                </div>
                        </div>
                        <div className="col-md-6">
                        <div className="card " >
                    <div className="card-body ">
                    
                    <Linechart />
           
                        
                     </div>
                </div>
                        </div>
                        <div className="col-md-10 ml-5 mt-2">
                        <div className="card " >
                    <div className="card-body ml-5">
                    
                    <Barchart />
           
                        
                     </div>
                </div>
                        </div>
                        </div>
                        </div>
                        <div className="col-md-4">
                            <div className="card">
                            <div className="card-body">
                            <table class="table table-striped">
  <thead>
    <tr>
      <th scope="col">#</th>
      <th scope="col">First</th>
      <th scope="col">Last</th>
      <th scope="col">Handle</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <th scope="row">1</th>
      <td>Mark</td>
      <td>Otto</td>
      <td>@mdo</td>
    </tr>
    <tr>
      <th scope="row">2</th>
      <td>Jacob</td>
      <td>Thornton</td>
      <td>@fat</td>
    </tr>
    <tr>
      <th scope="row">3</th>
      <td>Larry</td>
      <td>the Bird</td>
      <td>@twitter</td>
    </tr>
  </tbody>
</table>

                            </div>

                            </div>

                            <div className="card mt-5">
                            <div className="card-body">
                            <table class="table table-striped">
  <thead>
    <tr>
      <th scope="col">#</th>
      <th scope="col">First</th>
      <th scope="col">Last</th>
      <th scope="col">Handle</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <th scope="row">1</th>
      <td>Mark</td>
      <td>Otto</td>
      <td>@mdo</td>
    </tr>
    <tr>
      <th scope="row">2</th>
      <td>Jacob</td>
      <td>Thornton</td>
      <td>@fat</td>
    </tr>
    <tr>
      <th scope="row">3</th>
      <td>Larry</td>
      <td>the Bird</td>
      <td>@twitter</td>
    </tr>
  </tbody>
</table>

                            </div>

                            </div>


                        </div>
                
                  
                </div>
                
            </div>
        )
    }
}

export default Dash
