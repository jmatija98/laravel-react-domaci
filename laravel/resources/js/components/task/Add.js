import { extend } from 'lodash';
import React, {Component} from 'react';
import {BrowserRouter as Router, Link, Route} from 'react-router-dom';
import Listing from './Listing';
import axios from 'axios';



export default class Add extends Component {

    constructor(){
        super();
        this.onChangeTask=this.onChangeTask.bind(this);
        this.onChangeID=this.onChangeID.bind(this);
        this.onChangeGrade=this.onChangeGrade.bind(this);
        this.onSubmit=this.onSubmit.bind(this);
        
        this.state={
            task:' ',
            students_id:' ',
            grade:' '
        };
    }

    onChangeTask(e){
        this.setState({
            task:e.target.value
        });
    }

    onChangeID(e){
        this.setState({
            students_id:e.target.value
        });
    }

    onChangeGrade(e){
        this.setState({
            grade:e.target.value
        });
    }

    onSubmit(e){
        e.preventDefault();
        console.log(this.state);
        fetch('http://127.0.0.1:8000/api/task/store',{
            method:'post',
            body:JSON.stringify(
                this.state
            ),
            headers:{
                'Accept':'application/json',
                'Content-type':'application/json',
            }
        }).then(function(response){
            response.json().then(function(resp){
                alert(resp)
            })
        })
        this.form.reset();
    }



    render(){
        return (
            <div>
                <form onSubmit={this.onSubmit} ref={form => this.form = form}>
                    <div className="form-group">
                        <label>Task name:</label>
                        <input className="form-control" type="text" id="task" onChange={this.onChangeTask} placeholder="Example: Math algebra test1..."></input>
                    </div>
                    <div className="form-group">
                        <label>Student id</label>
                        <input className="form-control form-control-sm" type="text" id="students_id" onChange={this.onChangeID} ></input>
                    </div>
                    <div className="form-group">
                        <label>Grade</label>
                        <input className="form-control form-control-sm" type="text" id="grade"  onChange={this.onChangeGrade} placeholder="1-5"></input>
                    </div>
                    <button type="submit" className="btn btn-primary" >Submit</button>
                    </form>  
            </div>
        );
    }
}
