import React, { Component } from 'react';
import { render } from "react-dom";
import {BrowserRouter, Route, Link} from 'react-router-dom';

//Api reaquest
import Results from '../components/Results.jsx';

//css
import '../css/style.css';

class Search extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            value: ''
        };

        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChange(event) {
        this.setState({value: event.target.value});
    }

    handleSubmit(event) {
        let val = this.state.value.replace(' ', '%20');
        let key = this.state.key;



        //console.log("val", val);
        event.preventDefault();


    }

    render() {

        const value = this.state.value;

        return (
            <form className="search-form" onSubmit={this.handleSubmit}>
                <label>
                    <input type="text" value={this.state.value} placeholder="search a show" className="searchbar" onChange={this.handleChange} />
                </label>
                <BrowserRouter>
                    <div>
                        <Route path="/results" component={Results} />
                        <Link to="/results" className="search-btn">Search</Link>
                    </div>
                </BrowserRouter>
                <div>
                    <Results title={value}/>
                </div>
            </form>
        );
    }


}


export default Search;

