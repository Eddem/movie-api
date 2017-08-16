import React, { Component } from 'react';
import { render } from "react-dom";
import {BrowserRouter, Route, NavLink} from 'react-router-dom';


import Details from './Details.jsx';

//Api reaquest
import Request from 'superagent';
import _ from 'lodash';

import Index from '../index.jsx';

//css
import '../css/style.css';

class Results extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            key: "8ff486de926af1dcde1f80cd213d9fc0",
            movieId: ''
        };

        this.getTitle = this.getTitle.bind(this);

    }


    getTitle(event){
        console.log("overview ", event.target.className);

        this.setState({title: event.target.text});
        this.setState({movieId: event.target.className});
    }
  
    setDetails(){

    }

    render() {

        let value = this.props.title;

        let movieId = this.state.movieId.replace('active ', '');

        let val = value.replace(' ','%20');
        let key = this.state.key;


        var url = 'https://api.themoviedb.org/3/search/movie?api_key='+ key +'&language=en-US&query=' + val + '&page=1&include_adult=false';


        Request.get(url).then((response) => {
            this.setState({
                movies: response.body.results
            })
        });


        var movies = _.map(this.state.movies, (movie) => {
            return <div>
                <li><NavLink to='/details/' className={movie.id} onClick={this.getTitle}>{movie.title}<p className="overview" hidden>{movie.overview}</p></NavLink>

                </li>

                </div>
            });

        //console.log("Results: MovieDetails, ", this.state.movieDetails);
        

        return (
                    <BrowserRouter>
                        <div className="results">
                            <Route path="/details" render={ () => <Details title={this.state.title} name={this.state.movieDetails} id={movieId}/>}/>
                            <h1>Movies</h1>
                            {movies}
                        </div>
                    </BrowserRouter>

        );
    }

}

export default Results;



