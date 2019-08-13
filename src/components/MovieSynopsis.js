import React, { Component } from 'react'
import { connect } from 'react-redux';
import { fetchMovie } from '../actions/moiveSearchAction';
import "./style.css"
class Synopsis extends Component {

    render() {
        const movies = this.props.coms

        return (
            (movies) ?
                <div>
                    {movies.overview}
                </div> : <div>Loading...</div>
        )

    }
}

const mapStateToProps = state => ({
    movie: state.movie
})

export default connect(mapStateToProps, { fetchMovie })(Synopsis)
