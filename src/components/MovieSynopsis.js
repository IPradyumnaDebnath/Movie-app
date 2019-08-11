import React, { Component } from 'react'
import { connect } from 'react-redux';
import { fetchMovie } from '../actions/moiveSearchAction';
import "./style.css"
class Synopsis extends Component {
  
    render() {
        const movies = this.props.movie.item
        console.log("HHHHH",movies)
        if (movies) {
            return (
                <div>
                   
                   {movies.overview}
                    
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

export default connect(mapStateToProps, { fetchMovie })(Synopsis)
