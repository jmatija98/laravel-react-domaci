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

    onDelete(students_id){
        axios.delete('http://127.0.0.1:8000/api/about/delete/'+students_id).then(response=>{
            var s=this.state.st;
            for(var i=0;i<s.length;i++){
                if(s[i].id==students_id){
                    s.splice(i,1);
                    this.setState({st:s})
                }
            }
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
                        <th scope="col">Action</th>
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
                                    <td><a href="#" className="btn btn-danger" onClick={this.onDelete.bind(this,students.id)}>Delete</a></td>
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


