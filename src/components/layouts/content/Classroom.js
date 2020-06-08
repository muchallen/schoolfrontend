import React, {useState } from 'react'
import {Modal , Button} from 'react-bootstrap'

export function Classroom () {

  const [showjoin, setShowJoin] = useState(false)
  const handleCloseJoin =()=>setShowJoin(false)

  const [showcreate, setShowCreate] = useState(false)
  const handleCloseCreate =()=>setShowCreate(false)
        
  const handleShowJoin=(e)=>{

    setShowJoin(true)
  }
  const handleShowCreate=(e)=>{

    setShowCreate(true)
  }
        return (
            <div className="classroom" style={
                {
                    
                }
            }>

<hr></hr>

<h3 className="text-center headings ">Welcome Name</h3>
    <hr style={{margin:"0 25em 5em 25em"}} ></hr>
                <div className="card" style={{width:"50%",
                margin:"auto"
            }}>
              <button id="join" className="btn  btn-primary m-4" onClick={handleShowJoin}> join classroom</button>
              <button id="create" className="btn btn-primary btn-success m-4" onClick={handleShowCreate}>create classroom</button>
                </div>
               

<h3 className="text-center headings mt-5 mb-2 ">Classrooms</h3>
    <hr style={{margin:"0 25em 0 25em "}} ></hr>
                <div style={{
                    display:'flex',
                    marginTop:'3em',
                    justifyContent:'center'
                }}>
                    <div className="card ml-4" style={{width:"75%",
                    justifySelf:"flex-end"
                }} >
                    <div className="card-body">
                   
<table class="table table-striped mt-4">
  <thead>
    <tr>
      <th scope="col">ID</th>
      <th scope="col">Class Name</th>
      <th scope="col">Class Code</th>
      <th scope="col"></th>
      
    </tr>
  </thead>
  <tbody>
    <tr>
      <th scope="row">12</th>
      <td>Biology Form 3 </td>
      <td>qwrt6</td>
      <td><button className="btn btn-success mr-2 " style={{width:"5em"}}>join</button>
         <button className="btn btn-primary "  style={{width:"5em"}}>Info</button></td>
    </tr>
    <tr>
    <th scope="row">45</th>
      <td>Shona Form 2</td>
      <td>ednntb56</td>
      <td><button className="btn btn-success mr-2 " style={{width:"5em"}}>join</button>
         <button className="btn btn-primary " style={{width:"5em"}}>Info</button></td>
    </tr>
    <tr>
    <th scope="row">12</th>
      <td>History Upper 6</td>
      <td>utyr45</td>
      <td><button className="btn btn-success mr-2 " style={{width:"5em"}}>join</button>
         <button className="btn btn-primary " style={{width:"5em"}}>Info</button></td>
    </tr>
  </tbody>
</table>

                            </div>

                            </div>
</div>
                            

<Modal
        show={showjoin}
        onHide={handleCloseJoin}
        backdrop="static"
        keyboard={false}
      >
        <Modal.Header closeButton>
          <Modal.Title>Join Class</Modal.Title>
        </Modal.Header>
        <Modal.Body>
        <form className="form-group">   
      <input className="form-control m-2" placeholder="Class Code"/>
      
      </form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleCloseJoin}>
            Close
          </Button>
          <Button variant="primary">Join</Button>
        </Modal.Footer>
      </Modal>
      <Modal
        show={showcreate}
        onHide={handleCloseCreate}
        backdrop="static"
        keyboard={false}
      >
        <Modal.Header closeButton>
          <Modal.Title> Create Class</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <form className="form-group">   
      <input className="form-control m-2 " placeholder="Class Name"/>
      <input className="form-control m-2 " placeholder="Subject"/>
      <input className="form-control m-2" placeholder="Class Code"/>
      </form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleCloseCreate}>
            Close
          </Button>
          <Button variant="primary">Create</Button>
        </Modal.Footer>
      </Modal>
                    </div>

                
        )
    
}

export default Classroom
