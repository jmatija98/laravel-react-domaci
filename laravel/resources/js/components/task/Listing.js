import { extend } from 'lodash';
import React, {Component} from 'react';
import {BrowserRouter as Router, Link, Route} from 'react-router-dom';
import Add from './Add';


export default class Listing extends Component {
    render(){
        return (
            <div>
                <table className="table">
                <thead>
                    <tr>
                        <th scope="col">#</th>
                        <th scope="col">Task</th>
                        <th scope="col">Submit date</th>
                        <th scope="col">Last update date</th>
                        <th scope="col">Grade</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <th scope="row">1</th>
                        <td>Math</td>
                        <td>Date</td>
                        <td>Date</td>
                        <td>5</td>
                    </tr>
                    <tr>
                        <th scope="row">2</th>
                        <td>Math</td>
                        <td>Date</td>
                        <td>Date</td>
                        <td>5</td>
                    </tr>
                    <tr>
                        <th scope="row">3</th>
                        <td>Math</td>
                        <td>Date</td>
                        <td>Date</td>
                        <td>5</td>
                    </tr>
                </tbody>
                </table>
            </div>
        );
    }
}
