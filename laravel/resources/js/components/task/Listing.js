import { extend } from 'lodash';
import React, {Component} from 'react';
import {BrowserRouter as Router, Link, Route} from 'react-router-dom';
import Add from './Add';
import axios from 'axios';


export default class Listing extends Component {

    constructor(){
        super();
        this.state={
            hw:[]
        }
    }

    
    componentDidMount(){
        axios.get('http://127.0.0.1:8000/api/homework').then(response=>{
            this.setState({hw:response.data});
        });
    }


    onDelete(homework_id){
        axios.delete('http://127.0.0.1:8000/api/task/delete/'+homework_id).then(response=>{
            var h=this.state.hw;
            for(var i=0;i<h.length;i++){
                if(h[i].id==homework_id){
                    h.splice(i,1);
                    this.setState({hw:h})
                }
            }
        }); 
    }

    render(){
        return (
            <div>
                <table className="table">
                <thead>
                    <tr>
                        <th scope="col">#</th>
                        <th scope="col">Task</th>
                        <th scope="col">Submit date</th>
                        <th scope="col">Grade</th>
                        <th scope="col">Student ID</th>
                        <th scope="col">Action</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        this.state.hw.map(homework=>{
                            return(
                                <tr>
                                    <td>{homework.id}</td>
                                    <td>{homework.task}</td>
                                    <td>{homework.created_at}</td>
                                    <td>{homework.grade}</td>
                                    <td>{homework.students_id}</td>
                                    <td><a href="#" className="btn btn-danger" onClick={this.onDelete.bind(this,homework.id)}>Delete</a></td>
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
