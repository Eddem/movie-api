import React, { Component } from 'react';
import { render } from "react-dom";
import {BrowserRouter, Route, NavLink} from 'react-router-dom';

// import Router from './App.jsx';
// import Results from './Results.jsx';

//Api reaquest
import Request from 'superagent';
import _ from 'lodash';

import Index from '../index.jsx';

//css
import '../css/style.css';

class Details extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            key: "8ff486de926af1dcde1f80cd213d9fc0",
            movieId: this.props.id,
            title: this.props.title,
            movieDetails: this.props.name
        };

        this.componentWillUpdate = this.componentWillUpdate.bind(this);
    }

    componentWillUpdate(nextProps, nextState){

        var newID = nextProps.id;
        var newTitle = nextProps.title;
        var newMovieDetails = nextProps.movieDetails;

        nextState.movieId = newID;
        nextState.title = newTitle;
        nextState.movieDetails = newMovieDetails;

    }


    render() {

        let key = this.state.key;
        let movieId = this.state.movieId;
        let title = this.state.title;

        let movieDetails = this.state.movieDetails;


        //console.log("movieDetails: ", this.state.movieDetails);

        // var url = "https://api.themoviedb.org/3/movie/" + movieId + "?api_key=" + key;
        //
        // console.log("new url, ", url);
        //
        // Request.get(url).then((response) => {
        //     this.setState({
        //         details: response.body
        //     })
        // });


        var details = _.map(movieDetails, (detail) => {
            return <p>{detail.overview}</p>

        });

        return (
                <div className="details">
                    <h1>Details</h1>
                    {this.state.title}
                    <p>overview: </p>
                    {this.state.details}
                    {details}
                </div>
        );

    }

}

export default Details;



