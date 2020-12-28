import { extend } from 'lodash';
import React, {Component} from 'react';
import {BrowserRouter as Router, Link, Route} from 'react-router-dom';
import Add from './Add';
import Listing from './Listing';

export default class Index extends Component {
    render(){
        return (
            <div>
                <Router>
                    <div>
                        <Link to="/task" className="btn btn-primary">Listing</Link> &nbsp;
                        <Link to="/task/Add" className="btn btn-primary">Add</Link>

                        <Route exact path="/task" component={Listing}></Route>
                        <Route exact path="/task/add" component={Add}></Route>
                    </div>
                </Router>
            </div>
        );
    }
}


