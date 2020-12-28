import { extend } from 'lodash';
import React, {Component} from 'react';
import {BrowserRouter as Router, Link, Route} from 'react-router-dom';
import Listing from './Listing';


export default class Add extends Component {
    render(){
        return (
            <div>
                <form>
                    <div className="form-group">
                        <label>Task name:</label>
                        <input className="form-control" type="text" placeholder="Example: Math algebra test1..."></input>
                    </div>
                    <div className="form-group">
                        <label>Grade</label>
                        <input className="form-control form-control-sm" type="text" placeholder="1-5"></input>
                    </div>
                    <button type="submit" className="btn btn-primary">Submit</button>
                    </form>
            </div>
        );
    }
}
