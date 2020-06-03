import React, { Component,Fragment } from 'react'
import {connect} from 'react-redux'
import propTypes from 'prop-types'
import {getStudents, deleteStudent} from '../action/students'
import './dash.css'


export class Dashboard extends Component {

    static propTypes = {
        student: propTypes.array.isRequired
    }

   
componentDidMount( ){
    this.props.getStudents();
    
}

    render() {
        
        console.log(this.props.student)
        return (
            <Fragment>
<div className="card card-form" >
  
<form className="form-addusers">
        <div className="form-group m-5">
            <label>username
            </label>
            <input className="form-control " name="username"></input>
        </div>
        <div className="form-group m-5">
            <label>email
            </label>
            <input className="form-control" name="email"></input>
        </div>
        <div className="form-group m-5">
            <label>password
            </label>
            <input className="form-control" name="password"></input>
        </div>

        <button className=""></button>

    </form>
  </div>




                <div className="container">
                    <div className="card">
                <h3>Students</h3>
                <table className="table table-stripped table-sm">
                    <thead>
                        <tr>
                        <th>Id</th>
                        <th>Username</th>
                        <th>Email</th>
                        <th></th>
                        </tr>
                    
                    </thead>
                    <tbody>
                       {this.props.student.map(stud=>(
                         <tr key={stud.id}><td>{stud.id}</td>
                         <td>{stud.username}</td>
                         <td>{stud.email}</td>
                         <td><button className="btn btn-danger btn-sm" onClick={this.props.deleteStudent.bind(this, stud.id)}>remove</button></td>
                        <td>
                         <button className="btn btn-info btn-sm">edit</button>
                         </td>
                         </tr>  
                       ))}
                    </tbody>
                </table>
                </div>
                </div>
            </Fragment>
        )
    }
}

const mapStateToProps =(state)=>({
    student: state.student.students
})

export default connect(mapStateToProps, {getStudents, deleteStudent}) (Dashboard)
