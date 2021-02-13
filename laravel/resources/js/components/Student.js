import React, {Component} from 'react';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
  } from "react-router-dom";
  

export default class Student extends Component {

    constructor(props){
        super(props);
        this.state = {
        id : this.props.match.params.id,
        hw:[]
        }
    }

    componentDidMount() {
        const { id } = this.props.location.state
        console.log(id);

        axios.get('http://127.0.0.1:8000/api/studentsById/'+id).then(response=>{
            this.setState({hw:response.data});
        });
    }

    render(){
        return (
            <tr>
                <table className="table table-sm table-striped">
                <thead>
                    <tr>
                        <th scope="col">Task</th>
                        <th scope="col">Submit date</th>
                        <th scope="col">Grade</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        this.state.hw.map(homework=>{
                            return(
                                <tr>
                                    <td>{homework.task}</td>
                                    <td>{homework.created_at}</td>
                                    <td>{homework.grade}</td>
                                </tr>
                            )
                        })
                    }
                    
                </tbody>
                </table>    
                <br></br>
               
            </tr>
        );
    }
}