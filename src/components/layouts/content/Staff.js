import React, { Component,useState } from 'react'
import Modals from './Modal'
import {Modal, Button} from 'react-bootstrap'



export function Staff () {
    const [show, setShow] = useState(false)

    const handleShow = () => setShow(true);
    const handleClose= () => setShow(false)
    
    
        return (
            <div>
                <Modals showModal={show} />
                <hr></hr>

                        <h3 className="text-center headings ">Our Staff</h3>
                        <hr style={{margin:"0 25em 0 25em"}} ></hr>
                <div className="row">
                
                    <div className="col-md-3 m-5">
                    < div className="card" style={{width: "18rem",
               alignItems:"center"
            }}>
                            <img className="card-img-top" src={require('./asserts/staff.png')} style={{
                                width:"50%"
                            }} alt=""/>
                                <div className="card-body" style={{
                                    textAlign:"center"
                                }}>
                                    <h5 className="card-title">Name</h5>
                                    <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                                    <button className="btn btn-primary" onClick={()=>handleShow()}>Contact Information</button>
                                    
                                </div>
                                </div>


                    </div>

                    
                    <div className="col-md-3 m-5">
                    < div className="card" style={{width: "18rem",
               alignItems:"center"
            }}>
                            <img className="card-img-top" src={require('./asserts/staff.png')} style={{
                                width:"50%"
                            }} alt=""/>
                               <div className="card-body" style={{
                                    textAlign:"center"
                                }}>
                                    <h5 className="card-title">Name</h5>
                                    <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                                    <button className="btn btn-primary">Contact Information</button>
                                </div>
                                </div>


                    </div>

                    
                    <div className="col-md-3 m-5">
                    < div className="card" style={{width: "18rem",
               alignItems:"center"
            }}>
                            <img className="card-img-top" src={require('./asserts/staff.png')} style={{
                                width:"50%"
                            }} alt=""/>
                                <div className="card-body" style={{
                                    textAlign:"center"
                                }}>
                                    <h5 className="card-title">Name</h5>
                                    <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                                    <button className="btn btn-primary">Contact Information</button>
                                </div>
                                </div>


                    </div>
                    

                </div>
                <div className="row">
                
                <div className="col-md-3 m-5">
                < div className="card" style={{width: "18rem",
               alignItems:"center"
            }}>
                            <img className="card-img-top" src={require('./asserts/staff.png')} style={{
                                width:"50%"
                            }} alt=""/>
                            <div className="card-body" style={{
                                    textAlign:"center"
                                }}>
                                <h5 className="card-title">Name</h5>
                                <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                                <button className="btn btn-primary">Contact Information</button>
                            </div>
                            </div>


                </div>

                
                <div className="col-md-3 m-5">
                < div className="card" style={{width: "18rem",
               alignItems:"center"
            }}>
                            <img className="card-img-top" src={require('./asserts/staff.png')} style={{
                                width:"50%"
                            }} alt=""/>
                            <div className="card-body" style={{
                                    textAlign:"center"
                                }}>
                                <h5 className="card-title">Name</h5>
                                <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                                <button className="btn btn-primary">Contact Information</button>
                            </div>
                            </div>


                </div>

                
                <div className="col-md-3 m-5">
                < div className="card" style={{width: "18rem",
               alignItems:"center"
            }}>
                            <img className="card-img-top" src={require('./asserts/staff.png')} style={{
                                width:"50%"
                            }} alt=""/>
                            <div className="card-body" style={{
                                    textAlign:"center"
                                }}>
                                <h5 className="card-title">Name</h5>
                                <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                                <button className="btn btn-primary">Contact Information</button>
                            </div>
                            </div>


                </div>
                

            </div>
            <div className="row">
                
                <div className="col-md-3 m-5">
                < div className="card" style={{width: "18rem",
               alignItems:"center"
            }}>
                            <img className="card-img-top" src={require('./asserts/staff.png')} style={{
                                width:"50%"
                            }} alt=""/>
                            <div className="card-body" style={{
                                    textAlign:"center"
                                }}>
                                <h5 className="card-title">Name</h5>
                                <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                                <button className="btn btn-primary">Contact Information</button>
                            </div>
                            </div>


                </div>

                
                <div className="col-md-3 m-5">
                < div className="card" style={{width: "18rem",
               alignItems:"center"
            }}>
                            <img className="card-img-top" src={require('./asserts/staff.png')} style={{
                                width:"50%"
                            }} alt=""/>
                            <div className="card-body" style={{
                                    textAlign:"center"
                                }}>
                                <h5 className="card-title">Name</h5>
                                <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                                <button className="btn btn-primary">Contact Information</button>
                            </div>
                            </div>


                </div>

                
                <div className="col-md-3 m-5">
                < div className="card" style={{width: "18rem",
               alignItems:"center"
            }}>
                            <img className="card-img-top" src={require('./asserts/staff.png')} style={{
                                width:"50%"
                            }} alt=""/>
                            <div className="card-body" style={{
                                    textAlign:"center"
                                }}>
                                <h5 className="card-title">Name</h5>
                                <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                                <button className="btn btn-primary">Contact Information</button>
                            </div>
                            </div>


                </div>
                

            </div>
            <div className="row">
                
                <div className="col-md-3 m-5">
                < div className="card" style={{width: "18rem",
               alignItems:"center"
            }}>
                            <img className="card-img-top" src={require('./asserts/staff.png')} style={{
                                width:"50%"
                            }} alt=""/>
                            <div className="card-body" style={{
                                    textAlign:"center"
                                }}>
                                <h5 className="card-title">Name</h5>
                                <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                                <button className="btn btn-primary">Contact Information</button>
                            </div>
                            </div>


                </div>

                
                <div className="col-md-3 m-5">
                < div className="card" style={{width: "18rem",
               alignItems:"center"
            }}>
                            <img className="card-img-top" src={require('./asserts/staff.png')} style={{
                                width:"50%"
                            }} alt=""/>
                           <div className="card-body" style={{
                                    textAlign:"center"
                                }}>
                                <h5 className="card-title">Name</h5>
                                <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                                <button className="btn btn-primary">Contact Information</button>
                            </div>
                            </div>


                </div>

                
                <div className="col-md-3 m-5">
               < div className="card" style={{width: "18rem",
               alignItems:"center"
            }}>
                            <img className="card-img-top" src={require('./asserts/staff.png')} style={{
                                width:"50%"
                            }} alt=""/>
                       <div className="card-body" style={{
                                    textAlign:"center"
                                }}>
                                <h5 className="card-title">Name</h5>
                                <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                                <button className="btn btn-primary">Contact Information</button>
                            </div>
                            </div>


                </div>
                

            </div>

            
      <Modal
        show={show}
        onHide={handleClose}
        backdrop="static"
        keyboard={false}
      >
        <Modal.Header closeButton>
          <Modal.Title>Modal title</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          I will not close if you click outside me. Don't even try to press
          escape key.
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary">Understood</Button>
        </Modal.Footer>
      </Modal>
   
            </div>
        )
    
}

export default Staff
