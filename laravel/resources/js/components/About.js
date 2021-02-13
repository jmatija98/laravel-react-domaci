import React, {Component} from 'react';
import Student from './Student';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
  } from "react-router-dom";
  

export default class About extends Component {

    constructor(){
        super();
        this.state={
            st:[]
        }
    }

    

    componentDidMount(){
        axios.get('http://127.0.0.1:8000/api/students').then(response=>{
            this.setState({st:response.data});
        });
    }

    onDelete(students_id){
        axios.delete('http://127.0.0.1:8000/api/about/delete/'+students_id).then(response=>{
            var s=this.state.st;
            for(var i=0;i<s.length;i++){
                if(s[i].id==students_id){
                    s.splice(i,1);
                    this.setState({st:s})
                }
            }
        }); 
    }

 

    render(){
        return (
            <div>
                <table className="table table-striped">
                <thead>
                    <tr>
                        <th scope="col">First name</th>
                        <th scope="col">Last name</th>
                        <th scope="col">Action</th>
                        <th scope="col"></th>
                    </tr>
                </thead>
                <tbody>
                    {
                        this.state.st.map(students=>{
                            return(
                                <tr>
                                    <Router>    
                                    <td>{students.first_name}</td>
                                    <td>{students.last_name}</td>
                                    <td><a href="#" className="btn btn-danger" onClick={this.onDelete.bind(this,students.id)}>Delete</a></td>
                                    <td><Link className="btn btn-info" to={{pathname: "/student", state: {id:students.id}}}>Details</Link></td>
                                    <Route exact path='/student' component={Student}/>
                                    </Router>
                                </tr>
                            )
                        })
                    }
                    
                </tbody>
                </table>    
            </div>
        );
    }
}


