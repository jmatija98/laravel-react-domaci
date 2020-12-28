import { extend } from 'lodash';
import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import Footer from './Footer';
import Header from './Header'

export default class Index extends Component {
    render(){
        return (
            <div className="container">
                <Header/>
                <div className="row justify-content-center">
                    <div className="col-md-8">
                        <div className="card">
                            <div className="card-header">Index Component</div>

                            <div className="card-body">I'm an index component!</div>
                        </div>
                    </div>
                </div>
                <Footer/>
            </div>
        );
    }
}


if (document.getElementById('app')) {
    ReactDOM.render(<Index />, document.getElementById('app'));
}
