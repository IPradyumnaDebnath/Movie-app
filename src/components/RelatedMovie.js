import React, { Component } from 'react'
import { connect } from 'react-redux';
import { fetchRelatedMovies } from '../actions/relatedVideoAction';
import { fetchMovie } from '../actions/moiveSearchAction';
import 'bootstrap/dist/css/bootstrap.css';

import "./style.css"
class RelatedMovie extends Component {

    componentWillMount() {
        console.log("Movi  sdcsdvwdv ")
        this.props.fetchRelatedMovies("");
        
    }
    render() {

        const movies = this.props.movie.relatedItems.results
             return (
            (movies) ?
                <div className="container">
                    <ul className="row list-group text-center">
                        {movies.map(x => <li key={x.id}>
                            <div className="list-group-item">
                                <img src={"http://image.tmdb.org/t/p/w185//" + x.poster_path} alt="!"></img>
                                <div className="list-group-item-heading"><h5>{x.title}{x.rating}</h5>({x.release_date}) </div >
                                <div>
                                    {x.popularity}
                                </div>
                                <div className="font-weight-bold">Rating: {x.vote_average}</div>
                                <div>
                                    <button className="btn btn-outline-success" >Play</button>
                                    <button className="btn btn-outline-info " >Watch Later</button>
                                    <button className="btn btn-outline-secondary" >Share</button>
                                </div>
                                <p className="list-group-item-text"> {x.overview}</p>

                            </div>
                        </li>)}
                    </ul>
                </div> : <div>
                  Loading...
                </div>
        )

    }
}

const mapStateToProps = state => ({

    movie: state.movie
})

export default connect(mapStateToProps, { fetchRelatedMovies, fetchMovie })(RelatedMovie)
