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
        axios.get('http://localhost:8000/homework').then(response=>{
            this.setState({hw:response.data});
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
                        <th scope="col">Student ID</th>
                        <th scope="col">Submit date</th>
                        <th scope="col">Grade</th>
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
