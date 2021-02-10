import { extend } from 'lodash';
import React, {Component} from 'react';
import axios from 'axios';

export default class Home extends Component {

  
    render(){
        return (
            <div>
                <br></br>
                <h1>Welcome back to our dashboard!</h1>
                <h3>Many new features like:</h3>
                <br></br>
               <div className="list-group">
                    <a href="#" className="list-group-item list-group-item-action flex-column align-items-start active">
                        <div className="d-flex w-100 justify-content-between">
                        <h5 className="mb-1">Adding new tasks</h5>
                        
                        </div>
                        <p className="mb-1">It is very important to keep track with student's homework and their submission. On our dashboard, that is very easy</p>
                        
                    </a>
                    <a href="#" className="list-group-item list-group-item-action flex-column align-items-start">
                        <div className="d-flex w-100 justify-content-between">
                        <h5 className="mb-1">Deleting old tasks</h5>
                        
                        </div>
                        <p className="mb-1">You can easily delete everything you find unnecessary or irrelevant</p>
                        
                    </a>
                    <a href="#" className="list-group-item list-group-item-action flex-column align-items-start">
                        <div className="d-flex w-100 justify-content-between">
                        <h5 className="mb-1">Reviewing student work</h5>
                        
                        </div>
                        <p className="mb-1">This is of course the most important part.</p>
                        
                    </a>
                </div>
            </div>
        );
    }
}


