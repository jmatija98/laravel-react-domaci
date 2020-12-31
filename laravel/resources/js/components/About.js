import { extend } from 'lodash';
import React, {Component} from 'react';


export default class About extends Component {

    constructor(){
        super();
        this.state={
            st:[]
        }
    }

    componentDidMount(){
        axios.get('http://127.0.0.1:8000/api/students').then(response=>{
            this.setState({st:response.data});
        });
    }

    render(){
        return (
            <div>
                <table className="table">
                <thead>
                    <tr>
                        <th scope="col">ID</th>
                        <th scope="col">First name</th>
                        <th scope="col">Last name</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        this.state.st.map(students=>{
                            return(
                                <tr>
                                    <td>{students.id}</td>
                                    <td>{students.first_name}</td>
                                    <td>{students.last_name}</td>
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


