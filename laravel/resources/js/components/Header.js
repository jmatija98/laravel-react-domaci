import { extend } from 'lodash';
import React, {Component} from 'react';
import {BrowserRouter as Router, Link, Route} from 'react-router-dom';
import Home from './Home';
import About from './About';
import Department from './Department';
import Index from './task/Index'

export default class Header extends Component {
    render(){
        return (
            <Router>
                <div>
                    <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
                        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                            <span className="navbar-toggler-icon"></span>
                        </button>

                        <div className="collapse navbar-collapse" id="navbarSupportedContent">
                            <ul className="navbar-nav mr-auto">
                                <li className="nav-item active">
                                    <Link className="nav-link" to="/home">Home</Link>
                                </li>
                                <li className="nav-item">
                                    <Link className="nav-link" to="/about">Students</Link>
                                </li>
                                <li className="nav-item">
                                    <Link className="nav-link" to="/task/index">Tasks</Link>
                                </li>
                                <li className="nav-item">
                                    <Link className="nav-link" to="/departments">Departments</Link>
                                </li>
                                <li className="nav-item">
                                    <a href='/logout' className="nav-link">Logout</a>
                                </li>
                            </ul>
                        </div>
                    </nav>
                    <Route exact path="/home" component={Home}/>
                    <Route exact path="/about" component={About}/>
                    <Route exact path="/task/index" component={Index}/>
                    <Route exact path="/departments" component={Department}/>

                    
                    
                </div>
            </Router>
        );
    }
}


