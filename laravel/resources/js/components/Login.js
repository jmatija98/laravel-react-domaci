import { extend } from 'lodash';
import React, {Component} from 'react';
import {BrowserRouter as Router, Link, Route} from 'react-router-dom';
import axios from 'axios';



export default class Login extends Component {

    constructor(){
        super();
        this.onChangeUser=this.onChangeUser.bind(this);
        this.onChangePassword=this.onChangePassword.bind(this);
        this.onSubmit=this.onSubmit.bind(this);
        
        
        this.state={
            user:' ',
            password:' '
        };
    }

    onChangeUser(e){
        this.setState({
            user:e.target.value
        });
    }

    onChangePassword(e){
        this.setState({
            password:e.target.value
        });
    }

    onSubmit(e){
        e.preventDefault();
        console.log(this.state.user);
        fetch('http://127.0.0.1:8000/api/login',{
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
                console.log(resp)
            })
        })
    }



    render(){
        return (
            <div>
                <form onSubmit={this.onSubmit}>
                
                    <div className="form-group">
                        <label>Username:</label>
                        <input className="form-control" type="text" id="user" onChange={this.onChangeUser} ></input>
                    </div>
                    <div className="form-group">
                        <label>Password</label>
                        <input className="form-control form-control-sm" type="password" id="password" onChange={this.onChangePassword} ></input>
                    </div>
                    <button type="submit" className="btn btn-primary" >Submit</button>
                    </form>  
            </div>
        );
    }
}
