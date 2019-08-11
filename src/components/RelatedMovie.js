import React, { Component } from 'react'
import { connect } from 'react-redux';
import { fetchRelatedMovies } from '../actions/relatedVideoAction';
import { fetchMovie } from '../actions/moiveSearchAction';
import "./style.css"
class RelatedMovie extends Component {

    componentWillMount() {
        console.log("Movi  sdcsdvwdv ")
        this.props.fetchRelatedMovies("");
        //  this.props.fetchMovie();
    }
    render() {

        const movies = this.props.movie.relatedItems.results
        console.log("Moviesm", movies)
        if (movies) {
            return (
                <div>
                    <ul className="fetchedMovie">
                        {movies.map(x => <li className="relatedMovie" key={x.id}>

                            <img src={"http://image.tmdb.org/t/p/w185//" + x.poster_path} alt="!"></img>
                            <div>{x.title}{x.rating}({x.release_date}) </div >
                            <div>
                                {x.popularity}
                            </div>
                            <div>Rating: {x.vote_average}</div>
                            <div>
                                <button style={{ marginLeft: "2px" }} >Play</button>
                                <button style={{ marginLeft: "2px" }}>Watch Later</button>
                                <button style={{ marginLeft: "2px" }}>Share</button>
                            </div>
                            <p className="movieDetails"> {x.overview}</p>


                        </li>)}
                    </ul>


                </div>
            )
        } else {
            return <div></div>
        }
    }
}

const mapStateToProps = state => ({

    movie: state.movie
})

export default connect(mapStateToProps, { fetchRelatedMovies ,fetchMovie})(RelatedMovie)
