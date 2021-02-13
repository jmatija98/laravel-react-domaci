import { extend } from 'lodash';
import React, {Component} from 'react';
import {BrowserRouter as Router, Link, Route} from 'react-router-dom';
import axios from 'axios';

import {convert} from "../convert/post_request";


export default class Department extends Component {

    constructor(){
        super();
        this.state={
            d:[]
        }
    }

    
    componentDidMount(){
        axios.get('http://127.0.0.1:8000/api/department').then(response=>{
            this.setState({d:response.data});
        });
    }

    render(){
        return (
            <div>
                <table className="table table-striped">
                <thead>
                    <tr>
                        <th scope="col">#</th>
                        <th scope="col">Name</th>
                        <th scope="col">Faculty ID</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        this.state.d.map(department=>{
                            return(
                                <tr>
                                    <td>{department.id}</td>
                                    <td>{department.name}</td>
                                    <td>{department.faculty_id}</td>
                                </tr>
                            )
                        })
                    }
                </tbody>
                </table>    
                <button type="button" class="btn btn-dark" onClick={convert}>Generate PDF</button>
            </div>
        );
    }
}
